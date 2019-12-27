# 1#PASSO

npm init -y

# 2#PASSO

npm i path @babel/core @babel/preset-react react babel-loader react-dom @babel/preset-env @babel/plugin-proposal-class-properties --save 

# 3#PASSO

npm install style-loader css-loader file-loader

npm i webpack webpack-cli webpack-dev-server html-webpack-plugin --dev

# 4#PASSO


*//*
-- babelirc
-- gitignore
-- src./index.js
-- public/index.html
-- webpack.config.js


*//* Arquivo babel é para que js seja compativel para todos os navegadores.
código:
{
    "presets": [
   [ "@babel/preset-env", {
     "modules": false,
     "targets": {
    "browsers": [
      "last 2 Chrome versions",
      "last 2 Firefox versions",
      "last 2 Safari versions",
      "last 2 iOS versions",
      "last 1 Android version",
      "last 1 ChromeAndroid version",
      "ie 11"
    ]
     }
   } ],
   "@babel/preset-react"
    ],
    "plugins": [ "@babel/plugin-proposal-class-properties" ]
  }



*//* Arquivo webpack comprime todo para um arquivo de saida

const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: './index.html'
        })
    ]
};


# 5#PASSO (Optional)

npm i jquery popper.js bootstrap --save






