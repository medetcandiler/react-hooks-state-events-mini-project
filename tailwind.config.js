/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-80': 'calc(100vh - 80px)'
      }
    },
  },
  plugins: [],
}