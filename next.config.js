// next.config.js
const withTM = require('next-transpile-modules')(['@cloudinary/react', '@cloudinary/base', '@cloudinary/html', '@cloudinary/url-gen']); // pass the modules you would like to see transpiled

module.exports = withTM();
