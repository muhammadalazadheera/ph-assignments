import daisyui from "daisyui"
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        solid:'#FFDC26'
      },
      backgroundImage: {
        'hero-image': "url('../images/cat-big.png')"
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '8rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      height: {
        'hero-height': "calc(100vh - 70px)"
      }
    },
  },
  plugins: [daisyui],
}

