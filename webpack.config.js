const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs')
    },
    port: 3000,
    open: true,
    compress: true,
    hot: true,
    compress: true, 
    historyApiFallback: true,
  },
  module: {
      rules:[
        {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Summary Card',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]

  
}