module.exports = {
	entry: './src/components/start.jsx',
	output: {
		path: './src/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 5050,
		publicPath: "/src/assets/js/dist/"
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}