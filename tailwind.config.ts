import daisyui from "daisyui";
import { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [daisyui],
} satisfies Config;
