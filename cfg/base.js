'use strict';
const path = require('path');
const js = path.join(__dirname, '/../src/js');
const img = path.join(__dirname, '/../src/images');
const less = path.join(__dirname, '/../src/less');
const autoprefixer = require('autoprefixer');

module.exports = {
  port: 8000,
  debug: true,
  output: {
    path: path.join(__dirname, '/../src/dist'),
    filename: 'app.js',
    publicPath: '/src/dist/'
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    hot: true,
    port: 8000,
    publicPath: '/src/build/',
    noInfo: false,
    stats: { colors: true }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: js     + '/components/',
      containers: js     + '/containers/',
      helpers:    js     + '/helpers/',
      sources:    js     + '/sources/',
      App:        js     + '/containers/app',
      Home:       js     + '/containers/home',
      Work:       js     + '/containers/work',
      Project:    js     + '/containers/project',
      About:      js     + '/containers/about',
      Contact:    js     + '/containers/contact',
      images:     img    + '/',
      styles:     less   + '/',
      config: './config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },{
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },{
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },{
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },{
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },{
        test: /\.(jpg|svg|png|jpg|gif|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },{
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  postcss: function () {
    return [require('autoprefixer')];
  }
};