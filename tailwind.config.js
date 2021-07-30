module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        textured: "url('/images/General/carbon-fibre.png'), linear-gradient(180deg, #001100 0%, #001100 100%)",
      }),
    },
    colors: {
      green: {
        dark: '#00100B',
        light: '#00DF19',
      },
      eggshell: {
        default: '#DADDD8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
