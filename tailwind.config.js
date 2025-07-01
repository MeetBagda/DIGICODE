/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important: This tells Tailwind where to find your classes
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here, e.g.,
      // colors: {
      //   'custom-blue': '#243c5a',
      // },
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      // },
    },
  },
  plugins: [
    // Add any Tailwind plugins here, e.g.,
    // require('@tailwindcss/forms'),
  ],
}