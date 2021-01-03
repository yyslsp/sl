<template>
	<div class="detail">
		<!-- breadcrumbs -->
			<div class="breadcrumbs">
				<div class="container">
					<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><a href="##"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>首页</a></li>
						<li class="active">Single Page</li>
					</ol>
				</div>
			</div>
		<!-- //breadcrumbs -->
		<!-- single -->
			<div class="single">
				<div class="container">
				
					<div class="col-md-8 single-right lala">
						<div class="col-md-5 single-right-left animated wow slideInUp" data-wow-delay=".5s">
						       <div class="thumb-image"> <img :src="data.imglist" data-imagezoom="true" class="img-responsive"> </div>
							<div class="xiao">
								<ul class="listul">
									<li><img :src="data.imglist"></li>
									<li><img :src="data.imglist2"></li>
									<li><img :src="data.imglist3"></li>
									
								</ul>
							</div>
						
						</div>
						<div class="col-md-7 single-right-left simpleCart_shelfItem animated wow slideInRight" data-wow-delay=".5s">
							<h3>Men's Solid Casual Shirt</h3>
							<h4><span class="item_price">$550</span> - $900</h4>
							<div class="rating1">
								<span class="starRating">
									<input id="rating5" type="radio" name="rating" value="5">
									<label for="rating5">5</label>
									<input id="rating4" type="radio" name="rating" value="4">
									<label for="rating4">4</label>
									<input id="rating3" type="radio" name="rating" value="3" checked>
									<label for="rating3">3</label>
									<input id="rating2" type="radio" name="rating" value="2">
									<label for="rating2">2</label>
									<input id="rating1" type="radio" name="rating" value="1">
									<label for="rating1">1</label>
								</span>
							</div>
							<div class="description">
								<h5><i>Description</i></h5>
								<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
									eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
							</div>
							<div class="color-quality">
								
								<div class="color-quality-left">
									<h5>Color : </h5>
									<ul>
										<li><a href="#"><span></span>Red</a></li>
										<li><a href="#" class="brown"><span></span>Yellow</a></li>
										<li><a href="#" class="purple"><span></span>Purple</a></li>
										<li><a href="#" class="gray"><span></span>Violet</a></li>
									</ul>
								</div>
								
								<div class="color-quality-right">
									<h5>Quality :</h5>
									<select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
										<option value="null">5 Qty</option>
										<option value="null">6 Qty</option> 
										<option value="null">7 Qty</option>					
										<option value="null">10 Qty</option>								
									</select>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="occasional">
								<h5>Occasion :</h5>
								<div class="colr ert">
									<label class="radio"><input type="radio" name="radio" checked=""><i></i>Casual Wear</label>
								</div>
								<div class="colr">
									<label class="radio"><input type="radio" name="radio"><i></i>Party Wear</label>
								</div>
								<div class="colr">
									<label class="radio"><input type="radio" name="radio"><i></i>Formal Wear</label>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="occasion-cart">
								<!-- <a class="item_add" href="#" @click="addToCart">添加购物车</a> -->
								<a class="item_add" @click="$store.dispatch('shop_car/addItem',data)">添加购物车</a>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<!-- <a class="item_add" href="#" >去购买</a> -->
								<router-link
								tag="a"
								:key="data._id"
								to="/checkout"
								>去购买</router-link>
							</div>
							
							<div class="social">
								<div class="social-left">
									<p>Share On :</p>
								</div>
								
								<div class="social-right">
									<ul class="social-icons">
										<li><a href="#" class="facebook"></a></li>
										<li><a href="#" class="twitter"></a></li>
										<li><a href="#" class="g"></a></li>
										<li><a href="#" class="instagram"></a></li>
									</ul>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div class="col-md-4 products-left">
							<div class="men-position animated wow slideInUp" data-wow-delay=".5s">
								<a href="##"><img src="/images/29.jpg" alt=" " class="img-responsive" /></a>
								<div class="men-position-pos">
									<h4>Summer collection</h4>
									<h5><span>55%</span> Flat Discount</h5>
								</div>
								
							</div>
						</div>
						<div class="clearfix"> </div>
						<div class="bootstrap-tab animated wow slideInUp" data-wow-delay=".5s">
							<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
								<ul id="myTab" class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active"><a href="##" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true" >说明</a></li>
									
								
									
									<li role="presentation"><a href="##" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">回顾(2)</a></li>
									<li role="presentation" class="dropdown">
										<a href="##" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents">问询处 <span class="caret"></span></a>
									<!-- 	<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
											<li><a href="##" tabindex="-1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">cleanse</a></li>
											<li><a href="##" tabindex="-1" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">fanny</a></li>
										</ul> -->
									</li>
								</ul>
								<div id="myTabContent" class="tab-content">
									<div role="tabpanel" class="tab-pane fade in active bootstrap-tab-text" id="home" aria-labelledby="home-tab">
										<h5>产品品简介</h5>
										<p>您可能还没有听说过原始牛仔布牛仔短裤Austin。不要让豆腐树桩镇的某些复古合成器大师清洗干净。小胡子陈词滥调，威廉斯堡·卡尔斯（Williamsburg Carles）瑞士纯素食主义者。屠夫批评背部keffiyeh捕梦网合成器。考斯比（Cosby）毛衣足球大王；代表那位来自乌贼的杯装特里·理查森（Terry Richardson）。Aliquip他可以取悦Salvia cillum iPhone。Seitan aliquip任何人开衫，美国服装，屠夫享乐，如果不是谁的话。

											<span>想要在铜杯小药囊中遭受痛苦的人一直在批评Duis et dolore大逃亡并没有产生任何愉悦感。异教徒的黑人并非例外，它抚慰着心灵，也就是说，他们抛弃了那些为你的麻烦指责的人的一般职责。</span></p>
									</div>
									<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="profile" aria-labelledby="profile-tab">
										<div class="bootstrap-tab-text-grids">
											<div class="bootstrap-tab-text-grid">
												<div class="bootstrap-tab-text-grid-left">
													<img src="/images/4.png" alt=" " class="img-responsive" />
												</div>
												<div class="bootstrap-tab-text-grid-right">
													<ul>
														<li><a href="#">Admin</a></li>
														<li><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>Reply</a></li>
													</ul>
													<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
														suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
														vel eum iure reprehenderit.</p>
												</div>
												<div class="clearfix"> </div>
											</div>
											<div class="bootstrap-tab-text-grid">
												<div class="bootstrap-tab-text-grid-left">
													<img src="/images/5.png" alt=" " class="img-responsive" />
												</div>
												<div class="bootstrap-tab-text-grid-right">
													<ul>
														<li><a href="#">Admin</a></li>
														<li><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>Reply</a></li>
													</ul>
													<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
														suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
														vel eum iure reprehenderit.</p>
												</div>
												<div class="clearfix"> </div>
											</div>
											<div class="add-review">
												<h4>add a review</h4>
												<form>
													<input type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="">
													<input type="email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="">
													<input type="text" value="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}" required="">
													<textarea type="text"  onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
													<input type="submit" value="Send" >
												</form>
											</div>
										</div>
									</div>
									<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="dropdown1" aria-labelledby="dropdown1-tab">
										<p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
									</div>
									<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="dropdown2" aria-labelledby="dropdown2-tab">
										<p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		<!-- //single -->
	</div>
