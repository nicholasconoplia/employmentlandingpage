/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#f5fcfa',
        'primary-text': '#312363',
        'dark-bg': '#0e0c0c',
        'dark-text': '#e5ccb7',
        'accent': '#312363',
        'dark-accent': '#e5ccb7',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 6vw, 4rem)',
        'section': 'clamp(2rem, 4vw, 3rem)',
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(0,0,0,0.03)',
        'soft-black': '0 4px 12px rgba(0, 0, 0, 0.07)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
} 