<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<view class="home-list">
			<list :tab="tabList" :tabCurrent="tabCurrent" @change="change">
		</list></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			tabList: [],
			tabIndex: 0,
			tabCurrent:0
		};
	},
	onLoad() {
		this.getLabel();
	},
	methods: {
		getLabel() {
			this.$api.get_label({ name: 'get_label' }).then(res => {
				this.tabList = res.data;
				this.tabList.unshift({name:"全部"})
			});
		},
		tab(data) {
			this.tabCurrent=data.index;
		},
		change(current) {
			this.tabIndex = current;
			this.tabCurrent = current
		}
	}
};
</script>

<style lang="scss">
page {
	display: flex;
	height: 100%;
}
.home {
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	.home-list {
		flex: 1;
		box-sizing: border-box;
	}
}
</style>
