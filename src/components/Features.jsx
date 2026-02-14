import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

import { supabase } from '../supabaseClient';

const Features = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [submitting, setSubmitting] = React.useState(false);
    const [status, setStatus] = React.useState('idle'); // idle, success, error
    const [feedbackMsg, setFeedbackMsg] = React.useState('');

    const showFeedback = (type, msg) => {
        setStatus(type);
        setFeedbackMsg(msg);
        if (type === 'success') {
            setTimeout(() => {
                setStatus('idle');
                setFeedbackMsg('');
            }, 5000);
        }
    };

    const validateForm = () => {
        if (!message.trim()) {
            showFeedback('error', 'Message is required.');
            return false;
        }
        if (message.length < 10) {
            showFeedback('error', 'Message is too short (min 10 characters).');
            return false;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showFeedback('error', 'Please enter a valid email address.');
            return false;
        }
        return true;
    };

    const handleSend = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        if (submitting) return;

        try {
            setSubmitting(true);
            setStatus('idle');

            const payload = {
                user_id: null,
                name: name.trim() || null,
                email: email.trim() || null,
                message: message.trim(),
                platform: 'web',
            };

            const { error } = await supabase.from('bug_reports').insert([payload]);
            if (error) throw error;

            showFeedback('success', 'Message sent successfully! We will get back to you soon.');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
            showFeedback('error', 'Failed to send message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 bg-[var(--color-background)] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-8 text-center">Get in Touch</h1>
                    <p className="text-[var(--color-text-gray)] text-center mb-12 max-w-2xl mx-auto">
                        Have questions about the app? Need help with your account? Or just want to say hi? We'd love to hear from you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-text-dark)] mb-1">Email Us</h3>
                                    <p className="text-[var(--color-text-gray)] mb-2">For general inquiries and support.</p>
                                    <a href="mailto:afaanoromolearn@gmail.com" className="text-[var(--color-primary)] font-semibold hover:underline">
                                        afaanoromolearn@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[var(--color-orange)] shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-text-dark)] mb-1">Call Us</h3>
                                    <p className="text-[var(--color-text-gray)] mb-2">Available Mon-Fri, 9am - 5pm.</p>
                                    <a href="tel:+251707208601" className="text-[var(--color-primary)] font-semibold hover:underline">
                                        +251 707208601
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--color-text-dark)] mb-1">Visit Us</h3>
                                    <p className="text-[var(--color-text-gray)]">
                                        Addis Ababa, Ethiopia<br />
                                        Lideta
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100" onSubmit={handleSend}>
                            {status !== 'idle' && (
                                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {status === 'success' ? <CheckCircle size={20} className="shrink-0 mt-0.5" /> : <AlertCircle size={20} className="shrink-0 mt-0.5" />}
                                    <p className="text-sm font-medium">{feedbackMsg}</p>
                                </div>
                            )}
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={submitting}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={submitting}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                    placeholder="How can we help?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={submitting}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[var(--color-orange)] transition-colors shadow-lg shadow-green-100 flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
