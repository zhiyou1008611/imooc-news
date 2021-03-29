<template>
	<swiper class="home-swiper" :current="current" @change="change">
		<swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item">
			<list-item :list="listCatchData[index]" :load="load[index]" @loadMore="loadMore"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
import listItem from './list-item.vue';
export default {
	components: {
		listItem
	},
	props: {
		tab: {
			type: Array,
			default() {
				return [];
			}
		},
		tabCurrent: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			current: this.tabCurrent,
			list: [],
			listCatchData: {},
			load: {},
			pageSize: 10
		};
	},
	watch: {
		tabCurrent(newVal) {
			this.current = newVal;
		},
		tab(newVal) {
			if (newVal.length == 0) return;
			this.getList(0);
		}
	},
	created() {
		// this.getList(0);
	},
	methods: {
		change(e) {
			const { current } = e.detail;
			this.$emit('change', current);
			if (!this.listCatchData[current] || this.listCatchData[current].length === 0) {
				this.getList(current);
			}
		},
		getList(current) {
			if (!this.load[current]) {
				this.load[current] = {
					page: 1,
					loading: 'loading'
				};
			}
			this.$api
				.get_list({
					name: this.tab[current].name,
					page: this.load[current].page,
					pageSize: this.pageSize
				})
				.then(res => {
					const { data } = res;
					console.log(data);
					if (data.length === 0) {
						let oldLoad = {};
						oldLoad.page = this.load[current].page;
						oldLoad.loading = 'noMore';
						this.$set(this.load, current, oldLoad);
						this.$forceUpdate();
						return;
					}
					let oldList = this.listCatchData[current] || [];
					oldList.push(...data);
					this.$set(this.listCatchData, current, oldList);
				});
		},
		loadMore() {
			if (this.load[this.current].loading === 'noMore') return;
			this.load[this.current].page++;
			this.getList(this.current);
		}
	}
};
</script>

<style lang="scss">
.home-swiper {
	height: 100%;
	.swiper-item {
		height: 100%;
		overflow: hidden;
		.list-scroll {
			height: 100%;
		}
	}
}
</style>
