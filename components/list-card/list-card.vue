<template>
	<view>
		<!-- 图文 -->
		<view v-if="mode=='base'" class="listcard">
			<view class="listcard-image"><image src="../../static/logo.png" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title"><text>uni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-app</text></view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label"><view class="listcard-content_des-label-item">前端</view></view>
					<view class="listcard-content_des-browe">120浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图 -->
		<view v-if="mode=='column'" class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content_title"><text>uni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-app</text></view>
				<view class="listcard-image">
					<view class="listcard-image_item" v-for="item in 3"><image src="../../static/logo.png" mode="aspectFill"></image></view>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label"><view class="listcard-content_des-label-item">前端</view></view>
					<view class="listcard-content_des-browe">120浏览</view>
				</view>
			</view>
		</view>
		<!-- 大图 -->
		<view v-if="mode=='image'" class="listcard mode-image">
			<view class="listcard-image"><image src="../../static/logo.png" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title"><text>uni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-app</text></view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label"><view class="listcard-content_des-label-item">前端</view></view>
					<view class="listcard-content_des-browe">120浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		mode: {
			type: String,
			default: 'base'
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.listcard {
	display: flex;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
	.listcard-image {
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		border-radius: 5px;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.listcard-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10px;
		width: 100%;
		.listcard-content_title {
			font-size: 14px;
			color: #333333;
			font-weight: 400;
			line-height: 1.2;
			text {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		.listcard-content_des {
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			.listcard-content_des-label {
				display: flex;
				.listcard-content_des-label-item {
					padding: 0 5px;
					margin-right: 5px;
					color: $mk-base-color;
					border-radius: 15px;
					border: 1px $mk-base-color solid;
				}
			}
			.listcard-content_des-browe {
				color: #999999;
				line-height: 1.5;
			}
		}
	}
	&.mode-column {
		.listcard-content {
			width: 100%;
			padding-left: 0;
		}
		.listcard-image {
			display: flex;
			margin-top: 10px;
			width: 100%;
			height: 70px;
			.listcard-image_item {
				margin-left: 10px;
				width: 100%;
				border-radius: 5px;
				overflow: hidden;
				&:first-child {
					margin-left: 0;
				}
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.listcard-content_des {
			margin-top: 10px;
		}
	}
	&.mode-image {
		flex-direction: column;
		.listcard-content {
			padding-left: 0;
			margin-top: 10px;
			.listcard-content_des {
				display: flex;
				align-items: center;
				margin-top: 10px;
			}
		}
		.listcard-image {
			width: 100%;
			height: 100px;
		}
	}
}
</style>
