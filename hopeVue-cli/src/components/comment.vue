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
