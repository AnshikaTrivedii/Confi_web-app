/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#007bff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        slideInRight: {
          '0%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        fadeInUp: {
          '0%': { 
            transform: 'translateY(30px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        pulse: {
          '0%, 100%': { 
            opacity: '1'
          },
          '50%': { 
            opacity: '0.5'
          }
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0,0,0)'
          },
          '40%, 43%': {
            transform: 'translate3d(0, -30px, 0)'
          },
          '70%': {
            transform: 'translate3d(0, -15px, 0)'
          },
          '90%': {
            transform: 'translate3d(0, -4px, 0)'
          }
        }
      },
      animation: {
        slideInRight: 'slideInRight 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      }
    },
  },
  plugins: [],
} 