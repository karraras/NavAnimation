/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair",
        FontAwesome: "FontAwesome",
      },
      transitionProperty: {
        width: "width",
        translate: "translate",
        visiblity: "visibility",
      },
      fontSize: {
        fontSize: "18px",
      },
      rotate: {
        rotate0: "0deg",
        rotate1: "360deg",
      },
    },
  },
  plugins: [],
};
// npm run build -i
