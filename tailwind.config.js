/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'display': ['Cabinet Grotesk','ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial']
      }
    },
  },
  plugins: [],
}
