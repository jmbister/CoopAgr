/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1560px",
    },
    fontFamily: {
      primary: "Inter",
    },
    backgroundImage: {
      hero: "url(/Assets/Img/bg-coop.jpg)",
      hero2: "url(/Assets/Img/bg-coop_movil.jpg)",
      hacend1: "url(/Assets/Img/hacend.png)",
      contact: "url(/Assets/Img/contacto.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F1D43",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#FF9800",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};
