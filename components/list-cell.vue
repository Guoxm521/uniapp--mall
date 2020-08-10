<template>
	<view class="content">
		<view class="list-cell"  @click="eventClick" hover-class="hover" :hover-stay-time="50">
			<text class="iconfont cell-icon" :class="cellIcon":style="[{color:cellIconColor}]"></text>
			<text class="cell-title">{{title}}</text>
			<text class="cell-tips" >{{cellTip}}</text>
			<text  class="iconfont icon-right icon-more"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			title: {
				type: String,
				default: "标题"
			},
			cellIcon: String,
			cellTip: String,
			cellIconColor: String
		},
		methods: {
			eventClick() {
				this.$emit('eventClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.list-cell {
			background-color: #FFFFFF;
			height: 100rpx;
			padding: 10rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			align-content: space-around;
			position: relative;
			border-bottom: 3rpx solid #F1F1F1;
			&.hover {
				background:#fafafa;
			}

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
</style>
