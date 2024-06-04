import { webdevExtensions } from './extensions';

const webpackFileNames: string[] = [
  'webpack',
  'webpack.base',
  'webpack.config',
  'webpack.common',
  'webpack.config.common',
  'webpack.config.common.babel',
  'webpack.dev',
  'webpack.development',
  'webpack.config.dev',
  'webpack.config.dev.babel',
  'webpack.mix',
  'webpack.prod',
  'webpack.prod.config',
  'webpack.production',
  'webpack.server',
  'webpack.client',
  'webpack.config.server',
  'webpack.config.client',
  'webpack.config.production.babel',
  'webpack.config.prod.babel',
  'webpack.config.prod',
  'webpack.config.production',
  'webpack.config.staging',
  'webpack.config.babel',
  'webpack.config.base.babel',
  'webpack.config.base',
  'webpack.config.staging.babel',
  'webpack.config.test',
  'webpack.config.vendor',
  'webpack.config.vendor.production',
  'webpack.test',
  'webpack.dist',
  'webpackfile',
];

const webpack: string[] = [
  'webpack.config.coffee',
  ...webpackFileNames.flatMap(fileName => webdevExtensions.map(ext => `${fileName}.${ext}`)),
];

export { webpack };
