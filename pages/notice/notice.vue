<template>
	<view class="container">
		<view class="information">
			<text class="time">11:30</text>
			<view class="content">
				<text class="title">新品上市，全场满199减50</text>
				<image class="image" src="../../static/temp/banner1.jpg" mode=""></image>
				<text class="desc">虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。</text>
				<view class="detail">
					查看详情
					<text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
		<view class="information">
			<text class="time">11:30</text>
			<view class="content">
				<text class="title">新品上市，全场满199减50</text>
				<image class="image" src="../../static/temp/banner1.jpg" mode=""></image>
				<text class="desc">虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。</text>
				<view class="detail">
					查看详情
					<text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}
	.information {
		margin: 0 25rpx;
		.time {
			font-size: 26rpx;
			display: block;
			text-align: center;
			margin: 26rpx 0;
		}
		.content {
			width: 100%;
			padding: 0 24rpx;
			background-color: #FFFFFF;
			.title {
				font-size: 32rpx;
				display: block;
				height: 90rpx;
				line-height: 90rpx;
			}
			.image {
				width: 100%;
				height: 260rpx;
			}
			.desc {
				display: block;
				font-size: 28rpx;
				color: #606266;
				margin-bottom: 10rpx;
			}
			.detail {
				font-size: 24rpx;
				height: 80rpx;
				line-height: 80rpx;
				border-top: 2rpx solid #F1F1F1;
				color: #606266;
				text {
					float: right;
					font-size: 40rpx;
				}
			}
		}
	}
</style>
