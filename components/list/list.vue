<template>
	<swiper class="home-swiper" :current="current" @change="change">
		<swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item"><list-item></list-item></swiper-item>
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
			current: this.tabCurrent
		};
	},
	watch: {
		tabCurrent(newVal) {
			this.current = newVal;
		}
	},
	// onLoad 在页面 created 在组件
	created() {
		this.getList();
	},
	methods: {
		change(e) {
			this.$emit('change', e.detail.current);
		},
		getList() {
			this.$api.get_list().then(res => {
				console.log(res);
			});
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
