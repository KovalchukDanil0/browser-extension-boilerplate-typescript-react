import { Flowbite } from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,tsx, ts}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'media',
  plugins: [Flowbite],
};
