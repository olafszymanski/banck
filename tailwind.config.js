module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2lg': '1192px',
      'xl': '1280px',
      '1.5xl': '1344px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'chinese-black': '#131313',
        'eerie-black': '#1D1D1D',
        'argent': '#BFBFBF',
        'bright-gray': '#F9F9F9',
        'maximum-red': '#CF291D',
        'cadmium-purple': '#B50717',
        'light-green': '#F6FEF6',
        'grassy': '#98DF93',
        'medium-green': '#DAF2D9',
        'dark-green': '#5EC565',
        'light-rose': '#FEF6F6',
        'medium-rose': '#FCE8E8',
        'rose': '#DF9393',
        'dark-rose': '#D87777'
      },
      fontSize: {
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '2lg': '1.2rem'
      },
      width: {
        '49%': '49%'
      },
      height: {
        '50px': '50px',
        '75px': '75px',
        '100px': '100px',
        '160px': '160px'
      },
      borderRadius: {
        'b-10px': '0px 0px 10px 10px',
        '10px': '10px'
      },
      borderWidth: {
        '3': '3px'
      },
      margin: {
        '-10px': '-10px',
        '40px': '40px',
        '65px': '65px',
        '90px': '90px'
      },
      boxShadow: {
        'reverse-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fade: 'fade 0.4s ease-in-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
