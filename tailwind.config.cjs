/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1024px',
      xxl: '1420px',
    },
    extend: {
      background: {
        nav: 'linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), #2455EA',
      },
      backgroundImage: {
        welcome:
          'radial-gradient(92.11% 92.11% at 25.07% 7.89%, #fff7d6 3.65%, rgba(255, 255, 255, 0) 100%)',
        button: 'linear-gradient(180deg, #ffea97 0.02%, #ffb320 100%)',
        cloud_studio: 'linear-gradient(180deg, #4fc7f7 0%, #ffffff 100%)',
        collection: 'linear-gradient(180deg, #FFEA97 0%, #FFFFFF 85.94%)',
        swiper_inactive: 'rgba(171, 171, 171, 0.4)',
        swiper_active:
          'linear-gradient(0deg, #FFB524 36.69%, #FFB626 38.13%, #FFC648 49.69%, #FFD365 62.69%, #FFDD7B 75.69%, #FFE48B 90.13%, #FFE994 107.46%, #FFEA97 130.57%)',
        roadmap: 'linear-gradient(180deg, #FFFFFF 0%, #B5EAFF 100%)',
        timeline_card:
          'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)',
        timeline:
          'linear-gradient(90deg, #001fff 0.02%, #ff3ca2 56.25%, #ffb320 100%)',
        tick: 'linear-gradient(180deg, #ffea97 0.02%, #ffb320 100%)',
        faq: 'linear-gradient(180deg, #b5eaff 0%, #ffffff 100%)',
        footer: 'linear-gradient(180deg, #ffffff 0%, #b5eaff 100%)',
        subpage: 'linear-gradient(180deg, #0054D1 0%, #00D1FF 100%)',
        subpage_mobile:
          'radial-gradient(231.1% 101.39% at 50% -1.39%, rgba(24, 31, 81, 0) 0%, #181F51 100%)',
        subpage_option_inactive:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        subpage_close_button:
          'linear-gradient(180deg, #FFEA97 0.02%, #FFB320 100%)',
        subpage_modal_header:
          'linear-gradient(180deg, #0054D1 0%, #00D1FF 100%, #00D1FF 100%)',
        subpage_modal_body: 'linear-gradient(180deg, #0054D1 0%, #00D1FF 100%)',
        mobile_menu:
          'linear-gradient(180deg, #FFEA97 0%, #FFDB6A 59.37%, #FFCE4A 76.56%, #FFC133 87.5%, #FFA800 100%, #FFB320 100%)',
        sidebar_linear:
          'linear-gradient(180deg, rgba(23, 33, 84, 0) 0%, #172154 100%)',
      },
      backgroundColor: {
        welcome: '#4fc7f7',
        tab: 'rgba(255, 255, 255, 0.4)',
        subpage_modal_overlay: 'rgba(24, 31, 81, 0.75)',
        subpage_modal_body: 'rgba(24, 31, 81, 0.1)',
        sidebar_bgcolor: '#1E42D7',
      },
      fontFamily: {
        primary: 'ClashDisplay, sans-serif',
        secondary: 'Poppins, sans-serif',
      },
      fontSize: {
        xs: '12px',
        '3xs': '10px',
        sm: '14px',
        base: '16px',
        '23xl': '42px',
        xl: '20px',
        '5xl': '24px',
        '10xs-4': '2.4px',
        '10xs': '3px',
        '6xs-9': '6.9px',
        '4xl': '23px',
        '8xs-1': '4.1px',
        '9xs-5': '3.5px',
        '8xs-7': '4.7px',
      },
      dropShadow: {
        text: `-2px 0px 0px #3b48a4, 2px 0px 0px #3b48a4, 0px -2px 0px #3b48a4,
      0px 2px 0px #3b48a4, -2px -2px 0px #3b48a4, 2px 2px 0px #3b48a4,
      -2px 2px 0px #3b48a4, 2px -2px 0px #3b48a4`,
      },
      boxShadow: {
        tab: '0px 4px 8px rgba(24, 31, 81, 0.1)',
        faq: '0px 4px 8px rgba(24, 31, 81, 0.1)',
        tag: '0px 0px 20px rgba(36, 85, 234, 0.2)',
      },
      colors: {
        primary: '#181f51',
        secondary: '#ffb524',
        socialLight: '#ffea97',
        socialDark: '#181f51',
        white: '#fff',
        aliceblue: {
          100: '#eff5ff',
          200: '#e5ecf3',
        },
        darkslategray: {
          100: '#3f4d69',
          200: '#36383f',
          300: '#2a3141',
        },
        steelblue: {
          100: '#7495bd',
          200: '#4a5c83',
          300: '#566e9f',
        },
        mediumseagreen: '#17c776',
        royalblue: {
          100: '#3c76f5',
          200: '#1959d7',
        },
        mediumslateblue: '#2455ea',
        gray: {
          100: '#878787',
          200: '#0c112c',
          300: 'rgba(0, 0, 0, 0.2)',
        },
        whitesmoke: '#f4f7fa',
        slategray: '#727a82',
        gainsboro: '#dfdfdf',
        lightskyblue: '#78ceff',
        darkslateblue: '#172154',
        silver: 'rgba(196, 196, 196, 0)',
      },
      lineHeight: {
        body: 1.4,
        heading: 1.23,
      },
      animation: {
        hero_main: 'scale 1s 0s forwards',
        hero_left: 'scale 1s 0s forwards, fly_left 1s 0s forwards',
        hero_right: 'scale 1s 0s forwards, fly_right 1s 0s forwards',
        tab_content: 'slide_up 0.5s ease-in',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.7)' },
          '100%': { transform: 'scale(1)' },
        },
        fly_left: {
          '0%': {
            top: '5%',
            left: '3%',
          },
          '100%': {
            top: '49%',
            left: '-7%',
          },
        },
        fly_right: {
          '0%': {
            top: 0,
            left: '30%',
          },
          '100%': {
            top: '44%',
            left: '56%',
          },
        },
        slide_up: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        flash: {
          '0%, 100%': {
            opacity: 0.2,
          },
          '50%': {
            opacity: 1,
          },
        },
      },
      padding: {
        pt4Important: '0.75rem !important',
        pl6Important: '1.5rem !important',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
