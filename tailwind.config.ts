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
      },
      height: {
        fullscreen: '100dvh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default withMT(config)
