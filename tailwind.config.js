module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust path if needed
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans font
      },
    },
  },
  plugins: [],
};
