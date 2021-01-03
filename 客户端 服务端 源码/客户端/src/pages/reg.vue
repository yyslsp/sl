<template>
	<div class="reg">
		<!-- breadcrumbs -->
			<div class="breadcrumbs">
				<div class="container">
					<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><a href="##"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>首页</a></li>
						<li class="active" 
						>注册页面</li>
					</ol>
				</div>
			</div>
		<!-- //breadcrumbs -->
		
		<!-- register -->
			<div class="register">
				<div class="container">
					<h3 class="animated wow zoomIn" data-wow-delay=".5s">在这里注册</h3>
					<p class="est animated wow zoomIn" data-wow-delay=".5s">异教徒的黑人并非例外，它抚慰着心灵，也就是说，他们抛弃了那些为你的麻烦负责的人的一般职责。</p>
					<div class="login-form-grids">
						<h5 class="animated wow slideInUp" data-wow-delay=".5s">账号注册</h5>
						
						<form class="animated wow slideInUp" data-wow-delay=".5s">
							<h1 @click="upload" id="icon-a">
								<img src="/images/小黄人.png" />
							</h1>
							 <input type="file" id="icon" style="display: none;" />
							<input type="text" placeholder="账号"   v-model="username" />
							
							<input type="password" placeholder="密码" v-model="password" />
													
							{{mess}}
						</form>
					
						<div class="animated wow slideInUp" data-wow-delay=".5s">
							
							<input type="button" value="注册" @click="reg" id="zhuce">
							<router-link tag="input" type="button" value="有账号去登陆" to="/login" id="butt"></router-link>
						</div>
					</div>
					<!-- <div class="register-home animated wow slideInUp" data-wow-delay=".5s">
						<a href="##">Home</a>
					</div> -->
				</div>
			</div>
		<!-- //register -->
	</div>
</template>

<script>
	export default{
		name:'reg',
		props:{},
		data(){
			return{
				username:'',
				password:'',
				mess:''
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods:{
			upload(){
				this.icon = document.getElementById('icon');
				//访问的是dom，以后解决
				this.icon.click();
			},
			reg(){
				let formData = new FormData();
				formData.append('username',this.username);
				formData.append('password',this.password);
				if(this.icon && this.icon.files.length!==0){
					formData.append('icon',this.icon.files[0]);
				}
				this.$axios({
					url:'/api/reg',
					method:'post',
					data:formData
				}).then(res =>{
						if(res.err===0){
							this.$router.push('/login')
							}else if(res.err === 1 ) {
							this.mess = res.msg;
						}
					}
				)
			}
		}
	}
</script>

<style>
	#butt{
		background:yellowgreen;
		border: none;
		margin-top: 5px;
	}
	#zhuce{
		background: yellow;
		margin-top: 5px;
		width: 100%;
		height:30px;
		border: none;
	}
	#icon-a{
		border:1px solid #000;
		width:100px;
		height: 100px;
		margin-left: 40%;
		border-radius: 50%;
		margin-top: -100px;
		text-align: center;
		overflow: hidden;
		
	}
	#icon-a img{
		width:100%;
		height: 100%;
	}
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
	/*-- register --*/
	.register h3:before{
		left:20%;
	}
	.register h3:after{
		right:20%;
	}
	.login-form-grids h5,.login-form-grids h6{
		font-size:1em;
		color:#212121;
		text-transform:uppercase;
		margin:0 0 2em;
	}
	.login-form-grids input[type="text"]{
		background:url(/images/img-sp.png) no-repeat 5px -259px #fff;
	}
	.login-form-grids input[type="text"]:nth-child(2){
		background:url(/images/img-sp.png) no-repeat 0px -298px #fff;
		margin:1em 0;
	}
	.register-check-box label{
		font-size:14px;
		font-weight:500;
		color:#999;
		margin: 1.5em 0 0 0em;
	}
	.checkbox {
	    position: relative;
		padding-left: 38px !important;
	    cursor: pointer;
	}
	.checkbox i {
	    position: absolute;
	    bottom: -2px;
	    left: 0;
	    display: block;
	    width: 25px;
	    height: 25px;
	    outline: none;
	    border: 2px solid #EDEDED;
	    background: #FFF;
	}
	.checkbox input + i:after,.radio input + i:after {
	    position: absolute;
	    opacity: 0;
	    transition: opacity 0.1s;
	    -o-transition: opacity 0.1s;
	    -ms-transition: opacity 0.1s;
	    -moz-transition: opacity 0.1s;
	    -webkit-transition: opacity 0.1s;
	}
	.checkbox input:checked + i:after,.radio input:checked + i:after{
	    opacity: 1;
	}
	.checkbox input,.radio input {
	    position: absolute;
	    left: -9999px;
	}
	.checkbox input + i:after {
	    content: '';
	    background: url("/images/check.png") no-repeat 1px 2px;
	    top: 0px;
	    left: 2px;
	    width: 16px;
	    height: 16px;
	    font: normal 12px/16px FontAwesome;
	    text-align: center;
	}
	.login-form-grids h6{
		margin:3em 0 2em !important;
	}
	.login-form-grids input[type="password"]:nth-child(3) {
	    margin:1em 0;
	}
	.register-home{
		margin:2em 0 0;
		text-align:center;
	}
	.register-home a{
		padding: 8px 45px;
	    background: #9F9F9F;
		color:#fff;
		font-size:1em;
		text-decoration:none;
	}
	.register-home a:hover{
		background:#d8703f;
	}
	
	/*  */
	p.est{
		width: 60%;
	    margin: .5em auto 0 !important;
	    color: #999;
	    font-size: 14px;
	    line-height: 1.8em;
	    text-align: center;
	    font-weight: 500 !important;
	}
	/*  */
	
</style>
