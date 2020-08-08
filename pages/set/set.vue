<template>
	<view class="content">
		<view class="border">
		</view>
		<view class="list-cell">
			<text class="cell-title">个人资料</text>
			<text class="cell-tips"></text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell">
			<text class="cell-title">个人资料</text>
			<text class="cell-tips"></text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell">
			<text class="cell-title">个人资料</text>
			<text class="cell-tips"></text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell">
			<text class="cell-title">个人资料</text>
			<text class="cell-tips">当前版本</text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell">
			<text class="cell-title">个人资料</text>
			<text class="cell-tips">当前版本</text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell">
			<text class="cell-title">个人资料</text>
			<text class="cell-tips">当前版本</text>
			<text class="iconfont icon-right icon-more"></text>
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

<style lang="scss" scoped>
	.content {
		.list-cell {
			background-color: #FFFFFF;
			height: 100rpx;
			padding: 10rpx 0;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			align-content: space-around;
			position: relative;
			border-bottom: 3rpx solid #F1F1F1;
			margin: 0 25rpx;

			.cell-icon {
				width: 56rpx;
				font-size: 38rpx;
			}

			.cell-title {
				font-size: 28rpx;
				font-weight: 500;
				flex: 1;
			}

			.cell-tips {
				font-size: 26rpx;
				color: #999999;
			}

			.icon-more {
				margin-left: 15rpx;
			}
		}
	}
	.border {
		width: 100%;
		height: 15rpx;
		background-color: #F1F1F1;
	}
</style>
