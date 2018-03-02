import HTMLPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { pathTo } from './utils.mjs';

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  context: process.cwd(),
  output: {
    path: pathTo('build'),
    filename: '[name].main.js',
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [ /node_modules/ ],
      include: [ pathTo('src') ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', 
          options: { 
            localIdentName: '[local]-[path]-[hash:base64:5]',
            sourceMap: true,
            modules: true, 
            importLoaders: 1 }},
        { loader: 'postcss-loader', 
          options: { 
            sourceMap: true,
            config: { 
              path: pathTo('tools', 'postcss.config.js') }}},
      ],
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      pathTo('src'),
    ],
    alias: {
      'components': pathTo('src', 'components'),
      'screens': pathTo('src', 'screens'),
    },
  },
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({ 
      filename: 'index.html',
      template: 'src/utils/index.html',
    }),
  ],
};

export default config;
