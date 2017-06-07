var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	// context:'/'
	entry:'./src/script/main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'js/[name]-[chunkhash].js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'index-[hash].html',
			inject:'head' // script 标签的位置 

		})
	]
};