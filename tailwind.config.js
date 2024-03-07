import { Flowbite } from "flowbite-react";

/** @type {import('tailwindcss').Config} */
const tailwind = {
  content: [
    "./src/**/*.{js,tsx, ts}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "media",
  plugins: [Flowbite],
};

export default tailwind;
