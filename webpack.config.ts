import { join } from 'path';
import { Configuration, DefinePlugin, WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';

const webpackConfig: Configuration = {
  target: 'node',
  mode: 'production',
  entry: {
    main: join(__dirname, 'files/entry.ts'),
  },
  output: {
    path: join(__dirname, 'dist/'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: join(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DuplicatePackageCheckerPlugin({
      verbose: true,
      emitError: true,
      strict: true,
    }) as WebpackPluginInstance,
    new DefinePlugin({
      'process.env.test': process.env.test,
    }),
    new BundleAnalyzerPlugin()
  ],
};

module.exports = webpackConfig;