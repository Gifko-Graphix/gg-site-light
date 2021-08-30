module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        textured: "url('/images/General/carbon-fibre.png'), linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",
        lightsketch: "url('/images/General/light-sketch.png'), linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",
        blacklozenge: "url('/images/General/black-lozenge.png'), linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",
        mazeblack: "url('/images/General/maze-black.png'), linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        simpledashed: "url('/images/General/simple-dashed.png'), linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        whitetexture: "url('/images/General/white-texture.png'), linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",

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
      purple: {
        dark: '#330C2F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
