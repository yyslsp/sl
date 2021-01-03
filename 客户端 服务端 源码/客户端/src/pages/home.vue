<template>
	<div class="home">
		<!-- banner -->
		
			<div class="banner">
				           
				<div class="container">
					<div class="banner-info animated wow zoomIn" data-wow-delay=".5s">
						<h3>免费在线购物</h3>
						<h4>取决于<span>50% <i>关/-</i></span></h4>
					</div>
				</div>
				
				
					 <div class="banner-lun">
					      <ul class="clearfix">
					        <!-- <router-link tag="li" to="/detail/1?collectionName=banner"> -->
					          <!-- <img src="/images/img_1.jpg" alt="" /> -->
					          <!-- <div class="text-box"> -->
					            <!-- <h2>T恤+正式裤子+珠宝+化妆品</h2> -->
					            
					          <!-- </div> -->
					        <!-- </router-link> -->
					        <li>
					          <!-- <img src="/images/img_2.jpg" alt="" /> -->
					          <div class="text-box">
					            <h2>玩具+家具+照明+手表</h2>
					           
					          </div>
					        </li>
					        <li>
					          <!-- <img src="/images/img_3.jpg" alt="" /> -->
					          <div class="text-box">
					            <h2>上衣+书籍与媒体+体育</h2>
					            
					          </div>
					        </li>
					       
					      </ul>
					    </div>
					<!--  -->
			</div>
		
			   
			<!-- banner-bottom -->
				<div class="banner-bottom">
					
					<div class="container"> 
						<div class="banner-bottom-grids">
							<div class="banner-bottom-grid-left animated wow slideInLeft" data-wow-delay=".5s">
								<div class="grid">
									<figure class="effect-julia">
										<img src="/images/4.jpg" alt=" " class="img-responsive" />
										<figcaption>
											<h3>Best <span>Store</span><i> in online shopping</i></h3>
											<div>
												<p>Cupidatat non proident, sunt</p>
												<p>Officia deserunt mollit anim</p>
												<p>Laboris nisi ut aliquip consequat</p>
											</div>
										</figcaption>			
									</figure>
								</div>
							</div>
							<div class="banner-bottom-grid-left1 animated wow slideInUp" data-wow-delay=".5s">
								<div class="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
									<div class="banner-bottom-grid-left-grid1">
										<img src="/images/1.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="banner-bottom-grid-left1-pos">
										<p>Discount 45%</p>
									</div>
								</div>
								<div class="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
									<div class="banner-bottom-grid-left-grid1">
										<img src="/images/2.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="banner-bottom-grid-left1-position">
										<div class="banner-bottom-grid-left1-pos1">
											<p>Latest New Collections</p>
										</div>
									</div>
								</div>
							</div>
							<div class="banner-bottom-grid-right animated wow slideInRight" data-wow-delay=".5s">
								<div class="banner-bottom-grid-left-grid grid-left-grid1">
									<div class="banner-bottom-grid-left-grid1">
										<img src="/images/3.jpg" alt=" " class="img-responsive" />
									</div>
									<div class="grid-left-grid1-pos">
										<p>top and classic designs <span>2016 Collection</span></p>
									</div>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
				</div>
			<!-- collections -->
			<div class="new-collections">
					<div class="container">
						<h3 class="animated wow zoomIn" data-wow-delay=".5s">新系列</h3>
						<!-- <div>{{$store.state.cartList.length}}</div> -->
							<!-- <ul>
								<li v-for="item in $store.state.cartList">
									{{item}}
								</li>
							</ul> -->
						<p class="est animated wow zoomIn" data-wow-delay=".5s">他们若不被杀，就不被丢弃；他们错在离弃他们工作的人身上，就必丧命。.</p>
						<div class="new-collections-grids">
							<!--  -->
							<!-- <div class="col-md-3 new-collections-grid"> -->
								
								<router-link class="col-md-3 new-collections-grid" style="padding-bottom: 20px;"
								tag="div"
								v-for="(item,index) of home"
								:key="item._id"
								to=""
								>
									<div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s" :title="item.title">
										<div class="new-collections-grid1-image">
												<a href="##" class="product-image"><img :src="item.imglist" alt= "" class="img-responsive" /></a>
												<div class="new-collections-grid1-image-pos">
													<!-- <a href="##">快速预览</a> -->
													<router-link  tag="a" :to="`/detail/${item._id}?collectionName=details`">快速预览</router-link>
												</div>
											</div>
											<h4 ><a href="##" style="text-overflow:ellipsis;" id="aaa" >{{item.alt}}</a></h4>
											<!-- <p>{{item.alt}}.</p> -->
											<div class="new-collections-grid1-left simpleCart_shelfItem">
												<p><i>${{item.dollar}}</i> <span class="item_price">${{item.dollar}}</span><a class="item_add"  @click="$store.dispatch('shop_car/addItem',item)">加入购物车</a></p>
											</div>
									
									</div>
								</router-link>
							
							<!-- </div> -->
							
						
							<div class="clearfix"> </div>
						</div>
					</div>
				</div>
			<!--//collections  -->
			
			<!-- new-timer -->
				<div class="timer">
						<div class="container">
							<div class="timer-grids">
								<div class="col-md-8 timer-grid-left animated wow slideInLeft" data-wow-delay=".5s">
									<h3><a href="products.html">sunt in culpa qui officia deserunt mollit</a></h3>
									<div class="new-collections-grid1-left simpleCart_shelfItem timer-grid-left-price">
										<p><i>$580</i> <span class="item_price">$550</span></p>
										<h4>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
											nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
											qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
											dolorem eum fugiat quo voluptas nulla pariatur.</h4>
										<p>
											<a class="item_add timer_add" href="#">加入购物车</a>
											<!-- <router-link  tag="a" :to="`/detail/${home[0]._id}?collectionName=details`">快速预览</router-link> -->
										</p>
									</div>
									<div id="counter"> </div>
								
								</div>
								<div class="col-md-4 timer-grid-right animated wow slideInRight" data-wow-delay=".5s">
									<div class="timer-grid-right1">
										
										
										<img src="/images/17.jpg" alt=" " class="img-responsive" />
									
										<div class="timer-grid-right-pos">
											
										
											<h4>Special Offer</h4>
										</div>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
					</div>
			<!-- //new-timer -->
			
			<!-- collections-bottom -->
				<div class="collections-bottom">
						<div class="container">
							<div class="collections-bottom-grids">
								<div class="collections-bottom-grid animated wow slideInLeft" data-wow-delay=".5s">
									<h3>45% Offer For <span>Women & Children's</span></h3>
								</div>
							</div>
							<div class="newsletter animated wow slideInUp" data-wow-delay=".5s">
								<h3>Newsletter</h3>
								<p>Join us now to get all news and special offers.</p>
								<form>
									<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
									<input type="email" value="Enter your email address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your email address';}" required="">
									<input type="submit" value="Join Us" >
								</form>
							</div>
						</div>
					</div>
			<!-- //collections-bottom -->
				
	</div>
