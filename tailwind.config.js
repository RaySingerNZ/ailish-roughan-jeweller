module.exports = {
  darkMode: 'class',
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        teal: {
          light: '#00eaf8',
          DEFAULT: '#00838e',
          dark: '#00616c',
        },
        mawhero: {
          light: '#E300BC',
          DEFAULT: '#d800b2',
          dark: '#a50084',
        }
      }
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
