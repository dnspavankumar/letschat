/** @type {import('tailwindcss').Config} */
import daisyUI from 'daisyui';  // Use import instead of require

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],  // Use the imported daisyUI plugin
};
