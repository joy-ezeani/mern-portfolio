/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgmain: "#000000",
        bgother: "#191919",
        bg1: "#f9004d",
        bg2: "rgb(28, 130, 28)",
      },
    },
  },
  plugins: [],
};
