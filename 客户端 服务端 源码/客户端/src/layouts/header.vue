<template>
	<!-- header -->
		<div class="header">
			<div class="container">
				<div class="header-grid">
					<div class="header-grid-left animated wow slideInLeft" data-wow-delay=".5s">
						<ul>
							<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">@example.com</a></li>
							<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 892</li>
							<!-- <li><i class="glyphicon glyphicon-log-in" aria-hidden="true"></i><a href="##">登陆</a></li> -->
							<router-link tag="li" active-class="active" to="/login"><i  class="glyphicon glyphicon-log-in denglu" aria-hidden="true"></i><a href="javascript:;">{{username ? username : '登陆' }}</a></router-link>
							<!-- <li><i class="glyphicon glyphicon-book" aria-hidden="true"></i><a href="##">注册</a></li> -->
							<router-link tag="li" active-class="active" to="/reg"><i  class="glyphicon glyphicon-log-in" aria-hidden="true"></i><a href="javascript:;">注册</a></router-link>
							
						</ul>
					</div>
					<div class="header-grid-right animated wow slideInRight" data-wow-delay=".5s">
						<ul class="social-icons">
							<li><a href="#" class="facebook"></a></li>
							<li><a href="#" class="twitter"></a></li>
							<li><a href="#" class="g"></a></li>
							<li><a href="#" class="instagram"></a></li>
						</ul>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="logo-nav">
					<div class="logo-nav-left animated wow zoomIn" data-wow-delay=".5s">
						<h1><a href="index.html">Best Store <span>Shop anywhere</span></a></h1>
					</div>
					<div class="logo-nav-left1">
						<nav class="navbar navbar-default">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header nav_2">
							<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div> 
						<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
							<ul class="nav navbar-nav">
								<!-- <li class="active"><a href="index.html" class="act">首页</a></li> -->
									<router-link tag="li" active-class="active"  to="/home"><a  href="javascript:;" class="act">首页</a></router-link>
								<!-- Mega Menu -->
								
								<!-- <li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">产品展示 <b class="caret"></b></a>
									
								</li> -->
								<router-link tag="li" active-class="active" to="/fenlei"><a href="javascript:;">产品展示</a></router-link>
								
								<!-- <li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown">家具类 <b class="caret"></b></a>
								</li> -->
								<router-link tag="li" active-class="active" to="/jiaju"><a href="javascript:;">家具类</a></router-link>
								<li><a href="##">简码</a></li>
								<li><a href="##">给我们发邮件</a></li>
							</ul>
						</div>
						</nav>
					</div>
					<!-- <div class="logo-nav-right">
						<div class="search-box">
							<div id="sb-search" class="sb-search">
								<form>
									<input class="sb-search-input" placeholder="输入你的搜索词..." type="search" id="search">
									<input class="sb-search-submit" type="submit" value="">
									<span class="sb-icon-search"> </span>
								</form>
							</div>
						</div> -->
							<!-- search-scripts -->
							<!-- // <script src="../assets/js/classie.js"></script>
							 // <script src="../assets/js/uisearch.js"></script> -->
								<!-- // <script>
							 // 	 	new UISearch( document.getElementById( 'sb-search' ) );
							 // 	 </script> -->
							 <!-- search-scripts -->
					<!-- </div> -->
					<div class="header-right">
						<div class="cart box_1">
							<a href="checkout.html">
								<h3> <div class="total">
									<span class="simpleCart_total"></span><span id="simpleCart_quantity" class="simpleCart_quantity"></span></div>
									<img src="images/bag.png" alt="" />
								</h3>
							</a>
							<!-- <p><a href="javascript:;" class="simpleCart_empty">购物车</a></p> -->
							<router-link tag="p" active-class="active" to="/checkout" ><a href="javascript:;" class="simpleCart_empty">购物车</a></router-link>
							<div class="clearfix"></div>
						</div>	
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	<!-- //header -->
</template>

