import Vue from 'vue'
import App from './App'
import Json from './Json.js'



// 点击弹窗
const msg = (title,duration=1500,mask=false,icon="none")=> {
	uni.showToast({
		title,
		duration,
		mask,
		icon
	})
}

// 模拟异步请求数据
const json = type => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type])
		}, 500)
	})
}
Vue.prototype.$api = {
	json,
	msg
}
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
