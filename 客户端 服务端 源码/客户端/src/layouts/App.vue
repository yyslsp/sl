<template>
	<div class="app">
		<Loading v-show="$store.state.bLoading"/>
		<!-- v-show'=root.bNav' 控制顶部和底部的显示隐藏 -->
		<Header v-show="$store.state.bNav"/>
		<router-view/>
		
		<Footer v-show="bFoot"/>
		
	</div>
</template>

<script>
	import Header from './header.vue'
	import Footer from './footer.vue'
	import Loading from '../components/loading.vue'
	import {mapState} from 'vuex'
	import {UPDATE_NAV,UPDATE_FOOT} from '../store/types.js'
	
	
	
	export default{
		computed:mapState(['bFoot']),
		components:{
			Header,
			Footer,
			Loading
		},
		watch:{
			//路由监听-目的是处理顶部底部的显示
			$route:{//路由观测
			  handler(nextvalue){
				  let path = nextvalue.path;
				  console.log('路由跳转$root变化了');
				  if(/home|jiaju|fenlei|detail/.test(path)){
					  // this.$root.bNav=this.$root.bFoot=true;
					this.$store.commit('UPDATE_NAV',true)
					this.$store.commit('UPDATE_FOOT',true)
				  }
				  if(/reg|login|user/.test(path)){
				  	// this.$root.bNav=this.$root.bFoot=true;
					this.$store.commit('UPDATE_NAV',false)
					this.$store.commit('UPDATE_FOOT',false)
				  }
				  //上面隐藏 下面显示 pc端用不到
				 //  if(/user/.tese(path)){
				 //  	this.$root.bNav=false;
					// this.$root.bFoot=true;
				 //  }
			  },
			  immediate:true
			}
			
		}
		
		
		
	};
</script>

<style>
</style>
