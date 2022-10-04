// prettier-plugin-tailwind (prettier-plugin-svelte との併用は不可)
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  // tailwindConfig: './styles/tailwind.config.js', // Default: 同ディレクトリの tailwind.config.js
}
