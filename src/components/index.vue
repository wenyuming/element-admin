<template>
	<div class="page">
		<div class="top">
			
		</div>
		<div class="left">
			
		</div>
		<div class="main">
			<router-view/>
		</div>
		
	</div>
</template>
<script>
	export default {
		name: 'homeVue',
		data () {
			return {
				height: 0
			}
		},
		methods: {

		},
		mounted () {
		}
	}
</script>
<style scoped>
	.page {
		position: relative;
	}
	.top {
		position: absolute;
		z-index: 2;
		width: 100%;
		top: 0;
		left: 0;
		height: 50px;
		line-height: 50px;
		background-color: green;
	}
	.left {
		width: 10%;
		height: 100%;
		position: absolute;
		z-index: 1;
		top:0;
		left: 0;
		background-color: blue;
	}
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
		padding-top: 50px;
		padding-left: 10%;
	}
</style>