<template>
	<list-scroll class="list-scroll" @loadMore="loadMore">
		<list-card :listContent="item" v-for="(item, index) in listItem" :key="index"></list-card>
		<uni-load-more v-if="listItem.length == 0 || listItem.length > 9" :status="load.loading" iconType="snow"></uni-load-more>
	</list-scroll>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		load: {
			type: Object,
			default() {
				return { loading: 'loading' };
			}
		}
	},
	data() {
		return {
			listItem: this.list,
		};
	},
	watch: {
		list(newVal) {
			this.listItem = newVal;
		},
	},
	created() {
		// console.log(this.Load);
	},
	methods: {
		loadMore() {
			this.$emit('loadMore');
		}
	}
};
</script>

<style lang="scss">
.list-scroll {
	height: 100%;
}
</style>
