/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c6e',
          light: '#2a5a9a',
          dark: '#0e2544',
          50: '#e8edf5',
          100: '#d1dceb',
          200: '#a3b9d7',
          300: '#7596c3',
          400: '#4773af',
          500: '#1a3c6e',
          600: '#153058',
          700: '#102442',
          800: '#0a182c',
          900: '#050c16',
        },
        secondary: {
          DEFAULT: '#c9a84c',
          light: '#e8d48f',
          dark: '#a88a3a',
          50: '#faf6ea',
          100: '#f5edd5',
          200: '#ebdbab',
          300: '#e1c981',
          400: '#d7b757',
          500: '#c9a84c',
          600: '#b8973a',
          700: '#a08830',
          800: '#887826',
          900: '#706820',
        },
        background: {
          DEFAULT: '#f8f7f4',
          dark: '#121212',
        },
        text: {
          DEFAULT: '#1a1a1a',
          light: '#6b6b6b',
          dark: '#e0e0e0',
          'dark-light': '#a0a0a0',
        },
        border: {
          DEFAULT: '#e0ddd6',
          dark: '#333333',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#1e1e1e',
        },
        success: '#2e7d32',
        error: '#c62828',
        warning: '#f57c00',
        info: '#1565c0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'medium': '0 8px 30px rgba(0,0,0,0.1)',
        'hard': '0 12px 40px rgba(0,0,0,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
