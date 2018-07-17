<template>
	<div>
		<el-button type="primary" @click="login">登录</el-button>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		methods: {
			login () {
				let url = this.config.url + this.config.login
                let v = this
                v.$api.get(url, v.user).then(function(res){
                    
                })
			}
		},
		mouinted () {

		}
	}
</script>