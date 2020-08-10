<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in imageList" :key="index">
				<view class="swiper-item"><image :src="item.src" mode="aspectFit"></image></view>
			</swiper-item>
		</swiper>
		<!-- 介绍 -->
		<view class="introduction margin">
			<text class="intr-title">纯棉短袖t恤女装2020年新款夏季宽松韩版学生ins潮半袖印花上衣服</text>
			<view class="intr-price">
				<text class="price">¥341.6</text>
				<text class="m-price">¥488</text>
				<text class="sale">7折</text>
			</view>
			<view class="bot-row">
				<text>销量：108</text>
				<text>库存：4690</text>
				<text>浏览量：768</text>
			</view>
		</view>
		<!-- 立即分享 -->
		<view class="share-section" @click="shareBtn">
			<text class="back iconfont icon-xingxing">返</text>
			<text class="share-content icon-wenhao iconfont">该商品分享可领49减10红包</text>
			<text class="share-btn">立即分享</text>
			<text class="iconfont icon-right"></text>
		</view>
		<!-- 属性列表 -->
		<view class="c-list">
			<view class="list-row b-b" @click="toggleSpec">
				<text class="row-title">购买类型</text>
				<view class="con">
					<text v-for="(item, index) in seletedList" :key="index">{{ item.name }}</text>
				</view>
				<text class="icon-right iconfont"></text>
			</view>
			<view class="list-row b-b">
				<text class="row-title">优惠券</text>
				<view class="con"><text class="benefit">领取优惠券</text></view>
				<text class="icon-right iconfont"></text>
			</view>
			<view class="list-row b-b">
				<text class="row-title">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购满两件免邮费</text>
				</view>
			</view>
			<view class="list-row ">
				<text class="row-title">服务</text>
				<view class="con">
					<text>7天无理由退货</text>
					<text>假一赔十</text>
				</view>
			</view>
		</view>
		<!-- 评论列表 -->
		<view class="comment">
			<view class="c-header">
				<view class="left">
					评价
					<text>(86)</text>
				</view>
				<view class="right">
					<text>好评率 100%</text>
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="c-content">
				<image src="../../static/product/1.jpg" mode=""></image>
				<view class="content-right">
					<text class="name">追风的少年</text>
					<text class="com">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot-row">
						<view class="">
							购买类型：
							<text>XL 红色</text>
						</view>
						<text>2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 图文详情 -->
		<view class="detail-desc">
			<view class="d-header"><text>图文详情</text></view>
			<view class="desc"><image v-for="(item, index) in desc" :key="index" :src="item.src" mode="widthFix"></image></view>
		</view>

		<!-- 底部操作 -->
		<view class="page-bottom">
			<view class="left">
				<navigator url="../index/index" open-type="switchTab">
					<image src="../../static/icon/tab_home.png" mode=""></image>
					<text>首页</text>
				</navigator>
				<navigator url="../cart/cart" open-type="switchTab">
					<image src="../../static/icon/tab_cart.png" mode=""></image>
					<text>购物车</text>
				</navigator>
				<view>
					<image src="../../static/icon/xin.png" mode=""></image>
					<text>收藏</text>
				</view>
			</view>
			<view class="right">
				<button hover-class="active" type="default" class="action-btn no-border buy-now-btn">立即购买</button>
				<button hover-class="active" type="default" class="action-btn no-border add-cart-btn">加入购物车</button>
			</view>
		</view>

		<!-- 规格选择弹出层 -->
		<view class="layer" :class="specClass" @click="toggleSpec" @touchmove.stop.prevent="stopPrevent">
			<!-- 遮罩 -->
			<view class="mask"></view>
			<view class="content" @click.stop="stopPrevent">
				<!-- 头部 -->
				<view class="layer-title">
					<image src="../../static/product/1.jpg" mode=""></image>
					<view class="title-right">
						<text>¥328.00</text>
						<text>库存:188件</text>
						<text>已选：XS 草木绿</text>
					</view>
				</view>
				<!-- 属性选择 -->
				<view class="attr-list" v-for="(item, index) in specList" :key="index">
					<text>{{ item.name }}</text>
					<view class="item-list">
						<text
							:class="{ seleted: itemChild.selected }"
							@click="select(itemChild.pid, indexChild)"
							v-for="(itemChild, indexChild) in specChildList"
							:key="indexChild"
							v-if="item.id === itemChild.pid"
						>
							{{ itemChild.name }}
						</text>
					</view>
				</view>
				<button type="default" @click="specClass = 'hide'">完成</button>
			</view>
		</view>

		<!-- 分享操作 -->
		<!-- <view class="share-box">
			<view class="mask"></view>
			<view class="share-content">
				<view class="title"><text>分享到</text></view>
				<view class="content">
					<view class="content-item">
						<image src="../../static/temp/share_moment.png" mode=""></image>
						<text>分享到</text>
					</view>
					<view class="content-item">
						<image src="../../static/temp/share_moment.png" mode=""></image>
						<text>分享到</text>
					</view>
					<view class="content-item">
						<image src="../../static/temp/share_moment.png" mode=""></image>
						<text>分享到</text>
					</view>
					<view class="content-item">
						<image src="../../static/temp/share_moment.png" mode=""></image>
						<text>分享到</text>
					</view>
				</view>
				<button type="default">取消</button>
			</view>
		</view> -->
		<Share ref="share" :shareList="shareList"></Share>
	</view>
