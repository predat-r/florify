/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        elevateLow: " 0px 7px 10px 1px rgba(0,0,0,0.3)",
        elevate: " 0px 7px 10px 1px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#D9F5EB",
        green1: "#CCFDCF",
        bars: "#008F51",
        card: "#E6FEE7",
        box: "#008F51",
      },
      keyframes: {
        popupSlideUp: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 1, transform: "translateY(-50px)" },
        },
      },
      animation: {
        popupSlideUp:"popupSlideUp 2s ease-out forwards", // 2s animation duration
      },
    },
  },
  plugins: [],
};
