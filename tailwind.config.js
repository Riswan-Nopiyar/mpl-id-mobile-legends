/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Astoria'],
        origin: ['"Origin Super Condensed"', 'sans-serif'],
      },
    },
  },
};
