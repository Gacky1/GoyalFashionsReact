/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#f59e0b',
        accent: '#ec4899',
        dark: '#1f2937',
        light: '#f8fafc',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      boxShadow: {
        'custom': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          }
        }
      }
    },
  },
  plugins: [],
}