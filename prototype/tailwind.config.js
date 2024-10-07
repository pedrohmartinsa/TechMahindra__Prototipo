/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaria: '#201E43',
        secundaria: '#134B70',
        terciaria: '#508C9B',
        quaternaria: '#EEEEEE',
      }
    },
  },
  plugins: [],
}