</template>

<script>
	import $ from 'jquery'
	import Swipe from '../assets/js/swipe.js'
	
	//引入经过配置的axios
	// import axios from '../plugins/axios.js'
	// import {createNamespacedHelpers} from 'vuex'
	//   const {mapState,mapActions} = createNamespacedHelpers('home')
	export default {
	  name: 'home',
	  props: {},
	  data() {
	    return {
			home:[],
		};
	  },
	   components: {},
	   methods:{//methods定义的方法，必须加上()来调用
		   initSwipe(){
			   new Swipe($('.banner-lun')[0], {
			     auto: 4000,
			     continuous: true,
			     stopPropation: true,
			     callback: function(index, element) {
			       $('.banner-lun ol li').removeClass('active');
			       $('.banner-lun ol li')
			         .eq(index)
			         .addClass('active');
			   				
			     }
			   });
			   
		   },
		
	   },
	    mounted() {//挂载后
			console.log('挂在后')
		
			
			this.$axios.all([
			      this.$axios.get('/api/list/details')
			      // this.$axios.get('/api/list/banner',{params:{_limit:3}})
			    ]).then(
			      this.$axios.spread((details)=>{ //所有数据回来，在渲染页面
			        this.home=details.data;
			        // this.banner=banner.data;
			      })
			    )
		
				 window.scrollTo(0,1);
			
	
	    },
	    updated() {//更新后
			console.log('更新后')
			this.initSwipe()
		},
	 
	};