</template>

<script>
	// import '../assets/css/flexslider.css';
	export default {
		name:'detail',
		props:{},
		data(){
			return{
				// xing:xing
				data:{
					
				}
			}
		},
		components:{},
		 mounted(){
			 console.log(1)
			 this.$axios({
				 
				 // url:'/api/list/'+this.$route.query.collectionName + '/'+ this.$route.params.id
				 url:'/api/list/'+this.$route.query.collectionName + '/' + this.$route.params.id
			 }).then(
			 
				res=>{
					this.data=res.data;
					this.data._id= this.$route.params.id;
					}
				
			 )
			  window.scrollTo(0,0);
		 },
		 methods:{
		 },
		 
		 updated() {}
		 
	}
</script>

<style>
	.img-responsive{
		width: 100%;
	}
	.lala{
		width: 100% !important;
	}
	/* .products-left{
		width: 100% !important;
	} */
	
	.thumb-image{
		height: 300px;
		width: 110%;
	}
	.thumb-image img{
		width: 86%;
		height: 100%;
		
	}
	.xiao{
		 width:95%;
		 margin-top: 5px;
	}
	.listul{
		width:100%;
		/* border: 1px solid #000; */
		float: left;
	}
	.xiao img{
		width: 100%;
		height: 100%;
	}
	.xiao li{
		float: left;
		width: 33.3%;
		list-style: none;
		/* border: 1px solid #000; */
		
	}
	/*-- single --*/
	.single-right-left h3{
		text-transform:capitalize;
		font-size:2em;
		color:#212121;
		margin:0;
	}
	.single-right-left h4{
		color:#D8703F;
		font-size:1.5em;
		margin:.5em 0 1em;
	}
	.description{
		margin:2em 0;
	}
	.description h5{
		color:#212121;
		font-size:1em;
		margin:0;
	}
	.description p{
		font-size:14px;
		color:#999;
		line-height:1.8em;
		margin:0.5em 0 0;
	}
	.color-quality-left{
		float:left;
	}
	.color-quality-left h5,.color-quality-right h5,.occasional h5{
		text-transform:uppercase;
		font-size:1em;
		color:#212121;
		margin:0 0 1em;
	}
	.color-quality-left ul li{
		display:inline-block;
		margin-right:.5em;
	}
	.color-quality-left ul li a{
		font-size:14px;
		color:#999;
		text-decoration:none;
	}
	.color-quality-left ul li a span{
		width: 15px;
	    height: 15px;
	    display: block;
	    background: #ff0000;
	    margin: 0 auto .5em;
	}
	.color-quality-left ul li a.brown span{
	    background: #00008c;
	}
	.color-quality-left ul li a.purple span{
	    background: #840084;
	}
	.color-quality-left ul li a.gray span{
	    background: #ff00ff;
	}
	.color-quality-right{
		float:right;
	}
	.occasional{
		margin:2em 0;
	}
	label.radio {
	    font-size: 14px;
	    font-weight: 500;
	    color: #999;
	    padding-left: 20px;
	    margin: 0;
	}
	.radio i{
	    position: absolute;
	    top: 5px;
	    left: 0;
	    display: block;
	    width: 10px;
	    height: 10px;
	    outline: none;
	    background:#D8703F;
	    border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
	}
	.radio input + i:after {
	    content: '';
	    top: 2px;
	    left: 2px;
	    width: 6px;
	    height: 6px;
	    border-radius: 50%;
	    background-color: #fff !important;
	}
	.colr {
	    float: left;
	    margin-right: 1em;
	}
	.social-left{
		float:left;
	}
	.social-right{
		float:left;
		margin-left:2em;
	}
	.social-left p{
		font-size:14px;
		color:#999;
		margin:0;
	}
	.social{
		margin: 2em 0 0;
	    padding: 1em 0;
	    border-top: 1px solid #DFDFDF;
		border-bottom: 1px solid #DFDFDF;
	}
	.bootstrap-tab {
	    margin: 5em 0 0;
	}
	.bootstrap-tab-text p{
		font-size:14px;
		color:#999;
		line-height:1.8em;
	}
	.bootstrap-tab-text h5,.add-review h4{
		text-transform:uppercase;
		font-size:1.2em;
		color:#212121;
		margin:2em 0;
	}
	.bootstrap-tab-text p span{
		display:block;
		margin:2em 0 0;
	}
	.bootstrap-tab ul li a {
	    font-size: 1em;
	    color: #999;
	}
	.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {
	    background-color: #D8703F;
	}
	.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
	    color: #d8703f !important;
	}
	.bootstrap-tab-text-grid-left{
		float:left;
		width:20%;
	}
	.bootstrap-tab-text-grid-right{
		float:right;
		width:75%;
	}
	.bootstrap-tab-text-grid-right ul li{
		display:inline-block;
	}
	.bootstrap-tab-text-grid-right ul li:nth-child(2){
		float:right;
	}
	.bootstrap-tab-text-grid-right ul li a{
		font-size:1em;
		color:#D8703F;
		text-transform:uppercase;
		text-decoration:none;
	}
	.bootstrap-tab-text-grid-right ul li a:hover{
		color: #212121;
	}
	.bootstrap-tab-text-grid-right ul li a span{
		left:-1em;
	}
	.bootstrap-tab-text-grids{
		margin:3em 0 0 5em;
	}
	.bootstrap-tab-text-grid-right p{
		margin:2em 0 0;
		color:#999;
		font-size:14px;
		line-height:1.8em;
	}
	.bootstrap-tab-text-grid:nth-child(2){
		margin:3em 0 0;
	}
	.add-review form{
		margin:2em 0 0;
	}
	.add-review input[type="text"],.add-review input[type="email"],.add-review textarea{
		outline:none;
		padding:10px;
		background:#f5f5f5;
		border:1px solid #D2D2D2;
		width:48.6%;
		font-size:14px;
		color:#212121;
	}
	.add-review input[type="email"]{
		margin-left:1em;
	}
	.add-review textarea{
		width:100% !important;
		min-height:150px;
		margin-bottom:.8em;
	}
	.add-review input[type="text"]:nth-child(3){
		width:100%;
		margin:1em 0;
	}
	.add-review input[type="submit"]{
		outline:none;
		padding:10px 0;
		background:#ffc229;
		border:none;
		width:30%;
		font-size:1em;
		color:#fff;
	}
	.add-review input[type="submit"]:hover{
		background: #D8703F;
	}
	.single-related-products{
	    background: #F7F7F9;
	}
	.header-grid-left ul li.active,.header-grid-left ul li.active a{
		color:#d8703f;
	}
	/*-- Ratings --*/
	.rating1 {
	    direction:ltr;
	}
	.starRating:not(old) {
	    display: inline-block;
	    height: 18px;
	    width:100px;
	    overflow: hidden;
	}
	
	.starRating:not(old) > input{
	  margin-right :-26%;
	  opacity      : 0;
	}
	
	.starRating:not(old) > label {
	    float: right;
	    background: url(/images/1.png);
	    background-size: contain;
	    margin-right: 2px;
	}
	
	.starRating:not(old) > label:before{
	  content         : '';
	  display         : block;
	  width           : 18px;
	  height          : 18px;
	  background      : url(/images/2.png);
	  background-size : contain;
	  opacity         : 0;
	  transition      : opacity 0.2s linear;
	}
	
	.starRating:not(old) > label:hover:before,
	.starRating:not(old) > label:hover ~ label:before,
	.starRating:not(:hover) > :checked ~ label:before{
	  opacity : 1;
	}
	/*-- //Ratings --*/
	/*-- //single --*/
	
	
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
		padding:2em;
		background:#F7F7F9;
	} */
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
</style>
