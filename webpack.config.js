const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
module.exports = {
	entry: "./src/index.js",
	mode: "development",
	devtool: "source-map",
	devServer: {
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /.(js)|(jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-flow"],
					},
				},
			},
		],
	},
	devServer: {
		port: "9999",
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new webpack.DefinePlugin({
			__DEV__: true,
			__PROFILE__: true,
			__EXPERIMENTAL__: true,
			__UMD__: true,
		}),
	],
	resolve: {
		alias: {
			react: path.resolve(__dirname, "./packages/react"),
			shared: path.resolve(__dirname, "./packages/shared"),
			scheduler: path.resolve(__dirname, "./packages/scheduler"),
			"react-dom": path.resolve(__dirname, "./packages/react-dom"),
			"react-reconciler": path.resolve(
				__dirname,
				"./packages/react-reconciler"
			),
		},
	},
};
