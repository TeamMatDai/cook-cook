import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        baseBackground: '#f9f9f9',
        'swal-confirm': 'rgb(189 189 189)'
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)']
      },
      keyframes: {
        'lds-ellipsis1': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        'lds-ellipsis3': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },
        'lds-ellipsis2': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(14px, 0)' }
        }
      },
      animation: {
        'lds-ellipsis1': 'lds-ellipsis1 0.6s infinite',
        'lds-ellipsis2': 'lds-ellipsis2 0.6s infinite',
        'lds-ellipsis3': 'lds-ellipsis3 0.6s infinite'
      }
    }
  },
  plugins: []
};

export default config;
