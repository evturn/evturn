import fs from 'fs';
import path from 'path';
import resolve from 'resolve';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import InlineChunkHtmlPlugin from 'react-dev-utils/InlineChunkHtmlPlugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import ModuleNotFoundPlugin from 'react-dev-utils/ModuleNotFoundPlugin';
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import PreloadWebpackPlugin from '@vue/preload-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import paths from './paths';
import getClientEnvironment from './env';

const CWD = process.cwd();
const SRC = path.resolve(CWD, 'src');

const reactRefreshRuntimeEntry = require.resolve('react-refresh/runtime');
const reactRefreshWebpackPluginRuntimeEntry = require.resolve(
  '@pmmmwh/react-refresh-webpack-plugin'
);
const babelRuntimeEntry = require.resolve('babel-preset-react-app');
const babelRuntimeEntryHelpers = require.resolve(
  '@babel/runtime/helpers/esm/assertThisInitialized',
  { paths: [babelRuntimeEntry] }
);
const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator', {
  paths: [babelRuntimeEntry],
});

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

const config: webpack.Configuration = {
  mode: 'production',
  bail: true,
  stats: 'errors-warnings',
  devtool: 'source-map',
  entry: [
    paths.appIndexJs,
  ],
  output: {
    path: path.join(CWD, 'build'),
    pathinfo: false,
    assetModuleFilename: 'static/media/[name].[contenthash:8][ext]',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => path
      .relative(SRC, info.absoluteResourcePath)
      .replace(/\\/g, '/'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 2020,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.mjs', '.ts', '.tsx'],
    fallback: {
      constants: false,
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    },
    alias: {
      '@': path.join(SRC),
      '@screens': path.join(SRC, `screens`),
      '@static': path.join(SRC, `static`),
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [
        paths.appPackageJson,
        reactRefreshRuntimeEntry,
        reactRefreshWebpackPluginRuntimeEntry,
        babelRuntimeEntry,
        babelRuntimeEntryHelpers,
        babelRuntimeRegenerator,
      ]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000,
              },
            },
          },
          {
            test: /\.svg$/i,
            type: 'asset',
            resourceQuery: /url/, // *.svg?url
          },
          {
            test: /\.svg$/,
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
            use: [{ loader: '@svgr/webpack', options: {
              resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
              jsxRuntime: 'automatic',
              memo: true,
              ref: true,
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              typescript: true,
            } }],
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              presets: [
                [
                  require.resolve('babel-preset-react-app'),
                  {
                    flow: false,
                    typescript: true,
                    runtime: 'automatic',
                  },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              // See #6846 for context on why cacheCompression is disabled
              cacheCompression: false,
              sourceMaps: false,
              inputSourceMap: false,
            },
          },
          {
            test: /\.css$/,
            exclude: [/node_modules/, path.join(SRC, 'static', 'css', 'useable')],
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: {
                    exportLocalsConvention: 'dashes',
                  },
                  sourceMap: true,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  postcssOptions: {
                    ident: 'postcss',
                    config: false,
                    plugins: [
                      'postcss-flexbugs-fixes',
                      ['postcss-preset-env',
                        {
                          autoprefixer: {
                            flexbox: 'no-2009',
                          },
                          stage: 3,
                        },
                      ],
                      'postcss-normalize',
                    ],
                  },
                  sourceMap: true,
                },
              },
            ],
          },
          {
            use: [
              {
                loader: require.resolve('style-loader'),
                options: {
                  injectType: 'lazyStyleTag',
                },
              },
              require.resolve('css-loader'),
            ],
            test: /\.css$/,
            include: [
              path.resolve(process.cwd(), 'src', 'static', 'css', 'useable'),
            ],
          },
          {
            exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            type: 'asset/resource',
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(CWD, 'public', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new PreloadWebpackPlugin({
      fileWhitelist: [],
      include: 'allAssets',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.woff2$/.test(entry)) return 'font';
        if (/\.eot$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      }
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new ModuleNotFoundPlugin(paths.appPath),
    new webpack.DefinePlugin(env.stringified),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: paths.publicUrlOrPath,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(
          fileName => !fileName.endsWith('.map')
        );

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    fs.existsSync(paths.swSrc) &&
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: paths.swSrc,
      dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
      exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
      // Bump up the default maximum size (2mb) that's precached,
      // to make lazy-loading failure scenarios less likely.
      // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      logger: 'webpack-infrastructure',
      typescript: {
        typescriptPath: resolve.sync('typescript', {
          basedir: paths.appNodeModules,
        }),
        context: paths.appPath,
        configOverwrite: {
          compilerOptions: {
            sourceMap: false,
            skipLibCheck: true,
            inlineSourceMap: false,
            declarationMap: false,
            noEmit: true,
          },
        },
        diagnosticOptions: {
          syntactic: true,
        },
        mode: 'readonly',
        memoryLimit: 4096,
      }
    }),
  ].filter(Boolean),
  performance: false,
};

export default config;