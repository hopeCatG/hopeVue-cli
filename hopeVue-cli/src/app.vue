<template>
	<div>
		<div class="aa">
			<div class="img">
				<img src="../static/images/1.jpg" alt="">
			</div>
			
		</div>
		<div class="bb">
			{{ text }}
		</div>
		<router-view></router-view>
		<comment-vue></comment-vue>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				text:"呔！妖怪！项目给你搭建好了"
			}
		}
	}
</script>

<style>
	.aa{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.img{
		width: 200px;
		height: 200px;
		/* align-content: center; */
	}
	.img img{
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
	.bb{
		width: 220px;
		margin: 15px auto 50px;
	}
</style>