<script>
	export default {
		name:'app-header',
		props:{},
		data(){
			return{
				username:''
				
			}
		},
		components:{
			
		},
		
		mounted(){
			console.log('更新后')
			// this.$axios({
			// 	url:'/api/list/user'
			// 	// params:{_page:1,_limit:20},
			// 	// header:{token:''}
			// }).then(
			// 	res=>console.log('1',res.data)
				
			// 	///或
			// 	// data=>console.log(data)
			// )
			 // console.log(1);
		let userMsg =  localStorage.getItem("user") ? JSON.parse
		(localStorage.getItem("user")) : {};
		console.log(userMsg.err)
		if(userMsg.err===0){
		//将user添加到登陆标签上
		this.username = userMsg.data.nikename
		}
			
			window.scrollTo(0,0);
		},
		updated(){},
		methods:{
			
		},
		
	}
</script>

<style>
	.header-grid-left ul li a,.new-collections-grid1-image-pos a,.new-collections-grid1 h4 a,.login a,.register-home a,.checkout-right-basket a,.bootstrap-tab-text-grid-right ul li a,.occasion-cart a,input[type="submit"],.mail-grid-right1 ul li a,.categories ul li a,.new-products-grid-right-add-cart p a,.new-products-grid-right h4 a,.products-right-grid1-add-cart p a,.timer-grid-left h3 a,.new-collections-grid1-left p a,.copy-right p a,.footer-grid-sub-grid-right h4 a,input[type="submit"],.footer-grid ul li a{
		transition:.5s ease-in-out;
		-webkit-transition:.5s ease-in-out;
		-moz-transition:.5s ease-in-out;
		-o-transition:.5s ease-in-out;
	}
	.header-grid{
		padding:2em 0;
		border-bottom:1px solid #DEDEDE;
	}
	.logo-nav{
		padding:2em 0;
	}
	.header-grid-left{
		float:left;
	}
	.header-grid-left ul li{
		display:inline-block;
		font-size:14px;
		color:#999;
		margin: 0 1em;
	}
	.header-grid-left ul li i{
		left:-.5em;
	}
	.header-grid-left ul li a{
		text-decoration:none;
		color:#999;
	}
	.header-grid-left ul li a:hover{
		color:#FFC229;
	}
	.header-grid-right{
		float:right;
	}
	ul.social-icons li{
		display:inline-block;
		margin: 0px 4px;
	}
	ul.social-icons li a.facebook{
		background: url(/images/img-sp.png) no-repeat -2px -5px;
	    display: block;
	    width: 20px;
	    height: 20px;
	}
	ul.social-icons li a.facebook:hover{
		background: url(/images/img-sp.png) no-repeat -2px -54px;
	    display: block;
	}
	ul.social-icons li a.twitter{
		background:url(/images/img-sp.png) no-repeat -49px -13px;
	    display: block;
	    width: 20px;
	    height: 20px;
	}
	ul.social-icons li a.twitter:hover{
		background:url(/images/img-sp.png) no-repeat -49px -54px;
	    display: block;
	}
	ul.social-icons li a.g{
		background:url(/images/img-sp.png) no-repeat -94px -12px;
	    display: block;
	    width: 20px;
	    height: 20px;
	}
	ul.social-icons li a.g:hover{
		background:url(/images/img-sp.png) no-repeat -94px -54px;
	    display: block;
	}
	ul.social-icons li a.instagram{
		background:url(/images/img-sp.png) no-repeat -139px -12px;
	    display: block;
	    width: 20px;
	    height: 20px;
	}
	ul.social-icons li a.instagram:hover{
		background:url(/images/img-sp.png) no-repeat -139px -52px;
	    display: block;
	}
	.logo-nav-left{
		float:left;
	}
	.logo-nav-left h1 a{
		font-size:1.5em;
		color:#222;
		text-decoration:none;
	}
	.logo-nav-left h1 a span{
		display: block;
	    font-size: .2em;
	    line-height: 0;
	    text-transform: uppercase;
	    letter-spacing: 12px;
	    color: #222222;
	    padding-left: .3em;
	}
	.logo-nav-left1 {
	    float: left;
	    margin-left: 2em;
		/* margin-top:30px ; */
		/* width:500px; */
	}
	.logo-nav-left1 ul li a{
		font-size:.875em;
	    color: #222;
	    text-decoration: none;
	    font-family: 'Lato', sans-serif;
	    text-transform: uppercase;
		font-weight: 600;
	}
	.logo-nav-left1 ul li.active a.act{
		color:#d8703f !important;
	}
	.multi-column-dropdown li a {
	    color: #999 !important;
	}
	.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
	    background-color: transparent;
	}
	.navbar-default .navbar-collapse, .navbar-default .navbar-form {
	    border: none;
	}
	.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {
	    color: #d8703f;
	}
	.navbar-default {
	    background: none;
	    border: none;
	}
	.navbar-collapse {
	    padding: 0;
	}
	ul.multi-column-dropdown h6 {
	    font-size: 1.5em;
	    color:#222222;
	    margin: 0 0 1em;
	    padding-bottom: 1em;
	    border-bottom: 1px solid #E4E4E4;
	    text-transform: capitalize;
	}
	.multi-column-dropdown li {
	    list-style-type: none;
	    margin: 7px 0;
	}
	.multi-column-dropdown li a {
	    display: block;
	    clear: both;
	    line-height: 1.428571429;
	    color: #999 !important;
	    white-space: normal;
		font-weight:500 !important;
	}
	.dropdown-menu.columns-3 {
	    min-width: 700px;
	    padding: 30px 30px;
	}
	.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {
	    background: none;
	    border: none;
	}
	.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {
	    background-color: transparent;
	}
	.nav > li > a:hover, .nav > li > a:focus {
	    background: none;
		color:#d8703f !important;
	}
	.navbar-nav > li > a {
	    padding: 29px 18px 0;
	}
	.search-box {
	    margin-top: .6em;
	}
	/*start search*/
	.sb-search {
		position: absolute;
	    right:25%;
	    width: 0%;
	    min-width:50px;
	    margin: 0;
	    height: 50px;
	    float: none;
	    overflow: hidden;
	    -webkit-transition: width 0.3s;
	    -moz-transition: width 0.3s;
	    transition: width 0.3s;
	    -webkit-backface-visibility: hidden;
	    background: none;
	}
	.sb-search-input {
		position: absolute;
	    top: 0px;
	    left: 0px;
	    border: none;
	    outline: none;
	    background:#F5F5F5;
	    width: 100%;
	    height: 50px;
	    margin: 0;
	    z-index: 10;
	    font-size:14px;
	    color: #999;
	    padding-left: 1em;
	    padding-right: 4em;
	}
	.sb-search-input::-webkit-input-placeholder {
		color:#999;
	}
	.sb-search-input:-moz-placeholder {
		color: #999;
	}
	.sb-search-input::-moz-placeholder {
		color: #999;
	}
	.sb-search-input:-ms-input-placeholder {
		color: #999;
	}
	.sb-icon-search,.sb-search-submit  {
		width: 50px;
	    height: 50px;
	    display: block;
	    position: absolute;
	    right: 0;
	    top: 0;
	    padding: 0;
	    margin: 0;
	    line-height: 85px;
	    text-align: center;
	    cursor: pointer;
	}
	.sb-search-submit {
		background:#fff url(/images/img-sp.png) no-repeat 7px -91px;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; /* IE 8 */
	    filter: alpha(opacity=0); /* IE 5-7 */
	    color: transparent;
		border: none;
		outline: none;
		z-index: -1;
		-webkit-appearance: none;
	}
	.sb-icon-search {
	   background:#fff url(/images/img-sp.png) no-repeat 7px -91px;
		z-index: 90;
	}
	/* Open state */
	.sb-search.sb-search-open,.no-js .sb-search {
		width:42%;
	}
	.sb-search.sb-search-open .sb-icon-search,.no-js .sb-search .sb-icon-search {
		background:#fff url(/images/img-sp.png) no-repeat 7px -91px;
		color: #fff;
		z-index: 11;
	}
	.sb-search.sb-search-open .sb-search-submit,.no-js .sb-search .sb-search-submit {
		z-index: 90;
	}
	/*-- search-ends --*/
	.header-right {
	    float: right;
	    margin-top: 5px;
		width: 14%;
	}
	.box_1 {
	  float: right;
	  margin-top: 5px;
	}
	.box_1 h3 {
	  color:#d8703f;
	  font-size: 1em;
	  margin: 0;
	}
	.total {
	  display: inline-block;
	  vertical-align: middle;
	}
	.box_1 a img {
	  margin: 3px 0 0 0px;
	}
	.box_1 p {
		margin: 0;
	    color: #999;
	    font-size: 14px;
	}
	a.simpleCart_empty {
		color:#212121;
	    font-size: 13px;
	    text-decoration: none;
	    text-align: right;
	    display: block;
	}
	
	
	
	
	/*  */
	
	/*  */
</style>
