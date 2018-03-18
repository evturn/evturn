import autoprefixer from 'autoprefixer';
import HTMLPlugin from 'html-webpack-plugin';
import CSSPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { InterpolateHTMLPlugin, pathTo } from './utils.mjs';

const compiler = webpack({
  entry: './src/index.js',
  context: process.cwd(),
  output: {
    path: pathTo('build'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
  },
  mode: 'production',
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: pathTo('node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
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
        limit: 1000,
        name: 'static/media/[name][hash:8].[ext]',
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
            '@babel/plugin-syntax-dynamic-import',
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
        CSSPlugin.loader,
        { loader: 'css-loader', 
          options: { 
            modules: true, 
            importLoaders: 1 }},
        { loader: 'postcss-loader', 
          options: { 
            ident: 'postcss',
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9',
                ],
                flexbox: 'no-2009',
              }),
            ],
          }
        },
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
      'screens':    pathTo('src', 'screens'),
      'shared':     pathTo('src', 'shared'),
      'static':     pathTo('src', 'static'),
    },
  },
  target: 'web',
  plugins: [
    new CSSPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[id].css',
    }),
    new HTMLPlugin({ 
      inject: true,
      template: pathTo('public', 'index.html'),
    }),
    new InterpolateHTMLPlugin({
      ANALYTICS: 'analytics.js',
      PUBLIC_URL: '',
    }),
  ],
}); 

compiler.run((e, s) => {
  if (e) {
    console.log(e);
    process.exit(1);
  } else {
    const stats = s.toString({ 
      children: false,
      chunks: false,
      colors: true, 
      warnings: false,
    });
    console.log(stats);
  }
});
