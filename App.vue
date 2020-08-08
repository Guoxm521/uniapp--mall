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
		src: url('//at.alicdn.com/t/font_1920165_yefj88q7po.ttf') format('truetype')
	}

	.iconfont {
		font-family: 'iconfont' !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-right:before {
		content: '\e65b';
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
