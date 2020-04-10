var webpack = require("webpack");

module.exports = {
		mode: "production",
		entry: "/Users/ShervinGhermez/Desktop/react-test/app/index.jsx",
		output: {
			path:"/Users/ShervinGhermez/Desktop/react-test/server/public/react",
			filename: "bundle.js",
			publicPath: "public",
		},
		devServer:{
			inline: true,
			contentBase:'./',
			port: 3000,
		},



module: {
  rules: [
    {
      test: /\.m?jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    } // 1st member of rules
  ]
}



}
