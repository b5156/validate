module.exports = {
  mode: 'development',
  devtool:'none',
  entry: './src/schema.js',
  output: {
    filename: 'validate.js',
    path: __dirname + '/dist',
    library: 'validate',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
