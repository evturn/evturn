import HTMLPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { pathTo } from './utils.mjs';

const compiler = webpack({
  entry: './src/index.js',
  context: process.cwd(),
  output: {
    path: pathTo('build'),
    filename: 'main.js',
  },
  mode: 'production',
  module: {
    rules: [{
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
    new HTMLPlugin({ 
      filename: 'index.html',
      template: 'src/utils/index.html',
    }),
  ],
}); 

compiler.run((e, s) => {
  if (e) {
    console.log(e);
  } else {
    const stats = s.toString({ colors: true, chunks: false });
    console.log(stats);
  }
});
