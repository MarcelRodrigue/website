/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      height: {
        'hero': '60vh',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
