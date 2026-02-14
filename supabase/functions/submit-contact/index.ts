// supabase/functions/submit-contact/index.ts
// Supabase Edge Function for rate-limited contact form submissions (IP-based)

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const MAX_REQUESTS_PER_WINDOW = 3    // max 3 submissions
const WINDOW_MINUTES = 10            // within a 10-minute window

Deno.serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Only allow POST
        if (req.method !== 'POST') {
            return new Response(
                JSON.stringify({ error: 'Method not allowed' }),
                { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Get client IP from headers (Supabase Edge Functions provide this)
        const clientIp =
            req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            req.headers.get('cf-connecting-ip') ||
            req.headers.get('x-real-ip') ||
            'unknown'

        // Parse the request body
        const body = await req.json()
        const { name, email, message } = body

        // --- Server-side validation ---
        if (!message || typeof message !== 'string' || message.trim().length < 10) {
            return new Response(
                JSON.stringify({ error: 'Message is required and must be at least 10 characters.' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (message.trim().length > 2000) {
            return new Response(
                JSON.stringify({ error: 'Message is too long (max 2000 characters).' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(
                JSON.stringify({ error: 'Please enter a valid email address.' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (name && name.length > 80) {
            return new Response(
                JSON.stringify({ error: 'Name is too long (max 80 characters).' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // --- Create Supabase client with SERVICE ROLE key (bypasses RLS) ---
        const supabaseAdmin = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )

        // --- Rate limit check ---
        // Clean up old entries (older than 1 hour)
        await supabaseAdmin
            .from('contact_rate_limits')
            .delete()
            .lt('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString())

        // Count recent submissions from this IP
        const windowStart = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString()
        const { count, error: countError } = await supabaseAdmin
            .from('contact_rate_limits')
            .select('*', { count: 'exact', head: true })
            .eq('ip_address', clientIp)
            .gte('created_at', windowStart)

        if (countError) {
            console.error('Rate limit check error:', countError)
            return new Response(
                JSON.stringify({ error: 'Internal server error.' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if ((count ?? 0) >= MAX_REQUESTS_PER_WINDOW) {
            return new Response(
                JSON.stringify({
                    error: `Too many messages. Please wait ${WINDOW_MINUTES} minutes before sending another message.`
                }),
                { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // --- Log this submission for rate limiting ---
        await supabaseAdmin
            .from('contact_rate_limits')
            .insert({ ip_address: clientIp })

        // --- Insert the bug report ---
        const { error: insertError } = await supabaseAdmin
            .from('bug_reports')
            .insert([{
                user_id: null,
                name: name?.trim() || null,
                email: email?.trim() || null,
                message: message.trim(),
                platform: 'web',
            }])

        if (insertError) {
            console.error('Insert error:', insertError)
            return new Response(
                JSON.stringify({ error: insertError.message || 'Failed to save message.' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        return new Response(
            JSON.stringify({ success: true, message: 'Message sent successfully!' }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (err) {
        console.error('Unexpected error:', err)
        return new Response(
            JSON.stringify({ error: 'Something went wrong. Please try again.' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
