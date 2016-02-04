var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    path                = require('path'),
    webpack             = require('webpack')

module.exports = {

  entry: {
    vendor: [
      'dragon.js',
      'eisley',
      'sortablejs'
      //'moment'
    ],
    app: [
      './app/index.js'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public/js')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /bower_components/,
          /node_modules\/(?!dragon*)/,
          /node_modules\/(?!eisley*)/,
          /node_modules\/(?!structure*)/
        ],
        query: {
          //cacheDirectory: true,
          presets: [
            'es2015',
            'stage-0'
          ],
          /*
          TODO: figure out what causes this Error

          Uncaught TypeError: (0 , _typeof3.default) is not a function
          */
          //plugins: ['transform-runtime']
        }
      },
      { test: /\.html/,  loader: 'file-to-string-loader' },
      { test: /\.json$/, loader: 'json-loader' },

      // Bootstrap
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,  loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  },

  node: {
    dns: 'empty',
    fs:  'empty',
    net: 'empty'
  },

  resolve: {
    alias: {},
    extensions: ['', '.html', '.js', '.json'],
    modulesDirectories: ['node_modules'],
    root: [
      path.resolve(__dirname, './app'),
    ]
  },
  resolveLoader: {root: path.join(__dirname, 'node_modules')},

  plugins: [
    new webpack.ContextReplacementPlugin(/buffer/, require('node-libs-browser/mock/buffer')),
    //new webpack.IgnorePlugin(/node_modules\/^dragon.js/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ChunkManifestPlugin({
      filename: 'manifest.json',
      manifestVariable: 'webpackManifest'
    })
  ]
}
