/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ['Dancing Script', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out', // fade-in animation for the page
        'text-fade-in': 'textFadeIn 1.5s ease-out', // text fade-in for "Abhishek"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        textFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};






