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
        'strong-green': '#5EC565',
        'light-rose': '#FEF6F6',
        'rose': '#DF9393',
        'strong-rose': '#D87777'
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
        '40px': '40px'
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
