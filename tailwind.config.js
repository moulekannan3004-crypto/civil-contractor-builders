/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F5FA',
          100: '#DCE6F2',
          200: '#BDD0E6',
          300: '#94B4D5',
          400: '#6390BE',
          500: '#3D6F9E',
          600: '#2A547E',
          700: '#1E3E61',
          800: '#142B45', // Primary specified
          900: '#0D1C2E',
          950: '#070F19',
        },
        construction: {
          50: '#FFF7EE',
          100: '#FFEBD6',
          200: '#FFD3AC',
          300: '#FFB578',
          400: '#FD943D',
          500: '#F28C28', // Secondary specified
          600: '#E07515',
          700: '#BA5B0C',
          800: '#944711',
          900: '#783B12',
          950: '#411C06',
        },
        surface: {
          white: '#FFFFFF',
          light: '#F4F6F8', // Alternate Background
          border: '#E2E8F0',
        },
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#252B32', // Text specified
          900: '#171B20',
          950: '#0E1114',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        sans: ['Inter', 'Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'solid': '0 4px 0 0 rgba(20, 43, 69, 0.15)',
        'solid-orange': '0 4px 0 0 #BA5B0C',
        'industrial': '0 10px 25px -5px rgba(20, 43, 69, 0.1), 0 8px 10px -6px rgba(20, 43, 69, 0.1)',
        'card-hover': '0 20px 30px -10px rgba(20, 43, 69, 0.18)',
      }
    },
  },
  plugins: [],
}
