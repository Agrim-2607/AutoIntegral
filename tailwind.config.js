/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark/red palette (explicit keys for utility classes)
        'primary': '#DC2626',
        'primary-dark': '#B91C1C',
        'dark-bg': '#0b0b0b',
        'dark-card': '#111827',
        'dark-lighter': '#374151',
        'accent': '#FF5A5A',
        'muted': '#9b9b9b',
        'white': '#ffffff'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}