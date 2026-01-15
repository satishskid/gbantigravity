/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tech: '#0066FF',
                wisdom: '#D4AF37',
                base: '#FFFFFF',
                text: '#1A1A1A',
                gold: '#D4AF37',
            },
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                heading: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [],
}
