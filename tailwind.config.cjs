/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./router.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'blue': '#001AFF',
      }
    },
  },
  plugins: [],
}
