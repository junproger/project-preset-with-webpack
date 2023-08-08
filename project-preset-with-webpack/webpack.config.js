// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const config = {
  entry: path.resolve(__dirname, './source/index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    host: "localhost",
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './source/index.html'),
      filename: 'index.html',
    }),
    new EslintWebpackPlugin({ extensions: [".ts", ".tsx"], fix: true }),
    
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: isProduction 
                ? '[name]-[hash:base64]'
                : '[name]-[local]-[hash:base64:8]',
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|ico|png|svg|avif|webp|jpg|gif)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset/resource",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
