<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="navbar-content" :style="{ height: navBarHeight + 'px', width: windowWidth + 'px' }">
				<view class="navbar-serach">
					<view class="navbar-serach_icon">
						<!-- <text class="iconfont icon-search"></text> -->
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-serach_text">uni-app、vue</view>
				</view>
			</view>
		</view>
		<view :style="{ height: statusBarHeight + navBarHeight + 'px' }"></view>
	</view>
</template>

<script>
import uniIcons from '../uni-icons/uni-icons.vue';
export default {
	components: { uniIcons },
	data() {
		return {
			statusBarHeight: 0,
			navBarHeight: 45,
			windowWidth: 375
		};
	},
	created() {
		const info = uni.getSystemInfoSync();
		this.statusBarHeight = info.statusBarHeight;
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		this.navBarHeight = menuButtonInfo.height + 2 * (menuButtonInfo.top - info.statusBarHeight);
		this.windowWidth = menuButtonInfo.left;
		// #endif
	}
};
</script>

<style lang="scss">
@import '../../utils/css/icons.css';
.navbar {
	.navbar-fixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		background-color: $mk-base-color;
		.navbar-content {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 15px;
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
					// width: 10px;
					// height: 10px;
					// border: 1px solid red;
					margin-right: 10px;
				}
				.navbar-serach_text {
					font-size: 12px;
					color: #999999;
				}
			}
		}
	}
}
</style>
