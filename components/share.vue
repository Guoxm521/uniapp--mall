<template>
	<view class="share-box" :class="isShow">
		<view class="mask" @click="toggleShow"></view>
		<view class="share-content">
			<view class="title"><text>分享到</text></view>
			<view class="content">
				<view @click="shareToFriend(item.text)" class="content-item" v-for="(item, index) in shareList" :key="index">
					<image :src="item.icon" mode=""></image>
					<text>{{ item.text }}</text>
				</view>
			</view>
			<button type="default" @click="toggleShow">取消</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isShow: 'none'
		};
	},
	props: {
		shareList: {
			type: Array
		}
	},
	methods: {
		toggleShow() {
			console.log(22);
			if (this.isShow === 'none') {
				this.isShow = 'show';
			} else if (this.isShow === 'show') {
				this.isShow = 'hide';
				setTimeout(() => {
					this.isShow = 'none';
				}, 200);
			}
		},
		shareToFriend(text) {
			this.isShow = 'hide';
			this.$api.msg({
				title:"分享到"+text,
				icon:'success'
			})
		}
	}
};
</script>

<style lang="scss">
.share-box {
	position: fixed;
	bottom: 0;
	z-index: 5;
	&.show {
		.share-content {
			animation: showContent 0.2s linear both;
		}
		.mask {
			animation: showMask 0.2s linear both;
		}
	}
	&.hide {
		.share-content {
			animation: hideContent 0.2s linear both;
		}
		.mask {
			animation: hideMask 0.2s linear both;
		}
	}
	&.none {
		display: none;
	}
	.mask {
		position: fixed;
		padding: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.share-content {
		position: fixed;
		width: 100%;
		z-index: 25;
		bottom: 0;
		background-color: #ffffff;
		.title {
			font-size: 30rpx;
			color: #000000;
			display: flex;
			justify-content: center;
			height: 110rpx;
			align-items: center;
			position: relative;
			z-index: 1;
			text {
				position: relative;
				z-index: 2;
				padding: 0 30rpx;
				display: block;
				background-color: #ffffff;
			}
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
				width: 400rpx;
				height: 0;
				border-bottom: 5rpx solid #ccc;
				z-index: -5;
			}
		}
		.content {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.content-item {
				width: 33.33%;
				font-size: 28rpx;
				color: #606266;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 25rpx 0;
				image {
					width: 80rpx;
					height: 80rpx;
					margin-bottom: 15rpx;
				}
			}
		}
		button {
			font-size: 30rpx;
			height: 90rpx;
			line-height: 90rpx;
			background-color: #ffffff;
		}
	}
}

@keyframes showContent {
	0% {
		transform: translateY(120%);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes hideContent {
	0% {
		transform: translateY(0%);
	}
	100% {
		transform: translateY(120%);
	}
}
@keyframes showMask {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes hideMask {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>
