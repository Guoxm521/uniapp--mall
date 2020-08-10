<script>
	export default {
		
	}
</script>


<style lang="scss">
	/*每个页面公共css */
	@font-face {
		font-family: iconfont;
		font-weight: normal;
		font-style: normal;
		src: url('static/iconfont.ttf') format('truetype')
	}

	.iconfont {
		font-family: 'iconfont' !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-right:before {
		content: '\e670';
	}
	.icon-credits:before {
		content: '\e639';
	}
	.icon-dingdan:before {
		content: '\e8ae';
	}
	.icon-daifu:before {
		content: '\e8b2';
	}
	.icon-shouhuo:before {
		content: '\e8bf';
	}
	.icon-tuikuan:before {
		content: '\e8ba';
	}
	.icon-time:before {
		content: '\e638';
	}
	
	.icon-qianbao::before {
		content: '\e63a';
	}
	.icon-dizhi::before {
		content: '\e647';
	}
	.icon-fenxiang::before {
		content: '\e642';
	}
	.icon-shaidan::before {
		content: '\e636';
	}
	.icon-shoucang::before {
		content: '\e66b';
	}
	.icon-shezhi::before {
		content: '\e643';
	}
	.icon-xingxing::before {
		content: '\e66b';
	}
	.icon-wenhao::after {
		content: "\e666";
	}
	
	.icon-all::after {
		content: "\e660";
	}
		
	.icon-clear::after {
		content: "\e65d";
	}
	// 商品标题格式的统一设置
	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}
		view,
		scroll-view,
		swiper,
		swiper-item,
		cover-view,
		cover-image,
		icon,
		text,
		rich-text,
		progress,
		button,
		checkbox,
		form,
		input,
		label,
		radio,
		slider,
		switch,
		textarea,
		navigator,
		audio,
		camera,
		image,
		video {
			box-sizing: border-box;
		}
		.b-b {
			border-bottom: 2rpx solid #eeeeee;
		}
</style>
