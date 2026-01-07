/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF9100",
          50: "#FFE8CC",
          100: "#FFDFB8",
          200: "#FFCC8F",
          300: "#FFB866",
          400: "#FFA433",
          500: "#FF9100",
          600: "#CC7400",
          700: "#995700",
          800: "#663A00",
          900: "#331D00",
        },
        secondary: {
          DEFAULT: "#282D87",
          50: "#E6E7F5",
          100: "#CDCFEB",
          200: "#9B9FD7",
          300: "#696FC3",
          400: "#373FAF",
          500: "#282D87",
          600: "#20246C",
          700: "#181B51",
          800: "#101236",
          900: "#08091B",
        },
      },
    },
  },
  plugins: [],
};
