import HTMLPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const compiler = webpack({
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'main.js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [ /node_modules/ ],
      include: [ path.resolve(process.cwd(), 'src') ],
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
        {loader: 'style-loader'},
        {loader: 'css-loader', options: { modules: true, importLoaders: 1 }},
        {loader: 'postcss-loader'},
      ],
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(process.cwd(), 'src'),
    ],
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
