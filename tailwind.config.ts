import type { Config } from 'tailwindcss'

const withMT = require('@material-tailwind/react/utils/withMT')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        pointer: 'url(/32.png), pointer', // Custom cursor with pointer
        default: 'url(/32.png), default', // Custom cursor with default
        hand: 'url(/hand.png), pointer', // Custom cursor with hand
        // Add more custom cursors if needed
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        crack: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'walk-chicken': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(90%)' },
        },
        'walk-cat': {
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        'run-dog': {
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(5%)' },
        },
        'walk-dog': {
          '0%, 100%': { transform: 'translateX(30%)' },
          '50%': { transform: 'translateX(90%)' },
        },
        'walk-snail': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(90%)' },
        },
        'walk-turle': {
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(10%)' },
        },

        flip: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
        },
        'flip-reverse': {
          '0%, 100%': { transform: 'scaleX(-1)' },
          '50%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out',
        crack: 'crack 0.5s ease-in-out',
        spin: 'spin 10s linear infinite',
        'walk-chicken': 'walk-chicken 130s linear infinite',
        'walk-cat': 'walk-cat 80s linear infinite',
        'walk-snail': 'walk-snail 500s linear infinite',
        'run-dog': 'run-dog 60s linear infinite',
        'walk-dog': 'walk-dog 100s linear infinite reverse',
        'walk-turle': 'walk-turle 2000s linear infinite',
        'flip-chicken': 'flip 130s step-end infinite',
        'flip-snail': 'flip 500s step-end infinite',
        'flip-dog-reverse': 'flip-reverse 60s step-end infinite',
        'flip-dog': 'flip 100s step-end infinite',
        'flip-turle': 'flip-reverse 2000s step-end infinite',
      },
      colors: {
        background: '#0F182B',
        'primary-text': '#E2E8F0',
        'secondary-text': '#A0AEC0',
        'blue-sky': '#5FBDFF',
        'black-primary': '#183153',
        'yellow-primary': '#FFD43B',
        'orange-primary': '#FAB007',
      },
      boxShadow: {
        button: '0px 6px 0px 0px rgba(109,40,217)',
        'button-card': '0px 6px 0px 0px #183153',
        'image-card': '-6px 8px 0px 0px #183153',
        'nav-card': '-3px 4px 0px 0px #183153',
      },
      height: {
        fullscreen: '100dvh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      rotate: {
        120: '120deg',
      },
    },
  },
  plugins: [],
}
export default withMT(config)
