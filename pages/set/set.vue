<template>
	<view class="content">
		<view class="border">
		</view>
		<view class="list-cell" @click="hello" hover-class="hovering" :hover-stay-time="50"  >
			<text class="cell-title">个人资料</text>
			<text class="cell-tips"></text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell" hover-class="hover" :hover-stay-time="50"  >
			<text class="cell-title">收获地址</text>
			<text class="cell-tips"></text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell" hover-class="hover" :hover-stay-time="50"  >
			<text class="cell-title">实名认证</text>
			<text class="cell-tips"></text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="border">
		</view>
		<view class="list-cell" hover-class="hover" :hover-stay-time="50"  >
			<text class="cell-title">消息推送</text>

			<switch checked @change="switch1Change" color="#FA436A" />
		</view>
		<view class="border">
		</view>
		<view class="list-cell" hover-class="hover" :hover-stay-time="50"  >
			<text class="cell-title">清除缓存</text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell" hover-class="hover" :hover-stay-time="50"  >
			<text class="cell-title">关于我们</text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="list-cell" hover-class="hover" :hover-stay-time="50" >
			<text class="cell-title">检查更新</text>
			<text class="cell-tips">当前版本 1.0.3</text>
			<text class="iconfont icon-right icon-more"></text>
		</view>
		<view class="logout">
			退出登录
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
			switch1Change(e) {
				const confirm = e.detail.value ? '打开了' : '关闭了'
				this.$api.msg(`${confirm}` + '消息推送')
			},
			hello() {
				this.$api.msg({
					title: "哎呦，别点",
				})
			}
		}
	}
</script>

<style lang="scss" >
	page {
		background-color: #F1F1F1;
	}


	.content {
		.list-cell {

			height: 100rpx;
			padding: 10rpx 25rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			align-content: space-around;
			position: relative;
			border-bottom: 3rpx solid #F1F1F1;
			background-color: #FFFFFF;
			&.hover {
				background: #fafafa;
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

	.border {
		width: 100%;
		height: 15rpx;
		background-color: #F1F1F1;
	}

	.logout {
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		margin-top: 42rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 32rpx;
		color: #FA436A;
	}

	switch {
		transform: translateX(16rpx) scale(.84);
	}
</style>
