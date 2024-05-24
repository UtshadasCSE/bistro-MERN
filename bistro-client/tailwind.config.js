import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        cinzel: '"Cinzel", serif',
      },
      backgroundImage: {
        aboutBistro: "url('./src/assets/home/chef-service.jpg')",
        feauterdBg: "url('./src/assets/home/featured.jpg')",
        loginBg: 'url("./src/assets/others/authentication.png")',
      },
      colors: {
        loginBtn: "rgba(209, 160, 84, 0.70)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "sunset"],
  },
};
