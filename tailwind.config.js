/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1) rotate(45deg)",
            // transform: "rotate(0deg)"
          },
          "33%": {
            transform: "scale(1.1) rotate(32deg)",
          },
          "66%": {
            transform: "scale(0.9) rotate(48deg)",
          },
          "100%": {
            transform: "scale(1) rotate(045deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
