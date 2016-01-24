const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)

  .listen(config.port, 'localhost', (err) => {
    if (err) { console.log(err); }
    console.log(`Listening on ${config.port}`);
    console.log(`Opening your system browser and your heart...`);
    open(`http://localhost:${config.port}/webpack-dev-server/`);
});