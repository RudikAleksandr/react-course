const devConfig = require('./config/webpack/webpack.dev')
const prodConfig = require('./config/webpack/webpack.prod')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = () => (isDevelopment ? devConfig : prodConfig)
