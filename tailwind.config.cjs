/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#62c4da",
        secondary: "#02ffef",
        dark: {
          500: "#101414",
          800: "#010100",
        }
      },
    },
  },
  plugins: [],
};
