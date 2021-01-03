<template>
	<div class="error-page">
		<p>404</p>
		<p>404</p>
		<p>404</p>
		<p>404</p>
		<p>404</p>
		<button @click="goback">回到主页</button>
	</div>
</template>

<script>
	export default{
		name:'err-page',
		props:{},
		data(){
			return{
				
			}
		},
		methods:{
			goback(){
				this.$router.push('/home')
			}
		}
	}
</script>

<style>
</style>
