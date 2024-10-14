/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        canopee: ['Canopee', 'sans-serif'], // 'sans-serif' is a fallback
        domaineDispCond: ['DomaineDispCondMedium', 'sans-serif'],
        editorialNewLight: ['Editorial New Light', 'sans-serif'],
      },
      fontWeight: {
        100: '100',   //thin
        300: '300',  // Light
        400: '400',  // Regular
        600: '600',  // Semi-bold
        700: '700',  // Bold
      },
    },
  },
  plugins: [],
}

