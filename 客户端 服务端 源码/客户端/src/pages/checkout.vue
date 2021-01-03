<template>
	<div class="check-out">
		<div class="breadcrumbs">
				<div class="container">
					<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
						<li><a href="home.vue"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>首页</a></li>
						<li class="active">结账页面</li>
					</ol>
				</div>
			</div>
		<!-- //breadcrumbs -->
		<!-- checkout -->
			<div class="checkout">
				<div class="container">
					<h3 style="position: relative" class="animated wow slideInLeft" data-wow-delay=".5s">你的购物车包含: <span>({{list.length}})种产品</span>
					<button style="position:absolute;right: 0" @click="$store.commit('shop_car/clearList')">清空购物车</button>
					</h3>
					<div class="checkout-right animated wow slideInUp" data-wow-delay=".5s">
						<table class="timetable_sub">
							<thead>
								<tr>
									
									<th>
										<input type="checkbox" />
										全选
									</th>	
									<th>Product</th>
									<th>Quality</th>
									<th>Product Name</th>
									<th>单价</th>
									<th>总价</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tr class="rem1"
							tag="tr"
							v-for="(item,index) of list"
							:key="item._id"
							>
								<td class="invert">
									<input type="checkbox" />
								</td>
								
								<td class="invert-image"><a href="##"><img :src="item.url" alt=" " class="img-responsive" /></a></td>
								<td class="invert">
									<!-- <div class="quantity"> 
										<div class="quantity-select">   -->                        
											<!-- <div class="entry value-minus" @click="$store.dispatch('shop_car/changeItem',{num:1,_id:item._id})">&nbsp;</div> -->
											<button @click="$store.dispatch('shop_car/changeItem',{num:1,_id:item._id})">+</button>
											<!-- <div class="entry value"><span>{{item.num}}</span></div> -->
											<!-- <div class="entry value-plus active">&nbsp;</div> -->
											{{item.num}}
											
											<button @click="$store.dispatch('shop_car/changeItem',{num:-1,_id:item._id})">-</button>
										<!-- </div>
									</div> -->
								</td>
								<td class="invert">Black Shoe</td>
								<td class="invert">{{item.dollar}}</td>
								<td class="invert">{{item.num*item.dollar}}</td>
								<td class="invert">
									<div class="rem">
										<!-- <button @click="$store.commit('shop_car/removeItem')">删除</button> -->										删除
									</div>
									
								</td>
							</tr>	
						</table>
					</div>
					<div class="checkout-left">	
						<div class="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
							<!-- <h4>Continue to basket</h4> -->
							<ul>
								<!-- <li>Product1 <i>-</i> <span>$250.00 </span></li>
								<li>Product2 <i>-</i> <span>$290.00 </span></li>
								<li>Product3 <i>-</i> <span>$299.00 </span></li> -->
								<!-- //服务费 -->
								<!-- <li>Total Service Charges <i>-</i> <span>$15.00</span></li> -->
								<li>总计<i>-</i> <span>859</span></li>
							</ul>
						</div>
						<div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
							<router-link tag="a" to="/home" href="##"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>继续购物</router-link>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
			</div>
		<!-- //checkout -->
	</div>
</template>

<script>
	//引入vuex
	//mapState--函数，通讯工具，接管计算属性
	import { mapState } from 'vuex';
	export default{
		name:'check-out',
		props:{},
		data(){
			return{
				
			}
		},
		//计算属性
		//拿到shop_car下边的list数据
		computed:mapState('shop_car',['list']),
		
		mounted(){
			 window.scrollTo(0,1);
			 
		}
		
	}
</script>

