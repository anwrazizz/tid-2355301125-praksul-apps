/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      colors: {
        primary: {
          DEFAULT: '#06b6d4', // cyan-500
          light: '#67e8f9', // cyan-300
          dark: '#0891b2', // cyan-600
        },
        secondary: {
          DEFAULT: '#14b8a6', // teal-500
          light: '#5eead4', // teal-300
          dark: '#0d9488', // teal-600
        },
        background: {
          DEFAULT: '#0f172a', // slate-900
          secondary: '#1e293b', // slate-800
          tertiary: '#334155', // slate-700
          card: '#1e293b', // slate-800
        },
        surface: {
          DEFAULT: '#1e293b', // slate-800
          light: '#334155', // slate-700
          dark: '#0f172a', // slate-900
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          secondary: '#14b8a6', // teal-500
        },
        text: {
          primary: '#f1f5f9', // slate-100 - better contrast
          secondary: '#cbd5e1', // slate-300 - improved readability
          tertiary: '#94a3b8', // slate-400 - kept for subtle text
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'dark': '0 4px 14px 0 rgba(0,0,0,0.3)',
        'dark-lg': '0 10px 25px -3px rgba(0,0,0,0.4)',
        'glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 30px rgba(6, 182, 212, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-primary': 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
      }
    },
  },
  plugins: [],
}
