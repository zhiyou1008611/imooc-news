<template>
	<view class="icons" @click.stop="likeTap"><uni-icons size="20" color="#f07373" :type="like ? 'heart-filled' : 'heart'"></uni-icons></view>
</template>

<script>
export default {
	props: {
		listContent: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			like: false
		};
	},
	watch:{
		listContent(newVal){
			console.log(newVal);
			this.like = newVal.is_like
		}
	},
	created() {
		this.like = this.listContent.is_like
	},
	methods: {
		likeTap() {
			this.like = !this.like;
			this.updateLikes();
		},
		updateLikes() {
			this.$api
				.update_like({
					user_id: '60408d0d2149ad0001288a55',
					article_id: this.listContent._id
				})
				.then(res => {
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					console.log(res);
				})
				.catch(err=>{
					uni.hideLoading()
				})
		}
	}
};
</script>

<style lang="scss">
.icons {
	position: absolute;
	top: 0px;
	right: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
}
</style>
