// next.config.js
const withTM = require('next-transpile-modules')(['@cloudinary/react', '@cloudinary/base', '@cloudinary/html']); // pass the modules you would like to see transpiled

module.exports = withTM();
