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
        loaderBG: 'rgba(0, 0, 0, 0.075)',
      },
      screens: {
        largeTablet: { max: '1050px' },
        tablet: { max: '940px' },
        mobile: { max: '680px' },
        mobileSmall: { max: '560px' },
        mobileVerySmall: { max: '420px' },
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(300px, 1fr))',
        autoSmall: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      boxShadow: {
        base: '10px 10px 20px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        loader: {
          '0%': {
            width: '0',
          },
          '20%': {
            width: '10%',
          },
          '25%': {
            width: '24%',
          },
          '43%': {
            width: '41%',
          },
          '56%': {
            width: '50%',
          },
          '66%': {
            width: '52%',
          },
          '71%': {
            width: '60%',
          },
          '75%': {
            width: '76%',
          },
          '94%': {
            width: '86%',
          },
          '100%': {
            width: '100%',
          },
        },
        fromLeftToRight: {
          '0%': {
            left: '-30%',
          },
          '100%': {
            left: 0,
          },
        },
        fromTopToBottom: {
          '0%': {
            top: '-10%',
          },
          '100%': {
            top: 0,
          },
        },
      },
      animation: {
        loader: 'loader 2.5s ease forwards',
        fromLeftToRight: 'fromLeftToRight 1s ease forwards',
        fromTopToBottom: 'fromTopToBottom 1s ease forwards',
      },
      minHeight: {
        dvh: '100dvh',
      },
    },
  },
  plugins: [],
};