</script>

<style>
	#aaa{
		width:240px;
		overflow: hidden;
		white-space: nowrap;
	}
	/*  */
	.content {
	  max-width: 6.4rem;
	  margin: 0 auto;
	  margin-bottom: 0.8rem;
	  
	  
	}
	.content .banner {
	  margin-top: 0.6rem;
	  position: relative;
	  overflow: hidden;
	  z-index: 1;
	}
	.banner ul{
		
		 margin-left:22%;
		 margin-top:5%;
		list-style: none;
		
	}
	.banner ul li {
	  width: 6.4rem;
	 
	
	}
	.banner ul li img {
	  width: 100%;
	  display: block;
	}
	.banner ul li .text-box {
	  /* width: 10rem; */
	  padding: 0 0.3rem;
	  height: 1.24rem;
	  position: absolute;
	  left: 0;
	  bottom: 0;
	  color: #fff;
	  /* background: rgba(0, 0, 0, 0.5); */
	}
	.text-box h2 {
	  /* font-size: 2rem; */
	  font-weight: normal;
	  margin-top: 0.22rem;
	  line-height: 100%;
	  margin-bottom: 0.22rem;
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
	}
	.text-box p {
	  line-height: 100%;
	}
	
	.banner ol {
	  position: absolute;
	  right: 0.2rem;
	  bottom: 0.2rem;
	}
	.banner ol li {
	  width: 0.15rem;
	  height: 0.15rem;
	  background: #5477b2;
	  float: left;
	  border-radius: 50%;
	  margin-right: 0.08rem;
	}
	.banner ol li.active {
	  background: #fff;
	}
	/*  */
	
	
	/* banner */
	.banner{
		background:url(/images/banner.jpg) no-repeat 0px 0px;
		background-size:cover;
		-webkit-background-size:cover;
		-moz-background-size:cover;
		-o-background-size:cover;
		-ms-background-size:cover;
		min-height:700px;
		position: relative;
	}
	.banner-info h3{
		font-size:5em;
		color:#fff;
		margin:0;
	}
	.banner-info {
	    margin: 9em 0 0;
	    text-align: center;
	}
	.banner-info h4{
		font-size: 3em;
	    color: #fff;
	    margin: 0em 0 0 7.5em;
		font-weight:300;
		font-family: 'Lato', sans-serif;
	}
	.banner-info h4 span{
		padding: 0.8em .9em;
	    background: #ffc229;
	    border-radius: 100%;
	    display: inline-block;
	}
	.banner-info h4 span i{
		display:block;
	}
	.banner-info1 p{
		font-size:2em;
		color:#fff;
		margin:0;
		line-height:1.8em;
		width:65%;
	}
	/* //banner */
	
	
	
	
	
	/* banner-bottom */
	.banner-bottom,.new-collections,.checkout,.collections-bottom,.timer,.register,.products,.typo,.mail,.single,.login,.single-related-products{
		padding:5em 0;
	}
	.banner-bottom-grid-left{
		float:left;
		width:33.1%;
	}
	.banner-bottom-grid-left1{
		float:left;
		width:32.5%;
		margin:0 1em;
	}
	.banner-bottom-grid-right{
		float:left;
		width:31.5%;
	}
	.left1-grid:nth-child(2) {
	    margin: 1em 0 0;
	}
	.grid-left-grid1{
		position: relative;
		display: block;
	    overflow: hidden;
	    text-align: center;
	}
	.grid-left-grid1,.banner-bottom-grid-left-grid1{
	    position: relative;
		width: 100%;
	}
	.grid-left-grid1:hover img,.products-right-grids-position:hover img,.timer-grid-right1:hover img {
	    -webkit-transform: scale(1.5);
	    -ms-transform: scale(1.5);
	    -o-transform: scale(1.5);
	    transform: scale(1.5);
	}
	.grid-left-grid1 img,.products-right-grids-position img,.timer-grid-right1 img{
	    -webkit-transition: all 3s ease-in-out;
	    -moz-transition: all 3s ease-in-out;
	    -o-transition: all 3s ease-in-out;
	    transition: all 3s ease-in-out;
	}
	.grid-left-grid1-pos{
		position: absolute;
	    bottom: 14%;
	    left: 2%;
	    width:90%;
	    text-align: center;
	    text-transform: capitalize;
	}
	.grid-left-grid1-pos p{
		font-size:2em;
		color:#fff;
		margin:0;
	}
	.grid-left-grid1-pos p span{
		display:block;
	}
	.banner-bottom-grid-left1-pos{
		position:absolute;
		top:36%;
		left:3%;
		width:90%;
	}
	.banner-bottom-grid-left1-pos p{
		font-size:2em;
		color:#fff;
		margin:0;
	}
	.banner-bottom-grid-left1-position{
		position: absolute;
	    top: 6%;
	    left: 3%;
	    width: 94%;
	    height: 89%;
	    padding: 1em;
	    border: 1px solid #fff;
	}
	.banner-bottom-grid-left1-pos1{
		padding:1.8em;
		background:rgba(0, 0, 0, 0.22);
	}
	.banner-bottom-grid-left1-pos1 p{
		font-size:2em;
		color:#fff;
		margin:0;
	}
	.grid {
		position: relative;
		clear: both;
		margin: 0 auto;
		padding:0;
		max-width: 1000px;
		list-style: none;
		text-align: center;
	}
	
	/* Common style */
	.grid figure {
		position: relative;
	    float: none;
	    overflow: hidden;
	    margin: 0;
	    min-width:376px;
	    max-width:480px;
	    max-height: 470px;
	    width: 48%;
	    height: auto;
	    background: #3085a3;
	    text-align: center;
	}
	
	.grid figure img {
		position: relative;
		display: block;
		min-height: 100%;
		max-width: 100%;
		opacity: 0.8;
	}
	
	.grid figure figcaption {
		padding: 2em;
		color: #fff;
		font-size: 1.25em;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	
	.grid figure figcaption::before,
	.grid figure figcaption::after {
		pointer-events: none;
	}
	
	.grid figure figcaption,
	.grid figure figcaption > a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
	/* Anchor will cover the whole item by default */
	/* For some effects it will show as a button */
	.grid figure figcaption > a {
		z-index: 1000;
		text-indent: 200%;
		white-space: nowrap;
		font-size: 0;
		opacity: 0;
	}
	
	.grid figure h3 {
		word-spacing: -0.15em;
	}
	
	.grid figure h3 span {
		color:#ffc229;
	}
	.grid figure h3 i {
		display: block;
	    font-style: normal;
	    font-size: .5em;
	    line-height: 0.5;
	    letter-spacing:5px;
	    text-transform: uppercase;
	}
	
	.grid figure h3,
	.grid figure p {
		margin: 0;
	}
	
	.grid figure p {
		letter-spacing: 1px;
		font-size: 68.5%;
	}
	
	/* Individual effects */
	
	/*---------------*/
	/***** Julia *****/
	/*---------------*/
	
	figure.effect-julia {
		background: #2f3238;
	}
	
	figure.effect-julia img {
		-webkit-transition: opacity 1s, -webkit-transform 1s;
		transition: opacity 1s, transform 1s;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	
	figure.effect-julia figcaption {
		text-align: left;
	}
	
	figure.effect-julia h3 {
		position: relative;
		padding: 0.5em 0 1em;
		font-size: 2em;
	    line-height: 1.5em;
	}
	
	figure.effect-julia p {
		display: inline-block;
		margin:0 0 0.5em;
		padding: 0.4em 1em;
		background:#fff;
		color: #2f3238;
		text-transform: none;
		font-weight: 500;
		font-size: 75%;
		-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
		transition: opacity 0.35s, transform 0.35s;
		-webkit-transform: translate3d(-360px,0,0);
		transform: translate3d(-360px,0,0);
	}
	
	figure.effect-julia p:first-child {
		-webkit-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}
	
	figure.effect-julia p:nth-of-type(2) {
		-webkit-transition-delay: 0.1s;
		transition-delay: 0.1s;
	}
	
	figure.effect-julia p:nth-of-type(3) {
		-webkit-transition-delay: 0.05s;
		transition-delay: 0.05s;
	}
	
	figure.effect-julia:hover p:first-child {
		-webkit-transition-delay: 0s;
		transition-delay: 0s;
	}
	
	figure.effect-julia:hover p:nth-of-type(2) {
		-webkit-transition-delay: 0.05s;
		transition-delay: 0.05s;
	}
	
	figure.effect-julia:hover p:nth-of-type(3) {
		-webkit-transition-delay: 0.1s;
		transition-delay: 0.1s;
	}
	
	figure.effect-julia:hover img {
		opacity: 0.4;
		-webkit-transform: scale3d(1.1,1.1,1);
		transform: scale3d(1.1,1.1,1);
	}
	
	figure.effect-julia:hover p {
		opacity: 1;
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	/* //banner-bottom */
	
	/* new-collections */
	.new-collections h3,h3.title,.mail h3,.single-related-products h3,.login h3,.register h3{
		text-align: center;
	    color:#222;
	    margin: 0;
	    position: relative;
	    font-size: 3em;
	}
	.new-collections h3:before,.new-collections h3:after,h3.title:before,h3.title:after,.mail h3:before,.mail h3:after,.single-related-products h3:before,.single-related-products h3:after,.login h3:before,.login h3:after,.register h3:before,.register h3:after{
		position: absolute;
	    top: 50%;
	    width: 15%;
	    height: 1px;
	    background: #D5D5D5;
	    content: '';
	}
	.new-collections h3:before,.single-related-products h3:before{
		left:17%;
	}
	h3.title:before,.login h3:before{
		left:22%;
	}
	.new-collections h3:after,.single-related-products h3:after{
		right:17%;
	}
	h3.title::after,.login h3:after{
		right:22%;
	}
	p.est{
		width: 60%;
	    margin: .5em auto 0 !important;
	    color: #999;
	    font-size: 14px;
	    line-height: 1.8em;
	    text-align: center;
	    font-weight: 500 !important;
	}
	.new-collections-grid{
		padding-left:0;
	}
	.new-collections-grids {
	    margin: 3em 0 0;
	}
	.new-collections-grid1{
		float: left;
		padding: 1em;
		background: #fff;
	}
	.new-collections-grid1 img{
		margin:0 auto;
	}
	.new-collections-grid1 h4 a{
		font-size: .9em;
	    color: #222;
	    margin: 1em 0 .3em;
	    text-transform: uppercase;
	    display: block;
	    text-decoration: none;
	}
	.new-collections-grid1 h4 a:hover{
		color:#D8703F;
	}
	.new-collections-grid1 p{
		font-size:14px;
		color:#999;
		line-height:1.8em;
		margin:0 0 .5em;
	}
	.new-collections-grid1-left p a,.occasion-cart a{
		font-size: 14px;
	    color: #D8703F;
	    margin: 0;
	    text-decoration: none;
	    text-transform: uppercase;
	    padding: .5em 1em;
	    border: 1px solid;
	}
	.new-collections-grid1-left p i{
		color: #999;
		position:relative;
		font-style:normal;
		font-size: 14px;
	}
	.new-collections-grid1-left p span{
		margin:0 1em 0 .5em;
	}
	.new-collections-grid1-left p i:before,.products-right-grid1-add-cart p i:before{
		background: #999 none repeat scroll 0 0;
	    content: "";
	    height: 1px;
	    left: -26%;
	    position: absolute;
	    right: -20%;
	    top: 54%;
	    transform: rotate(-8deg) translate(0, -50%);
	    -moz-transform: rotate(-8deg) translate(0, -50%);
	    -webkit-transform: rotate(-8deg) translate(0, -50%);
	}
	.new-collections-grid1-left p {
		margin: 0 !important;
	    text-transform: capitalize;
	    color: #000;
	    /* font-size:1.2em !important; */
		    /* font-size: 1.2em !important; */
	}
	.new-collections {
	    background: #F7F7F9;
	}
	.rating-left{
		float:left;
	}
	.new-collections-grid1-left p a:hover,.occasion-cart a:hover,.products-right-grid1-add-cart p a:hover,.new-products-grid-right-add-cart p a:hover{
		color: #222;
	    border: 1px solid;
	}
	.new-collections-grid1-left {
	    margin: 1.5em 0 .8em;
	}
	.new-collections-grid1-right {
	    position:absolute;
		bottom: 29%;
	    left: 30%;
		display:none;
		z-index:999;
	}
	.new-collections-grid1-right-rate {
	    left: 44% !important;
	}
	.new-collections-grid1:hover .new-collections-grid1-right {
		display:block;
	}
	.rating-left img {
	    margin: .3em 0.1em 0;
	}
	.new-collections-grid1:nth-child(2){
		margin:1em 0 0;
	}
	.new-collections-grid1{
	    position: relative;
	}
	.new-collections-grid1:before {
	    content: "";
	    position: absolute;
	    width: 0%;
	    height:72%;
	    left: 50%;
	    top: 0;
	    background:rgba(255, 255, 255, 0.5);
	    transition: all 0.3s ease;
	    z-index: 3;
	}
	.new-collections-grid1:hover:before {
	    left: 0;
	    top: 0;
	    width: 100%;
	    height:72%;
	}
	.product-image:not(.zoom-available):hover {
	    position: relative;
	    display: block;
	    border: none;
	    text-align: center;
	}
	.product-image{
	    width: 100%;
	}
	.new-collections-grid1-image{
		position:relative;
	}
	.new-collections-grid1-image-pos{
		position:absolute;
		top: 50%;
	    left: 26%;
		transition:.5s ease-in-out;
		-webkit-transition:.5s ease-in-out;
		-moz-transition:.5s ease-in-out;
		-o-transition:.5s ease-in-out;
		z-index:9999;
		display:none;
	}
	.new-collections-grid1-image-pos a{
		padding:10px 20px;
		color:#fff;
		background:#d8703f;
		text-decoration:none;
		font-size: 14px;
	}
	.new-collections-grid1:hover .new-collections-grid1-image-pos{
		display:block;
	}
	.new-collections-grid1-image-pos a:hover{
		background:#ffc229;
	}
	.new-collections-grid1-image-pos1 {
	    left: 41% !important;
	}
	.new-collections-grid1-sub{
		float:left;
		width:48.5%;
	}
	.new-collections-grid1-sub:nth-child(2){
		margin-left:1em;
	}
	.new-collections-grid-sub-grids{
		margin:1em 0 0;
	}
	.new-one{
		position:absolute;
		top:0%;
		right:0%;
		padding:.1em .5em;
		background:#ffc229;
	}
	.new-one p{
		font-size:14px;
		color:#fff;
		margin:0;
	}
	/* //new-collections */
	
	
	/* collections-bottom  */
	.collections-bottom-grids{
		background:url(/images/12.jpg) no-repeat 0px 0px;
		background-size:cover;
		-webkit-background-size:cover;
		-moz-background-size:cover;
		-o-background-size:cover;
		-ms-background-size:cover;
		min-height:520px;
		padding:8em 2em 2em;
	}
	.collections-bottom-grid{
		border:4px double #212121;
	    padding: 2em;
	    width: 50%;
	    margin-left: 4em;
	}
	.collections-bottom-grid h3{
		font-size: 3em;
	    color: #fff;
	    margin: 0;
	    line-height: 1.3em;
		font-family: 'Cabin', sans-serif;
	}
	.collections-bottom-grid h3 span{
		display:block;
		color:#212121;
	}
	.newsletter{
		padding:2em;
		background:#F7F7F9;
		text-align:center;
	}
	.newsletter h3{
		font-size:2em;
		color:#222;
		margin:0;
	}
	.newsletter p{
		color:#999;
		font-size:14px;
		line-height:1.8em;
		margin:.5em 0 2em;
	}
	.newsletter form{
		width:60%;
		margin:0 auto;
	}
	.newsletter input[type="email"]{
		outline: none;
	    padding: 10px 10px 10px 35px;
	    background: none;
	    border: none;
	    border-bottom: 1px solid #D9D9D9;
	    font-size: 14px;
	    color: #999;
	    width: 74%;
	}
	.newsletter input[type="submit"]{
		outline: none;
	    padding: 10px 0;
	    background:#D8703F;
	    border: none;
	    font-size: 1em;
	    color: #fff;
	    width: 17%;
	    margin-left: 2em;
	}
	.newsletter input[type="submit"]:hover{
		background:#ffc229;
	}
	.newsletter form span {
	    left: 1.5em;
	    color:#ffc229;
		top: 0.1em;
	}
	/*  */
	
	
	/* ---------- TIMER ---------- */
	#counter {
		height: 125px;
	    font-size: 40px;
		color:#212121;
		overflow: hidden;
	}
	.countHours,.countDays,.countMinutes {
	    border-right: 1px solid #E3E3E3;
	}
	.countDays, .countHours, .countMinutes, .countSeconds {
	    display:inline-block;
		padding: 0.5em 0;
	}
	.points {
		float: left;
		width:40px;
		margin: 0;
		font-size: 44px;
		font-weight: bold;
		text-align: center;
		line-height: 138px;
		text-shadow: none;
		color:#999;
	    display: none;
	}
	.boxName {
		float: left;
	    width: 100%;
	    font-size: 14px;
	    color: #999;
	    font-weight: 500;
	    clear: both;
	    padding: 0px;
		font-family: 'Open Sans', sans-serif;
	}
	/* ---------- /TIMER ---------- */
	
	.timer-grid-right {
	    padding: 1em;
	    background: #F7F7F9;
		position:relative;
	}
	.timer-grid-right-pos{
		position:absolute;
		top:0%;
		right:0%;
	}
	.timer-grid-right-pos h4{
		padding:.3em 1em .5em;
		background:#ffc229;
		font-size:1em;
		color:#fff;
		text-decoration:none;
	}
	/*-- //timer --*/
	/*-- timer --*/
	 .timer-grid-left h3 a{
		text-transform:capitalize;
		font-size:1.5em;
		color:#212121;
		margin:0;
		line-height:1.5em;
		text-decoration:none;
	}
	.timer-grid-left h3 a:hover{
		color:#D8703F;
	}
	.timer-grid-left-price h4{
		color:#999;
		font-size:14px;
		margin:1em 0 2em;
		line-height:1.8em;
		font-family: 'Open Sans', sans-serif;
	}
	.timer-grid-left h3 {
	    margin: 0 0 0.5em;
	}
</style>
