/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-400': '#A855F7',
        'purple-500': '#8B5CF6',
        'purple-600': '#7C3AED',
        'purple-700': '#6D28D9',
        'purple-800': '#5B21B6',
        'purple-900': '#4C1D95',
      }
    },
  },
  plugins: [],
}
