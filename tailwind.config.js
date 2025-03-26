
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./assets/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        tiro: ['"Tiro Bangla", serif'],
        mukti: ["'Mukti', sans-serif"]
      }
    },
  },
  plugins: [require('daisyui')],
}

