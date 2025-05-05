/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2EE',
          100: '#C1DDD2',
          200: '#9AC8B6',
          300: '#73B39A',
          400: '#56A385',
          500: '#40916C', // Primary color
          600: '#3A8463',
          700: '#2D6A4F',
          800: '#22503C',
          900: '#193D2E',
        },
        secondary: {
          50: '#E7F5FB',
          100: '#C5E6F6',
          200: '#9CD5EF',
          300: '#73C4E8',
          400: '#56B7E3',
          500: '#38A9DE',
          600: '#329ACA',
          700: '#2687AF',
          800: '#1B7495',
          900: '#185A70',
        },
        accent: {
          50: '#F3EDE7',
          100: '#E2D3C3',
          200: '#CFB69D',
          300: '#BC9976',
          400: '#AD8359',
          500: '#9E6D3D',
          600: '#916437',
          700: '#7C532E',
          800: '#684426',
          900: '#54351D',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};