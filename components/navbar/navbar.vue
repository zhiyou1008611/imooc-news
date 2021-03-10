<template>
	<view class="navbar">
		<view class="navbar-serach">
			<view class="navbar-serach_icon"></view>
			<view class="navbar-serach_text"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	width: 100%;
	height: 45px;
	background-color: $mk-base-color;
	box-sizing: border-box;
	.navbar-serach {
		display: flex;
		align-items: center;
		width: 100%;
		height: 30px;
		padding: 0 10px;
		border-radius: 15px;
		background-color: #ffffff;
		.navbar-serach_icon {
			width: 10px;
			height: 10px;
			border: 1px solid red;
			margin-right: 10px;
		}
		.navbar-serach_text {
			font-size: 12px;
			color: #999999;
		}
	}
}
</style>
