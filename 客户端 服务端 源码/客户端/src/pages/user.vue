<template>
	<div class="user">
		<div class="zi">个人中心
		<a @click="logout">注销</a>
		</div>
		<div class="ni">{{$route.query.data.data.username}}</div>
		
		 <ul class="clear">
		        <li>
		          
		        </li>
		        <li>
		          
		        </li>
		      </ul>
		<div class="geren">
			<img :src="require('../config').serverUrl + $route.query.data.data.icon"/>
		</div>
	</div>
</template>

<script>
	import axios from '../plugins/axios.js';
	
	export default {
		//前置守卫
		 beforeRouteEnter(to, from, next) {
		    console.log('beforeRouteEnter')
			// 自动携带token
		    axios.get('/api/user')
		      .then(
		        res => {
		          console.log(2)
				  //如果是0就成功了
				  //然后返回客户数据
		          if(res.err==0){
		            console.log(3)
					
		            to.query.data = res;
		            next()
		          }
		        }
		      )
		  },
		name:'user',
		props:{},
		data(){
			return{}
		},
		methods:{
			logout(){
				window.localStorage.removeItem('user')
				      this.$router.push('/login');
			}
	},
	mounted(){
		 window.scrollTo(0,0);
	}
	
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.zi{
		width:300px;
		height:100px;
		font-size: 30px;
		margin: auto;
		text-align: center;
	}
	.ni{
		width:300px;
		height:100px;
		font-size: 30px;
		margin: auto;
		text-align: center;
	}
	.geren{
		width:200px;
		height:200px;
		border: 1px solid #000;
		border-radius: 50%;
		margin: auto;
		overflow: hidden;
		text-align: center;
		margin-top: -60px;
	}
	.geren img{
		width:100%;
		height:100%;
		line-height: 200px;
		
	}
</style>
