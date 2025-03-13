/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        california: {
          50: "#edf3ff",
          100: "#dee8ff",
          200: "#c4d3ff",
          300: "#a1b6ff",
          400: "#7b8efe",
          500: "#5c67f8",
          600: "#3f3eed",
          700: "#3531d1",
          800: "#2c2aa9",
          900: "#2a2c85",
          950: "#19194d",
        },
        "dark-bg": "#0e1424",
        "light-bg-1": "#F2F2FF",
        "light-bg-2": "#FFF2F2",
        "light-bg-3": "#F8F8FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
