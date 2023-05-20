/** @type {import('tailwindcss').Config}  */

export default {
  content: [
    './index.html',
    './src/*/*/*.{js,ts,jsx,tsx }',
    './node_modules/@tremor//*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-img': "url('./src/assets/landing1.png')"
      },
      fontFamily: {
        'ubuntu-bold': ['Ubuntu', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        'nunito-light': ['Nunito-Sans', 'sans-serif']
      },
      colors: {
        'gradient-one': '#403F44',
        'gradient-two': '#1E1B32',
        primary: '#172554',
        secondary: '#f1f5f9',
        'prussian-blue': '#003153'
      },
      dropShadow: {
        '3xl': 'filter: drop-shadow(16px 16px 10px white)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      animation: {
        'bounce-left': 'bounce-left 1s ease-in-out infinite',
      },
      keyframes: {
        'bounce-left': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-2rem)' },
        },
      },
    },
  },
}