<style>
	/*-- checkout --*/
	.checkout h3{
		font-size:1em;
		color:#212121;
		text-transform:uppercase;
		margin:0 0 3em;
	}
	.checkout h3 span{
		color:#d8703f;
	}
	table.timetable_sub {
		width:100%;
		margin:0 auto;
	}
	.timetable_sub thead {
	    background: #004284;
	}
	.timetable_sub th{
	    background:#D8703F;
	    color: #fff !important;
	    text-transform: capitalize;
	    font-size: 13px;
	    border-right:1px solid #A95832;
	}
	.timetable_sub th, .timetable_sub td {
	    text-align: center;
	    padding: 7px;
	    font-size: 14px;
	    color: #212121;
	}
	.timetable_sub td {
		border:1px solid #CDCDCD;
	}
	td.invert-image a img {
	    width:30%;
	    margin: 0 auto;
	}
	.rem{
		position:relative;
	}
	.close1,.close2,.close3 {
	    background: url('/images/close_1.png') no-repeat 0px 0px;
	    cursor: pointer;
	    width: 28px;
	    height: 28px;
	    position: absolute;
	    right: 15px;
	    top: -13px;
	    -webkit-transition: color 0.2s ease-in-out;
	    -moz-transition: color 0.2s ease-in-out;
	    -o-transition: color 0.2s ease-in-out;
	    transition: color 0.2s ease-in-out;
	}
	/*-- quantity-starts --*/
	 .value-minus,
	.value-plus{
	    height: 40px;
	    line-height: 24px;
	    width: 40px;
	    margin-right: 3px;
	    display: inline-block;
	    cursor: pointer;
	    position: relative;
	    font-size: 18px;
	    color: #fff;
	    text-align: center;
	    -webkit-user-select: none;
	    -moz-user-select: none;
		border:1px solid #b2b2b2;
		    vertical-align: bottom;
	}
	.quantity-select .entry.value-minus:before,
	.quantity-select .entry.value-plus:before{
		content: ""; 
		width: 13px;
		height: 2px; 
		background: #000;
		left: 50%;
		margin-left: -7px; 
		top: 50%;
		margin-top: -0.5px;
		position: absolute;
	}
	.quantity-select .entry.value-plus:after{
		content: "";
		height: 13px;
		width: 2px; 
		background: #000;
		left: 50%; 
		margin-left: -1.4px;
	    top: 50%;
	    margin-top: -6.2px;
		position: absolute;
	}
	.value  {
	    cursor: default;
	    width: 40px;
		height:40px;
	    padding: 8px 0px;
	    color: #A9A9A9;
	    line-height: 24px;
	    border: 1px solid #E5E5E5;
	    background-color: #E5E5E5;
	    text-align: center;
	    display: inline-block;
		margin-right: 3px;
	}
	.quantity-select .entry.value-minus:hover,
	 .quantity-select .entry.value-plus:hover{
		background: #E5E5E5;
	}
	
	.quantity-select .entry.value-minus{
	    margin-left: 0;
	}
	/*-- quantity-end --*/
	.checkout-left-basket h4{
		padding: 1em;
	    background:#FFC229;
	    font-size: 1.1em;
	    color: #fff;
	    text-transform: uppercase;
	    text-align: center;
	    margin: 0 0 1em;
	}
	.checkout-left {
	    margin: 2em 0 0;
	}
	.checkout-left-basket ul li{
		list-style-type:none;
		margin-bottom:1em;
		font-size:14px;
		color:#999;
	}
	.checkout-left-basket {
	    float: left;
	    width: 25%;
	}
	.checkout-right-basket{
		float: right;
	    margin: 8em 0 0 0em;
	}
	.checkout-left-basket ul li span {
	    float: right;
	}
	.checkout-left-basket ul li:nth-child(5) {
	    font-size: 1em;
	    color: #212121;
	    font-weight: 600;
	    padding: 1em 0;
	    border-top: 1px solid #DDD;
		border-bottom: 1px solid #DDD;
	    margin: 2em 0 0;
	}
	.checkout-right-basket a{
		padding:10px 30px;
		color:#fff;
		font-size:1em;
		background:#212121;
		text-decoration:none;
	}
	.checkout-right-basket a:hover{
		background:#D8703F;
	}
	.checkout-right-basket a span {
	    left: -.5em;
	    top: 0.1em;
	}
</style>
