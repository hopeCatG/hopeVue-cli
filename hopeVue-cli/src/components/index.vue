<template>
	<div>
		<div class="aaa">{{ title }}</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title:"路由也可以啦！"
			}
		},
		mounted () {
			this.name()
			
		},
		methods: {
			name() {
				console.log('将数据已经装载到了DOM之上,可以操作DOM')
			}
		}
	}
</script>

<style>
	.aaa{
		width: 130px;
		
		margin: 20px auto;
	}
</style>
