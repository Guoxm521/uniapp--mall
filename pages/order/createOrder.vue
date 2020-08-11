<template>
	<view>
		<view class="user-info-box">
			<text class="iconfont icon-dizhi"></text>
			<view class="cen">
				<view class="top">
					<text>许小星</text>
					<text>15712364568</text>
				</view>
				<text class="address">江西省南昌市高新区紫晶国际广场</text>
			</view>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="border">
		</view>
		<!-- 商品信息栏 -->
		<view class="box2">
			<text class="shop">西城小店铺</text>
			<view class="goodsdetail">
				<image src="../../static/product/1.jpg" mode=""></image>
				<view class="right">
					<text>古黛妃 短袖t恤女夏装2019新款</text>
					<text>春装款 L</text>
					<view class="price">
						<text>¥17.8</text>
						<text>×1</text>
					</view>
				</view>
			</view>
			<view class="goodsdetail">
				<image src="../../static/product/1.jpg" mode=""></image>
				<view class="right">
					<text>古黛妃 短袖t恤女夏装2019新款</text>
					<text>春装款 L</text>
					<view class="price">
						<text>¥17.8</text>
						<text>×1</text>
					</view>
				</view>
			</view>
		</view>
		<view class="border"></view>
		<view class="list">
			<view class="list-cell">
				<image src="../../static/quan.png" mode=""></image>
				<text class="title">优惠券</text>
				<text class="right">选择优惠券</text>
			</view>
			<view class="list-cell">
				<image src="../../static/jian.png" mode=""></image>
				<text class="title">商家促销</text>
				<text>暂无优惠券</text>
			</view>
			<view class="border">
			</view>
			<view class="list-cell">
				<text class="title">商品金额</text>
				<text style="color: #303133;">¥ 179.88</text>
			</view>
			<view class="list-cell">
				<text class="title">优惠金额</text>
				<text style="color: #FA436A;">-¥ 35.55</text>
			</view>
			<view class="list-cell">
				<text class="title">运费</text>
				<text style="color: #303133;">免运费</text>
			</view>
			<view class="list-cell">
				<text class="title">备注</text>
				<input class="desc" type="text" value="" placeholder="请填写备注信息"/>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="page-bottom">
			<view class="left">
				<text>实付款：</text>
				<text>¥2589</text>
			</view>
			<button type="default" @click="pay">提交订单</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		pay() {
			uni.navigateTo({
				url:"../money/pay"
			})
		}
	}
};
</script>

<style lang="scss">
@import 'index.scss';
</style>
