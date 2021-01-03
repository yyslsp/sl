import Vue from  'vue';
import axios from 'axios';

//导入router实例
import router from './router.js';
import vm from '../main.js';


let timer = null;
//详细文档去https://github.com/axios/axios#interceptors//查询
//搜索关键字interceptors


//发出的请求-config:axios{options}发送的是axios的配置信息
axios.interceptors.request.use(function (config) {
	console.log("请求拦截");
 
	//判断有没有params
	config.params = config.params || {
		_page:1,
		_limit:10
	}//默认多少条
	
	
	//获取token
	let local = window.localStorage.getItem('user'); //string
	//判断能不能拿得到
	// user = user ? JSON.parse(user) : null; //object
	let token = local ? JSON.parse(local).token : '';
	config.headers ={ 
		token
	}
	
	//显示loading
	//显示loading
	  clearTimeout(timer)
	  timer = setTimeout(()=>vm.bBLoading=true,500)
	
    return config;//返回配置后的请求
  }, function (error) {
	  //发送请求失败
    return Promise.reject(error);
  });

//返回的请求结果

axios.interceptors.response.use(function (response) {
	console.log("响应拦截");
	
	//得到当前路由router身上 
	let path = router.currentRoute.fullPath
	if(response.data.err===2){
		//token校验失败
		//跳转,到登陆页面
		router.replace({
			path:'/login',
			query:{
				backpath:path,//发送当前位置给登陆组件
			}
		})
	}
	clearTimeout(timer)
	vm.bBLoading=false;//隐藏loading//响应拦截 隐藏
    return response.data;//数据结构简化
	//或
    //return response.data;//只返回data


	//返回失败结果
  }, function (error) {
 
    return Promise.reject(error);
  });
  
 
 
 Vue.prototype.$axios = axios; //未来 vm|组件.$axios
 // Vue.prototype.$http=axios;//未来 vm|组件.$axios
 // window.axios=axios;//  不推荐
 
 //暴漏经过配置的axios
 export default axios;
 