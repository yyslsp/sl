import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue'
import fenlei from '../pages/fenlei.vue'
import jiaju from '../pages/jiaju.vue'
import login from '../pages/login.vue'
import reg from '../pages/reg.vue'
import checkout from '../pages/checkout.vue'
import error from '../pages/error-page.vue'
import detail from '../pages/detail.vue'
import user from '../pages/user.vue'

import shuoming from '../pages/shuoming.vue'



let routes =[
	{path:'/home',component:home},
	{path:'/fenlei',component:fenlei},
	{path:'/jiaju',component:jiaju},
	{path:'/detail/:id',component:detail,name:'detail'},
	{path:'/login',component:login},
	{path:'/reg',component:reg},
	{path:'/user',component:user},
	{path:'/checkout',component:checkout,name:'checkout'},
	{path:'/',redirect:'/home'},
	{path:'*',component:error}
]

let router = new VueRouter({
	routes
})

export default router;