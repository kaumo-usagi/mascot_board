module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    js: "./src/main.js",
    css: "./src/main.css",
    html: "./src/index.html",
  },

  output: {
    path: __dirname + "/server/public",
    filename: "bundle.js",
  },
  module: {
    // preLoaders: [
    //     //Eslint loader
    //   { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    // ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]}
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // eslint: {
  //   configFile: './.eslintrc'
  // },
};
