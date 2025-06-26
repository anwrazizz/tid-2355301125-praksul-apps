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
      colors: {
        primary: {
          DEFAULT: '#10b981', // emerald-500
          light: '#6ee7b7',
          dark: '#047857',
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          card: '#ffffff',
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500
        },
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'md': '0 4px 14px 0 rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
}
