/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FAFAFA",
        primary: {
          500: "#2d4fa7",
        },
        success: {
          600: "#2c9e80",
          500: "#24B592",
        },
        secondary: {
          500: "#f9a70d",
        },
      },
    },
  },
  plugins: [],
};
