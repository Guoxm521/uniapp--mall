<template>
	<view>
		<view class="price-box">
			<text>支付金额</text>
			<text>¥38.88</text>
		</view>
		<view class="type">
			<view class="type-item" @click="changePayType(1)">
				<image src="../../static/wechat.png" mode=""></image>
				<view class="title">
					<text>微信支付</text>
					<text class="tip">推荐使用微信支付</text>
				</view>
				<label class="radio"><radio :checked="type === 1" :color="color" value="" /></label>
			</view>
			<view class="type-item" @click="changePayType(2)">
				<image src="../../static/alipay.png" mode=""></image>
				<view class="title"><text>支付宝支付</text></view>
				<label class="radio"><radio :color="color" :checked="type === 2" value="" /></label>
			</view>
			<view class="type-item" @click="changePayType(3)">
				<image src="../../static/money.png" mode=""></image>
				<view class="title">
					<text>预存款支付</text>
					<text class="tip">可用余额 ¥198.5</text>
				</view>
				<label class="radio"><radio :checked="type === 3" :color="color" value="" /></label>
			</view>
		</view>
		<view class="btn"><button type="default" @click="confirmPay">确认支付</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			color: '#FA436A',
			type: 1
		};
	},
	methods: {
		changePayType(index) {
			this.type = index;
		},
		confirmPay(){
			uni.navigateTo({
				url:"./paySuccess?type="+this.type
			})
		}
	}
};
</script>

<style lang="less">
.price-box {
	height: 264rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text {
		line-height: 1.8;
		&:first-child {
			font-size: 28rpx;
			color: #909399;
		}
		&:last-child {
			font-size: 50rpx;
			color: #303133;
		}
	}
}
.type {
	.type-item {
		display: flex;
		padding: 20rpx 60rpx;
		align-items: center;
		height: 140rpx;

		&:not(:last-child) {
			border-bottom: 1rpx solid #eeeeee;
		}
		image {
			width: 52rpx;
			height: 52rpx;
		}
		.title {
			display: flex;
			flex-direction: column;
			flex: 1;
			margin-left: 40rpx;
			text {
				font-size: 32rpx;
				color: #303133;
				line-height: 1.8;
			}
			.tip {
				font-size: 24rpx;
				color: #909399;
			}
		}
	}
}
.btn {
	margin: 0 60rpx;

	button {
		height: 80rpx;
		margin-top: 80rpx;
		background-color: #fa436a;
		color: #ffffff;
		line-height: 80rpx;
	}
}
</style>
