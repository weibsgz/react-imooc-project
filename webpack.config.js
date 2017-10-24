var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: "./js/index.js",
    module:{ 
      rules: [
            {
                 test: /\.css$/,
                 use: [
                    { loader: 'style-loader', options: { base: 2000 } },
                    'css-loader'
                  ]
            },
            {
                 test: /\.js?$/,
                 exclude: /(node_modules)/,
                 loader: 'babel-loader',
                  query: {
                      presets: ['react', 'es2015']
                  }
            }
          ]
    },
    devServer:{
        //contentBase:"./",  //设置根目录
        //host:"192.168.1.102",  //主机的ip地址
        port:"8888"
    },
    output:{
        path: __dirname,
        filename: "bundle.js"
    }
}