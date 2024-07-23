/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'twine': {
          '50': '#fbf8f1',
          '100': '#f6eede',
          '200': '#ecdabc',
          '300': '#dfbf92',
          '400': '#d09c61',
          DEFAULT: '#c88647',
          '600': '#ba713c',
          '700': '#9a5a34',
          '800': '#7c4930',
          '900': '#653d29',
          '950': '#361e14',

        },
        'big-stone': {
          '50': '#f3f7fc',
          '100': '#e6eff8',
          '200': '#c8ddef',
          '300': '#98c2e1',
          '400': '#61a2cf',
          '500': '#3d86ba',
          '600': '#2c6b9d',
          '700': '#25567f',
          '800': '#224a6a',
          '900': '#213e59',
          '950': '#192e43',
        },

      }
    },
  },
  plugins: [],
}

