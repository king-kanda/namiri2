/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },

    fontFamily: {
      kaftan: ['kaftan'],
      NeueRegular: ['Neue-regular'],
      NeueBold: ['Neue-bold'] ,
      NeueLight: ['Neue-light'] ,
      Adieu: ['Adieu']
      
    },

    container: {
      center: true,
    },

    colors: {
      'namiri-yellow' : '#FFCC1D' ,
      'namiri-dark' : '#0a241c' ,
      'namiri-light' : '#006039' ,
      'namiri-l' : '#0a2416' ,
      'namiri-sun' : '#A37E2C' ,
      'white' : '#ffffff' ,
      'namiri-gray' : '#959595' ,
      'transparent' : 'transparent' ,
      

      // shift colors style
        gray: {
          100: '#f7fafc',
          300: '#F5F5F50',
          500:'#959595',
          900: '#1a202c',
          700: '#D9D9D9'
        },
     
    },
  },
  plugins: [],
}
