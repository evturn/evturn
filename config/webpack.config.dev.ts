import fs from 'fs';
import path from 'path';
import resolve from 'resolve';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import ModuleNotFoundPlugin from 'react-dev-utils/ModuleNotFoundPlugin';
import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import createEnvironmentHash from './utils/environment-hash';
import webpack from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import PreloadWebpackPlugin from '@vue/preload-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import getClientEnvironment from './env';
import paths from './paths';

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

const CWD = process.cwd();
const SRC = path.resolve(CWD, 'src');
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

const config = {
  target: ['browserslist'],
  stats: 'errors-only',
  mode: 'development',
  bail: false,
  devtool: 'cheap-module-source-map',
  entry: [
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: "static/js/[name].js",
    assetModuleFilename: 'static/media/[name].[contenthash][ext]',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  cache: {
    type: 'filesystem',
    version: createEnvironmentHash(env.raw),
    cacheDirectory: paths.appWebpackCache,
    store: 'pack',
    buildDependencies: {
      defaultWebpack: ['webpack/lib/'],
      config: [__filename],
      tsconfig: [paths.appTsConfig, paths.appJsConfig].filter(f =>
        fs.existsSync(f)
      ),
    },
  },
  optimization: {
    minimize: false,
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
      url: false,
    },
    alias: {
      '@': path.join(SRC),
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
        enforce: 'pre',
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/,
        loader: require.resolve('source-map-loader'),
      },
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
          // {
          //   test: /\.svg$/,
          //   issuer: {
          //     and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          //   },
          //   use: [{
          //     loader: '@svgr/webpack',
          //     options: {
          //       resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          //       jsxRuntime: 'automatic',
          //       memo: true,
          //       ref: true,
          //       prettier: false,
          //       svgo: true,
          //       svgoConfig: {
          //         plugins: [{ removeViewBox: false }],
          //       },
          //       titleProp: true,
          //       typescript: true,
          //       babel: false,
          //       type: 'javascript/auto'
          //     },
          //   }],
          // },
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
              plugins: [
                require.resolve('react-refresh/babel'),
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
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
              cacheCompression: false,
              sourceMaps: true,
            },
          },
          {
            test: /\.css$/,
            exclude: [/node_modules/, path.join(SRC, 'static', 'css', 'useable')],
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[folder]_[name]_[local]__[hash:base64:5]',
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
              path.resolve(process.cwd(), 'node_modules'),
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
    new webpack.DefinePlugin(env.stringified),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new PreloadWebpackPlugin({
      fileWhitelist: [
        /.*3ba56aa2-c01d-4bfc-aae4-eac13ee2ebbc\..*\.woff2/,
        /.*08591efc-f43b-4dc0-b066-e39bb77fd0d9\..*\.woff2/,
        /.*d13c38b0-30e7-47f0-bc36-e2b7752b59e3\..*\.woff2/,
      ],
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
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new ModuleNotFoundPlugin(paths.appPath),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new CaseSensitivePathsPlugin(),
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
    new ForkTsCheckerWebpackPlugin({
      async: true,
      logger: 'webpack-infrastructure',
      typescript: {
        typescriptPath: resolve.sync('typescript', {
          basedir: paths.appNodeModules,
        }),
        context: paths.appPath,
        configOverwrite: {
          compilerOptions: {
            skipLibCheck: true,
            sourceMap: false,
            inlineSourceMap: false,
            declarationMap: false,
            noEmit: true,
            incremental: true,
            tsBuildInfoFile: paths.appTsBuildInfoFile
          }
        },
        diagnosticOptions: {
          syntactic: true,
        },
        mode: 'write-references',
        // profile: true,
        memoryLimit: 4096,
      }
    }),
  ],
  ignoreWarnings: [
    function ignoreSourcemapsloaderWarnings(warning) {
      return (
        warning.module &&
        warning.module.resource.includes("node_modules") &&
        warning.details &&
        warning.details.includes("source-map-loader")
      );
    },
  ],
  performance: false,
};

export default config;