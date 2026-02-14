/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#10B981',
                orange: '#F97316',
                orangeDark: '#EA580C',
                textDark: '#1F2937',
                textGray: '#6B7280',
                background: '#FFFFFF',
                blobLight: '#E6F7F1',
                cardBg: '#FFFFFF',
                cardBorder: '#E5E7EB',
                lockedBg: '#F9FAFB',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
