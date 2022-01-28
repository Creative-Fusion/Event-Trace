module.exports = {

  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
