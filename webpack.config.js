module.exports = {
  entry: './App/Components/index.tsx',
  output: {
    filename: 'app.js',
    path: "./wwwroot/js/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};