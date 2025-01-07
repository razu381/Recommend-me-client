/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        california: {
          50: "#fdf4f3",
          100: "#fce6e4",
          200: "#fad2ce",
          300: "#f6b2ab",
          400: "#ef857a",
          500: "#e35e50",
          600: "#cf4233",
          700: "#c0392b",
          800: "#902e24",
          900: "#782c24",
          950: "#41130e",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
