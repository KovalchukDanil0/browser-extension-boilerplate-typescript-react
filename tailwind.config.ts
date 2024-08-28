import daisyui from "daisyui";
import { Config } from "tailwindcss";

const tailwind: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [daisyui],
};

export default tailwind;
