/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        secondary2: "#DB4444",
        "text-color": "#FAFAFA",
        "text-color1": "#7D8184",
        "text-color2": "#000000",
        "button-color": "#000000",
        "button-color1": "#00FF66",
        "button-color2": "#DB4444",
        "hover-button-color": "#E07575",
        "hover-button-color1": "#A0BCE0",
      },
      borderRadius: {
        "b-20": "20px",
        "b-5": "5px",
      },
    },
  },
  plugins: [],
};
