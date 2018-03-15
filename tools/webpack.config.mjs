import HTMLPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { pathTo } from './utils.mjs';

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    pathTo('src', 'index.js')
  ],
  context: process.cwd(),
  output: {
    path: pathTo('build'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      exclude: [
        /\.html$/,
        /\.js$/,
        /\.css$/,
        /\.json$/,
        /\.bmp$/,
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/,
      ],
      loader: 'file-loader',
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },{
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },{
      test: /\.js$/,
      exclude: [ /node_modules/ ],
      include: [ pathTo('src') ],
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-object-rest-spread',
          ],
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
            modules: true, 
            importLoaders: 1 }},
        { loader: 'postcss-loader', 
          options: { 
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
      'shared': pathTo('src', 'shared'),
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
