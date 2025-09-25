/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New palette per design brief
        'primary-bg': '#FBFDFF',
        'background': '#FBFDFF',
        'surface': '#FFFFFF',
        'primary-text': '#0B1520',
        'muted-text': '#6B7280',
        'dark-bg': '#0e0c0c',
        'dark-text': '#e5ccb7',
        'primary': '#0B6EFF',
        'accent': '#0B6EFF',
        'accent-hover': '#336BFF',
        'cta': '#FF6A3D',
        'border-light': 'rgba(11,36,54,0.03)',
        'border-dark': '#374151',
        'glass-overlay': 'rgba(11,36,54,0.04)'
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.25rem, 5vw, 3.5rem)',
        'section': 'clamp(1.5rem, 3vw, 2rem)',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(11,36,54,0.06), 0 1px 3px rgba(11,36,54,0.08)',
        'card': '0 6px 20px rgba(11,36,54,0.08)',
        'elevated': '0 10px 24px rgba(11,36,54,0.12)'
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 