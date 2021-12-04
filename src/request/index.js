import axios from 'axios'
// 创建实例时设置配置默认值
const instance = axios.create({
	baseURL: 'https://api.example.com',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
})
// 添加一个请求拦截器
instance.interceptors.request.use(
	config => {
		console.log('拦截器request成功-config', config.headers.xtoken)
		if (localStorage.getItem('token')) {
			console.log('存有token')
			config.headers.xtoken = localStorage.getItem('token')
			console.log('config-xtoken', config.headers.xtoken)
		}
		// else {
		// 	localStorage.setItem('token', 'tttttttttttttttttt')
		// 	console.log('没有token-本地保存的token', localStorage.getItem('token'))
		// }
		return config
	},
	err => {
		console.log('拦截器request失败', err)

		return Promise.reject(err)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	response => {
		console.log('拦截器response成功-response', response)
		return response
	},
	err => {
		console.log('拦截器response失败')

		return Promise.reject(err)
	}
)

export default instance
