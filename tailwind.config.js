module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        textured: "url('/images/General/carbon-fibre.png'), linear-gradient(330deg, #00100B 0%, #00100B 100%)",
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
