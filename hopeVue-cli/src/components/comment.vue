<template>
	<div>
		<div class="aaaa"> 
			{{ title }}
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title:"全局组件注册成功！"
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
	.aaaa{
		width: 150px;
		height: 12px;
		margin: 50px auto;
	}
</style>
