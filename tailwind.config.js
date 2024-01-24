/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
    "./*.{html,js}",
    "./pages/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
  ],
}

