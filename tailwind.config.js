import { Flowbite } from 'flowbite-react';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [Flowbite],
  variants: {},
  corePlugins: {
    preflight: true,
  },
};
