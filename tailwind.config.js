/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': '1024px',
        'desktop': '1440px',
      },
      colors: {
        green: {
          100: "#D1FEDC",
          200: "#A3FEC3",
          300: "#74FCB1",
          400: "#52FAAE",
          500: "#1AF7A9",
          600: "#13D4A3",
          700: "#0DB198",
          800: "#088F87",
          900: "#047176",
        },
        blue: {
          100: "#CCFDF7",
          200: "#9AFBE9",
          300: "#40E8E5",
          400: "#40E8E5",
          500: "#08CDDA",
          600: "#05A1BB",
          700: "#047A9C",
          800: "#02577E",
          900: "#013F68",
        },
        neutral: {
          0: "#FFFFFF",
          100: "F0F0F0",
          200: "#DEDEDE",
          300: "#A7A4A4",
          400: "#65636F",
          500: "#383846",
          600: "#2D2C3B",
          700: "#242332",
          800: "#1B1A28",
          900: "#171423",
          1000: "#120E21"
        },
        information: {
          100: "#E4F2FF",
          200: "#B9DDFF",
          300: "#6DB7FC"
        },
        success: {
          100: "#F3FCD1",
          200: "#CDEF75",
          300: "#8FCC1E"
        },
        error: {
          100: "#FDE9EE",
          200: "#FFD6DF",
          300: "#E34D4D"
        },
        highlight: {
          100: "#FFF9D8",
          200: "#FFF2B2",
          300: "#FFDE72"
        }
      }
    },
  },
  plugins: [],
}

