/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        google: {
          blue: {
            300: "#8ab4f8",
            500: "#4285f4",
          },
          red: {
            300: "#f28b82",
            500: "#ea4335",
          },
          yellow: {
            300: "#fde293",
            500: "#f9ab00",
          },
          green: {
            300: "#81c995",
            500: "#34a853",
          },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
