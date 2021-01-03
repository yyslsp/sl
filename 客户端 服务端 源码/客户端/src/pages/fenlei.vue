<template>
	<!-- breadcrumbs -->
		<div class="fenlei">
			<div class="breadcrumbs">
				<div class="container">
					<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><a href="##"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
						<li class="active">产品展示</li>
					</ol>
				</div>
			</div>
			
			
			<div class="products">
				<div class="container">
					<div class="col-md-4 products-left">
						
					
						<div class="new-products animated wow slideInUp" data-wow-delay=".5s">
							<h3>New Products</h3>
							<div class="new-products-grids">
								<router-link class="new-products-grid" 
								tag="div"
								v-for="(item,index) of jiaju"
								:key="item.index"
								to=""
								>
									<div class="new-products-grid-left">
										<router-link tag="a" :to="`/detail/${item._id}?collectionName=jiaju`"><img :src="item.url" alt=" " class="img-responsive" /></router-link>
									</div>
									<div class="new-products-grid-right">
										<h4><a href="##">occaecat cupidatat</a></h4>
										
										<div class="simpleCart_shelfItem new-products-grid-right-add-cart">
											<p>
												<span class="item_price">${{item.dollar}}</span>
												<!-- <router-link @click="ku" tag="a" :to="`/checkout/${item._id}?collectionName=checkout`">加入购物车 -->
												<!-- <a @click="addToCart">加入购物车</a> -->
										<a @click="$store.dispatch('shop_car/addItem',item)">
										加入购物车
										</a>
												<!-- </router-link> -->
											</p>
										</div>
									</div>
									<div class="clearfix"> </div>
								</router-link>
							
						
							</div>
						</div>
						<div class="men-position animated wow slideInUp" data-wow-delay=".5s">
							<a href="##"><img src="/images/27.jpg" alt=" " class="img-responsive" /></a>
							<div class="men-position-pos">
								<h4>Summer collection</h4>
								<h5><span>55%</span> Flat Discount</h5>
							</div>
						</div>
					</div>
					<div class="col-md-8 products-right">
						<div class="products-right-grid">
						
							<div class="products-right-grids-position animated wow slideInRight" data-wow-delay=".5s">
								<img src="/images/18.jpg" alt=" " class="img-responsive" />
								<div class="products-right-grids-position1">
									<h4>2016 New Collection</h4>
									<p>Temporibus autem quibusdam et aut officiis debitis aut rerum 
										necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae 
										non recusandae.</p>
								</div>
							</div>
						</div>
						<!--  -->
						
						<div class="products-right-grids-bottom">
											<router-link class="col-md-4 products-right-grids-bottom-grid"
											tag="div"
											v-for="(item,index) of data"
											:key="item.index"
											to=""
											>
												<div class="new-collections-grid1 products-right-grid1 animated wow slideInUp" data-wow-delay=".5s">
													<div class="new-collections-grid1-image">
														<a href="##" class="product-image"><img :src="item.imglist" alt=" " class="img-responsive"></a>
														<div class="new-collections-grid1-image-pos products-right-grids-pos">
															<!-- <a href="##">添加到购物车</a> -->
															<router-link tag="a" :to="`/detail/${item._id}?collectionName=details`">查看详情</router-link>
														</div>
														<div class="new-collections-grid1-right products-right-grids-pos-right">
															
														</div>
													</div>
													<h4><a href="single.html">Blazer</a></h4>
													<p>Vel illum qui dolorem.</p>
													<div class="simpleCart_shelfItem products-right-grid1-add-cart">
														<p><i>$585</i> <span class="item_price">$489</span><a  @click="$store.dispatch('shop_car/addItem',item)">添加购物车</a></p>
													</div>
												</div>
											</router-link>
										
											<div class="clearfix"> </div>
										</div>
						
						
						
						<!--  -->
					</div>
					
					
					</div>
					
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name:'fenlei',
		props:{},
		data(){
			return{
				data:'',
				jiaju:'',
				car:[]
			}
		},
		components:{},
		mounted(){
			this.$axios.all([
			      this.$axios.get('/api/list/details'),
			      this.$axios.get('/api/list/jiaju',{params:{_limit:3}})
			    ]).then(
			      this.$axios.spread((details,jiaju)=>{ //所有数据回来，在渲染页面
			        this.data=details.data;
			        this.jiaju=jiaju.data;
			      })
			    )
		},
		updated(){
			
		},
		// methods:{
		// 	// addToCart(){
		// 	// 	console.log('点击了加入购物车')
		// 	// }
			
		// }
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
	.sorting{
		float:right;
		width: 35%;
	}
	.sorting-left{
		float: right;
	    margin-right: 2em;
	    width: 25%;
	}
	select#country,select#country1 {
	    border: 1px solid #212121;
	    outline: none;
	    font-size: 14px;
	    color: #212121;
	    padding: 0.5em;
	    width: 100%;
		cursor: pointer;
	}
	.products-right-grids{
		margin-bottom: 2em;
	}
	.products-right-grids-bottom {
	    background: #F7F7F9;
		padding:1em 0 1em 1em;
	}
	.products-right-grid1{
		text-align:center;
		
	}
	.products-right-grid1-add-cart p i {
	    color: #999;
	    position: relative;
	    font-style: normal;
	    font-size: 14px;
	}
	.products-right-grid1-add-cart p,.new-products-grid-right-add-cart p{
	    margin: 0 !important;
	    text-transform: capitalize;
	    color: #000;
	    font-size: 1.2em !important;
	}
	.products-right-grid1-add-cart p a,.new-products-grid-right-add-cart p a {
	    font-size: 14px;
	    color: #D8703F;
	    margin: 1em 0 0;
	    text-decoration: none;
	    text-transform: uppercase;
	    padding: 0em 1em;
	    border: 1px solid;
	}
	.products-right-grid1-add-cart p a{
	    display: block;
	}
	.products-right-grid1-add-cart p span {
	    margin-left: 1em;
	}
	.products-right-grid1:hover:before {
	    height:62% !important;
	}
	.products-right-grid1:before {
	    height: 60% !important;
	}
	.products-right-grids-pos {
	    top: 40% !important;
	    left: 20% !important;
	}
	.products-right-grids-pos-right{
	    bottom: 35% !important;
	    left: 26% !important;
	}
	.products-right-grids-bottom-grid {
	    padding-left: 0;
	}
	.products-right-grid1:nth-child(2) {
	    margin: 1em 0 !important;
	}
	.numbering{
		text-align:right;
	}
	ul.paging {
	    margin: 4em auto 0;
	}
	.paging > .active > a,.paging > .active > a:hover {
	    background-color:#ffc229;
	    border-color:#EDB62B;
	}
	.pagination > li > a{
		color:#212121;
	}
	.categories,.new-products{
		border:1px solid #999;
	}
	.categories{
		margin:3em 0;
	}
	.categories h3,.filter-price h3,.new-products h3{
		font-size: 1.5em;
	    color: #212121;
	    margin: 0;
	    padding: .5em;
	    background: #f5f5f5;
	    text-transform: uppercase;
	    text-align: center;
	    letter-spacing: 5px;
	}
	.filter-price h3{
		background:none;
	}
	.categories ul.cate,.new-products-grids{
		padding:2em;
	}
	.categories ul li{
		display:block;
		color:#999;
		font-size:14px;
		background:url(/images/img-sp.png) no-repeat -9px -150px;
		padding-left:2em;
		margin-bottom:1em;
	}
	.categories ul li a{
		color:#999;
		text-decoration:none;
	}
	.categories ul li a:hover{
		color:#d8703f;
	}
	.categories ul li span{
		float:right;
	}
	ul.cate ul{
		margin-left:2em;
	}
	ul.dropdown-menu1 li{
		display:block;
		font-size:14px;
	}
	ul.dropdown-menu1 li a{
		color:#212121;
		text-decoration:none;
	}
	input#amount {
	    outline: none;
	    margin: 0 auto;
	    text-align: center;
	    width: 100%;
	}
	
	.new-products-grid-left{
		float:left;
		width:35%;
	}
	.new-products-grid-right{
		float:right;
		width:60%;
	}
	.new-products-grid-right h4 a{
		text-transform:uppercase;
		font-size: 14px;
	    line-height: 1.8em;
		color:#212121;
		text-decoration:none;
		display:block;
		margin-bottom:.5em;
	}
	.new-products-grid-right h4 a:hover{
		color:#d8703f;
	}
	.new-products-grid-right-add-cart p span {
	    display: block;
	    margin: 0.5em 0 1em;
	}
	.new-products-grid-right-add-cart p a{
		padding:.5em 1em;
	}
	.new-products-grid:nth-child(2){
		margin:3em 0;
	}
	.products-right-grids-position,.timer-grid-right1{
		position: relative;
		display: block;
	    overflow: hidden;
	}
	.products-right-grids-position1{
		position:absolute;
		top:40%;
	    left: 10%;
	}
	.products-right-grids-position1 h4{
		text-transform: uppercase;
	    font-size: 1.5em;
	    color: #fff;
	    letter-spacing: 3px;
	    padding-bottom: .53em;
	    border-bottom: 1px solid #fff;
	    width: 50%;
	}
	.products-right-grids-position1 p{
		margin:1em 0 0;
		color:#fff;
		font-size:14px;
		width:85%;
		line-height:1.8em;
	}
	.men-position {
	    margin: 3em 0 0;
	    position: relative;
		padding:1em;
		background:#F7F7F9;
	}
	.men-position-pos{
		position:absolute;
		top: 30%;
	    left: 15%;
	}
	.men-position-pos h4{
		text-transform:uppercase;
		font-size:2em;
		color:#fff;
		margin:0;
		padding-bottom:1em;
		position:relative;
	}
	.men-position-pos h4:after{
		content: '';
	    background: #fff;
	    width: 50%;
	    right: 15%;
	    height: 2px;
	    position: absolute;
	    bottom: 0%;
	}
	.men-position-pos h5{
		margin:1em 0 0;
		color:#fff;
		text-transform:uppercase;
		font-size:2em;
		text-align: center;
	}
	.men-position-pos h5 span{
		color:#ffc229;
		font-weight:600;
	}
	/*-- //products --*/
	.rating-left{
		float: left;
	}
</style>
