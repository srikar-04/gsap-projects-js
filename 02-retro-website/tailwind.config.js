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
    },
  },
  plugins: [],
}

