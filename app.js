var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: false,
  historyApiFallback: true,
  publicPath: config.output.publicPath
});

server.listen(3000);
