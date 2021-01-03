import Vue from  'vue'
import App from './layouts/App.vue'
//引入路由实例
import router from './plugins/router'
import store from './plugins/vuex.js'
Vue.config.productionTip = false


import './assets/css/bootstrap.css'
import './assets/css/animate.min.css'
import './assets/css/jquery.countdown.css'


import './assets/css/jquery-ui.css'
import './assets/css/base.css'

import './assets/js/jquery.min.js'

import './assets/js/jquery-ui.min.js'

//二级导航
// import './assets/js/bootstrap-3.1.1.min.js'

import './assets/js/simpleCart.min.js'

import './assets/js/wow.min.js'

 import './plugins/axios.js'

//引入全局过滤器的配置'
import './filters'

let vm = new Vue({
	data:{
		//顶部和底部的显示隐藏
		bNav:false,
		bFoot:false,
		bLoading:false
	},
	router,
	store,
	render:(h)=>h(App)
}).$mount('#app')

export default vm;