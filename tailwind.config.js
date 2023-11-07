module.exports = {
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#090d17",
        },
        brand: {
          linkedin: "#0077b5",
          github: "#6e5494",
        },
        accent: {
          primary: {
            light: "#4338ca",
            dark: "#6366f1",
          },
          secondary: {
            light: "#0093f4",
            dark: "#49c6e6",
          },
        },
      },
    },
  },
  plugins: [],
};
