const path = require('path');

module.exports = env => ({
   entry: './src/index.js',
   mode: 'development',
   devtool: 'inline-source-map',
   watch: true,
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   }
});