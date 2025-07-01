// postcss.config.js (Correct for newer versions)
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new package name
    autoprefixer: {},
  },
};