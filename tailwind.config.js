/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "cream": "#FCF8F5",
        "primary-orange": "#C83B0E",
        "primary-orange-dark": "#952C0C",
      }
    },
  },
  plugins: [],
}