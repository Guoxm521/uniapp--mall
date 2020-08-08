<template>
	<view class="content">
		<scroll-view scroll-y="true" class="left-aside">
			<view class="f-item b-b" v-for="(item,index) in flist" :class="{active:item.id === currentId}" :key="index" @click="tabtap(item)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view :scroll-top="tabScrollTop" scroll-y="true" class="right-aside" scroll-with-animation="true" @scroll="asideScroll">
			<view v-for="(item,index) in slist" :key="index" :id="'main-'+item.id">
				<text class="s-title">{{item.name}}</text>
				<view class="t-list">
					<view class="list-item" v-for="(titem,index) in tlist" v-if="titem.pid === item.id" :key="index">
						<image :src="titem.picture" mode=""></image>
						<text class="t-tile">{{titem.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
			}
		},
		onLoad() {
			this.loadData()
		},
		methods: {
			// 获取数据
			async loadData() {
				const list = await this.$api.json('cateList');
				list.forEach(item => {
					if (!item.pid) {
						this.flist.push(item)
					} else if (!item.picture) {
						this.slist.push(item)
					} else {
						this.tlist.push(item)
					}
				})
			},
			// 右边的滚动事件
			asideScroll(e) {
				if (!this.sizeCalcState) {
					this.calcSize()
				}
				const top = e.detail.scrollTop;
				const pagetop = top + 10;
				let tabs = this.slist.filter(item => item.top <= pagetop)
				if (tabs.length > 0) {
					this.currentId = tabs[tabs.length -1].pid;
				}
			},
			// 左边的点击事件
			tabtap(item) {
				if (!this.sizeCalcState) {
					this.calcSize()
				}
				this.currentId = item.id;
				let index = this.slist.findIndex(sitem => sitem.pid === item.id)
				this.tabScrollTop = this.slist[index].top
			},
			calcSize() {
				let h = 0;
				this.slist.forEach(item => {
					let view = uni.createSelectorQuery().select('#main-' + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
