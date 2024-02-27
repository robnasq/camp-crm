/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#DD0020',
      secondary: '#463D8C',
      white: '#FFFFFF',
      black: '#000000',
      purple: {
        secondary: '#463D8C',
      },
      neutral: {
        DEFAULT: '#F2F2F2',
        medium: '#777777',
        dark: '#1C1C1C',
    },
      
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    boxShadow: {
      DEFAULT: '2px 2px 10px 4px rgba(0, 0, 0, 0.2)',
      soft: '2px 2px 4px 2px rgba(0, 0, 0, 0.09)',
      skeleton: '0px 0px 64px rgba(207, 218, 230, 0.7)',
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}