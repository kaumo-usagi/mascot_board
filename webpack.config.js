module.exports = {
  context: __dirname,
	enbtry: {
	  jsx: "./src/index.jsx",
		css: "./src/main.css",
		html: "./src/index.html",
	},

	output: {
	  path: __dirname + "/static",
		filename: "bundle.js",
	},

	module: {
			  loaders:[
				  { test: /\.html$/, loader: "file?name=[name].[ext]" },
		      { test:/\.css$/, loader: "file?name=[name].[ext]" },
					{ test: /\.jsx$/, exclude: /node_modules/, loader: ["react-hot", "babel"] },
				],
	},
	resolve: {
	  extensions: ["", ".js",".jsx"]
	},
}

