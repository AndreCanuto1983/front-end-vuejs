const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        'src': resolveSrc('src')
        //'assets': resolveSrc('src/assets')
      }
    }
  },
};
