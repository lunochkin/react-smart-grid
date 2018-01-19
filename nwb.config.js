const path = require('path')


module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    html: {
      template: path.join(__dirname, './demo/src/index.html')
    }
  }
}
