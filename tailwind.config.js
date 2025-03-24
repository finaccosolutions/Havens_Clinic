/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      colors: {
        dark: {
          DEFAULT: '#1a1b1e',
          100: '#2c2e33',
          200: '#25262b',
          300: '#1e1f23',
          400: '#141517',
          500: '#101113',
          600: '#0c0d0e',
          700: '#080909',
          800: '#040404',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};