module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sairaExtraCondensed: ['Saira Extra Condensed', 'serif'],
        openSans: ['Open Sans', 'serif'],
      },
      colors: {
        primary: '#bd5d38',
        white: '#FFFFFF',
        silver: '#212529',
        'silver-light': '#868e96',
        'white0.2': 'rgba(255,255,255,.2)',
        'white0.5': 'rgba(255,255,255,.5)',
        'white0.7': 'rgba(255,255,255,.7)',
      },
      screens: {
        tablet: { max: '910px' },
      },
    },
  },
  plugins: [],
};
