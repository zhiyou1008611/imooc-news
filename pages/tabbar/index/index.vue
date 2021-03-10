<template>
	<view class="content">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<view class="" v-for="item in 50">
			{{item}}
		</view>
	</view>
</template>

<script>
import navbar from '../../../components/navbar/navbar.vue';
export default {
	components: { navbar },
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss"></style>
