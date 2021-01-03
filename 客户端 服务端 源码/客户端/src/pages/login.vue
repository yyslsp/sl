<template>
	<div class="login">
		<!-- breadcrumbs -->
			<div class="breadcrumbs">
				<div class="container">
					<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>首页</a></li>
						<li class="active">登陆页面</li>
					</ol>
				</div>
			</div>
		<!-- //breadcrumbs -->
		
		<!-- login -->
			<div class="login">
					<div class="container">
						<h3 class="animated wow zoomIn" data-wow-delay=".5s">登陆表单</h3>
						<p class="est animated wow zoomIn" data-wow-delay=".5s">异教徒的黑人并非例外，它抚慰着心灵，也就是说，他们抛弃了那些为你的麻烦负责的人的一般职责.</p>
						<div class="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
							<form>
								<input type="text" placeholder="输入账号" v-model="username" >
								<input type="password" placeholder="输入密码" v-model="password" >
								<p>{{mess}}</p>
								<div class="forgot">
									<a href="#">忘记密码?</a>
								</div>
								<button type="button" value="登陆" @click="login">登陆</button>
							</form>
						</div>
						<h4 class="animated wow slideInUp" data-wow-delay=".5s">For New People</h4>
						<p class="animated wow slideInUp" data-wow-delay=".5s">
							<router-link tag="input" type="button" value="没有账号去注册" to="/reg"></router-link>
						(或) 返回 <a href="##">首页<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
					</div>
				</div>
		<!-- //login -->
	</div>
</template>

<script>
	export default {
		name:'login',
		props:{},
		data(){
			return{
				username:'',
				password:'',
				mess:''
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			login(){
				this.$axios({
					//表单校验的业务
					url:'/api/login',
					method:'post',
					//携带非地址栏信息
					data:{
						username:this.username,
						password:this.password
						
					}
				}).then(
				res=>{
					//成功
					if(res.err===0){
						//种token
						window.localStorage.setItem('user',JSON.stringify(res));
						//跳转到之前还是跳转到user
						if(this.$route.query.backpath){
							this.$router.push({
								path:this.$route.query.backpath
							})
						}else{
							this.$router.push('/home')
						}
						
					}else{
						this.mess=res.msg
					}
				}
				)
			}
		}
	}
</script>

<style>
	/*-- products --*/
	.breadcrumbs{
		padding:1.5em 0;
		background:#f5f5f5;
	}
	.breadcrumb1{
		padding:0;
		margin:0;
	}
	.breadcrumb1 li{
		font-size:1em;
		color:#999;
	}
	.breadcrumb1 li a{
		color:#d8703f;
		text-decoration:none;
	}
	.breadcrumb1 li span {
	    left: 0em;
	    padding-right: 1em;
	    color: #D8703F;
	}
	
	/*  */
	/*-- login --*/
	.login-form-grids{
		width: 45%;
	    padding: 3em;
		background:#F7F7F9;
		margin:3em auto 0;
	}
	.login-form-grids input[type="email"],.login-form-grids input[type="password"],.login-form-grids input[type="text"]{
		outline: none;
	    border: 1px solid #DBDBDB;
	    padding: 10px 10px 10px 45px;
	    font-size: 14px;
	    color: #999;
	    display: block;
	    width: 100%;
	}
	.login-form-grids input[type="email"]{
		background:url(/images/img-sp.png) no-repeat 5px -182px #fff;
	}
	.login-form-grids input[type="password"]{
		background:url(/images/img-sp.png) no-repeat 5px -220px #fff;
		margin:1em 0 0;
	}
	.forgot {
	    margin: 1.5em 0 0;
	}
	.login-form-grids input[type="submit"]{
		outline: none;
	    border: none;
	    padding: 10px 0;
	    font-size: 1em;
	    color: #fff;
	    display: block;
	    width: 100%;
	    background:#FFC229;
	    margin: 1.5em 0 0;
	}
	.login-form-grids input[type="submit"]:hover{
		background:#d8703f;
	}
	.login-form-grids ::-webkit-input-placeholder{
		color:#999;
	}
	.forgot a{
		color:#212121;
		font-size:14px;
		text-decoration:none;
	}
	.forgot a:hover{
		color:#d8703f;
	}
	.login h4{
		margin: 2em 0 0.5em;
	    font-size: 1.5em;
	    color: #212121;
	    text-align: center;
	    text-transform: uppercase;
	}
	.login p{
		font-size:14px;
		color:#999;
		line-height:1.8em;
		margin:0;
		text-align:center;
	}
	.login p a{
		color:#d8703f;
		text-decoration:none;
		font-size: 1.2em;
		padding: 0 .5em;
	}
	.login p a:hover{
		color:#212121;
	}
	.login p a span{
		top: 0.1em;
	    font-size: .7em;
	    left: 0.3em;
	}
</style>
