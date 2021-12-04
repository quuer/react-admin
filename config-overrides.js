// 按需引入
const { override, addWebpackAlias, fixBabelImports } = require('customize-cra')
const path = require('path')
module.exports = override(
	// 短路径
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src'),
		pages: path.resolve(__dirname, 'src/pages'),
		api: path.resolve(__dirname, 'src/api'),
		utils: path.resolve(__dirname, 'src/utils'),
		assets: path.resolve(__dirname, 'src/assets')
	}),
	// antd按需引入
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	})
	// 修改主题色
	// addLessLoader({
	// 	javascriptEnabled: true,
	// 	modifyVars: { '@primary-color': '#1DA57A' }
	// })
)
