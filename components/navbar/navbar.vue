<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="navbar-content" :class="{search:isSearch}" :style="{ height: navBarHeight + 'px', width: windowWidth + 'px' }" @click.stop="open">
				<!-- 搜索页 -->
				<view class="navbar-content_search-icons" v-if="isSearch">
					<uni-icons type="back" size="20" color="#fff"></uni-icons>
				</view>
				<view v-if="isSearch" class="navbar-serach">
					<input class="navbar-serach_text" type="text" value="" placeholder="请输入搜索内容" />
				</view>
				<!-- 首页 -->
				<view v-else class="navbar-serach">
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
	props:{
		isSearch:{
			type:Boolean,
			default: false
		}
	},
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
	},
	methods:{
		open(){
			if(this.isSearch) return
			uni.navigateTo({
				url: "/pages/home-search/home-search"
			})
		}
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
					font-size: 14px;
					color: #999999;
				}
			}
			&.search{
				padding-left: 0;
				.navbar-content_search-icons{
					margin: 0 10px;
				}
				.navbar-serach {
					border-radius: 5px;
				}
			}
		}
	}
}
</style>
