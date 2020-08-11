<template>
	<view class="">
		<view class="container">
			<image src="../../static/paysucce.png" mode="aspectFit"></image>
			<text>{{type}}成功</text>
			<button type="default" class="order" @click="viewOrder">查看订单</button>
			<button type="default" class="index" @click="backIndex">返回首页</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: ''
		};
	},
	onLoad(option) {
		const temp = option.type;
		switch (temp) {
			case "1":
				this.type = '微信支付';
				break;
			case "2":
				this.type = '支付宝支付';
				break;
			case "3":
				this.type = '钱包支付';
				break;
		}
	},
	methods: {
		viewOrder() {
			uni.navigateTo({
				url: '../order/order'
			});
		},
		backIndex() {
			uni.reLaunch({
				url: '../index/index'
			});
		}
	}
};
</script>

<style lang="scss">
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 60rpx;
}
image {
	width: 160rpx;
	height: 160rpx;
	margin-top: 100rpx;
}
text {
	font-size: 40rpx;
	color: #303313;
	padding-top: 25rpx;
	padding-bottom: 100rpx;
}
button {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 32rpx;
}
.order {
	background-color: #fa436a;
	color: #ffffff;
}
.index {
	margin-top: 40rpx;
}
</style>
