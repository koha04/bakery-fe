/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "#0f1021",
        navText: "#fff",
        hot: "#d01257",
        normal: "#0f1021",
      },
      borderColor: {
        pro: "#ffcee4",
        list: "rgb(255, 248, 251)",
      },
      backgroundColor: {
        button: "#d02262",
        navText: "#fff",
        list: "rgb(255, 248, 251)",
      },
      backgroundImage: {
        main: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        home: "linear-gradient(179.4deg,rgb(253, 240, 233) 2.2%,rgb(255, 194, 203) 96.2%)",
        header: "url('./src/assets/img/bg.png')",
        emoji: "url('./src/assets/img/on-search.png')",
        navbar: "url('./src/assets/icons/wave-haikei.svg')",
      },
      dropShadow: {
        emoji: "0 0 0.75rem crimson",
      },
      boxShadow: {
        container:
          "2px 5px 5px rgba(0, 0, 0, 0.1), -2px -5px 5px rgba(0, 0, 0, 0.1)",
        titleOptions: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff",
        cart: "1px 2px 3px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