</template>
-

<script>
import Share from './../../components/share.vue';
export default {
	components: {
		Share
	},
	data() {
		return {
			imageList: [
				{
					src: '/static/product/1.jpg'
				},
				{
					src: '/static/product/2.jpg'
				},
				{
					src: '/static/product/3.jpg'
				},
				{
					src: '/static/product/4.jpg'
				},
				{
					src: '/static/product/5.jpg'
				}
			],
			desc: [
				{
					src: '/static/product/6.jpg'
				},
				{
					src: '/static/product/7.jpg'
				},
				{
					src: '/static/product/8.jpg'
				},
				{
					src: '/static/product/9.jpg'
				},
				{
					src: '/static/product/10.jpg'
				},
				{
					src: '/static/product/11.jpg'
				},
				{
					src: '/static/product/12.jpg'
				},
				{
					src: '/static/product/13.jpg'
				}
			],
			specClass: 'none',
			specList: [
				{
					id: 1,
					name: '尺寸'
				},
				{
					id: 2,
					name: '颜色'
				}
			],
			specChildList: [
				{
					id: 1,
					pid: 1,
					name: 'XS'
				},
				{
					id: 2,
					pid: 1,
					name: 'S'
				},
				{
					id: 3,
					pid: 1,
					name: 'M'
				},
				{
					id: 4,
					pid: 1,
					name: 'L'
				},
				{
					id: 5,
					pid: 1,
					name: 'XL'
				},
				{
					id: 6,
					pid: 1,
					name: 'XXL'
				},
				{
					id: 7,
					pid: 2,
					name: '白色'
				},
				{
					id: 8,
					pid: 2,
					name: '珊瑚粉'
				},
				{
					id: 9,
					pid: 2,
					name: '草木绿'
				}
			],
			seletedList: [],
			shareList: []
		};
	},
	async onLoad() {
		// 默认选中第一条属性
		this.specList.forEach(item => {
			for (let itemChild of this.specChildList) {
				if (item.id === itemChild.pid) {
					this.$set(itemChild, 'selected', true);
					this.seletedList.push(itemChild);
					break;
				}
			}
		});
		this.shareList = await this.$api.json('shareList');
		console.log(this.shareList)
	},
	methods: {
		// 属性选择弹窗
		toggleSpec() {
			if (this.specClass === 'show') {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			} else if (this.specClass === 'none') {
				this.specClass = 'show';
			}
		},
		// 属性选择
		select(pid, index) {
			let list = this.specChildList;
			list.forEach(item => {
				if (pid === item.pid) {
					this.$set(item, 'selected', false);
				}
			});
			this.$set(list[index], 'selected', true);
			this.seletedList = [];
			list.forEach(item => {
				if (item.selected === true) {
					this.seletedList.push(item);
				}
			});
		},
		stopPrevent() {},
		// 分享事件按钮
		async shareBtn() {
			this.$refs.share.toggleShow();
		}
	}
};
</script>

<style lang="scss">
@import './product.scss';
</style>
