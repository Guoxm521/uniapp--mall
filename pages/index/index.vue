<template>
	<view class="container">
		<!-- #ifdef MP -->
		<!-- 仅在某平台存在   -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->
		<!-- 头部轮播图部分 -->
		<view class="carousel-section">
			<!-- 标题栏占位符 -->
			<view class="titleNview-placing">
			</view>
			<!-- 背景颜色 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}">
			</view>
			<swiper class="carousel" :autoplay="false" @change="swiperChange">
				<swiper-item class="carousel-item" v-for="(item,index) in CarouselList" :key="index">
					<image :src="item.src" mode=""></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item">
				<image src="../../static/temp/c1.png" mode=""></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="../../static/temp/c2.png" mode=""></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="../../static/temp/c3.png" mode=""></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="../../static/temp/c4.png" mode=""></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="../../static/temp/c5.png" mode=""></image>
				<text>速食生鲜</text>
			</view>
		</view>
		<!-- ad1 -->
		<view class="ad1">
			<image src="../../static/temp/ad1.jpg" mode=""></image>
		</view>

		<!-- 限时秒杀 -->
		<view class="seckill-section">
			<view class="seckill-title">
				<image src="../../static/temp/secskill-img.jpg" mode=""></image>
				<text class="tip">8点场</text>
				<text class="time">07</text>
				<text class="time">13</text>
				<text class="time">55</text>
				<text class="iconfont icon-right"></text>
			</view>
			<scroll-view scroll-x="true" class="seckill-main-scroll">
				<view class="seckill-main">
					<view class="scroll-item" v-for="(item,index) in goodsList" :key="index">
						<image :src="item.image2" mode=""></image>
						<text class="clamp">{{item.title}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 精品团购 -->
		<view class="f-header">
			<image src="../../static/temp/h1.png" mode=""></image>
			<view class="title-box">
				<text class="title1">精品团购</text>
				<text class="title2">Boutique Group Buying</text>
			</view>
			<text class="iconfont icon-right"></text>
		</view>
		<swiper class="group-swiper" :interval="3000" :duration="1000">
			<swiper-item class="g-swiper-item" v-for="(item,index) in goodsList" :key="index" v-if="index % 2===0">
				<view class="group-item left">
					<image :src="item.image2" mode=""></image>
					<view class="t-box">
						<text class="title clamp">{{item.title}}</text>
						<view class="price-box">
							<text class="price">¥{{item.price}}</text>
							<text class="m-price">¥188</text>
						</view>
						<view class="pro-box">
							<view class="progress-box">
								<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
							</view>
							<text>10人成团</text>
						</view>
					</view>
				</view>
				<view class="group-item right">

					<view class="t-box">
						<text class="title clamp">{{item.title}}</text>
						<view class="price-box">
							<text class="price">¥{{item.price}}</text>
							<text class="m-price">¥188</text>
						</view>
						<view class="pro-box">
							<view class="progress-box">
								<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
							</view>
							<text>10人成团</text>
						</view>
					</view>
					<image :src="goodsList[index+1].image2" mode=""></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 分类精选 -->
		<view class="f-header">
			<image src="../../static/temp/h1.png" mode=""></image>
			<view class="title-box">
				<text class="title1">分类精选</text>
				<text class="title2">Competitive Products For You</text>
			</view>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="hot-floor">
			<view class="hot-floor-img">
				<image src="../../static/temp/spring.jpg" mode=""></image>
			</view>
			<view class="floor-first">
				<scroll-view class="scroll" scroll-x="true">
					<view class="scroll-box">
						<view class="floor-item" v-for="(item,index) in goodsList" :key="index">
							<image :src="item.image2" mode=""></image>
							<text class="title clamp">{{item.title}}</text>
							<text class="price">¥ {{item.price}}</text>
						</view>
						<view class="more">
							<text>查看全部</text>
							<text>More+</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="hot-floor">
			<view class="hot-floor-img">
				<image src="../../static/temp/children.jpg" mode=""></image>
			</view>
			<view class="floor-first">
				<scroll-view class="scroll" scroll-x="true">
					<view class="scroll-box">
						<view class="floor-item" v-for="(item,index) in goodsList" :key="index">
							<image :src="item.image2" mode=""></image>
							<text class="title clamp">{{item.title}}</text>
							<text class="price">¥ {{item.price}}</text>
						</view>
						<view class="more">
							<text>查看全部</text>
							<text>More+</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class="f-header">
			<image src="../../static/temp/h1.png" mode=""></image>
			<view class="title-box">
				<text class="title1">猜你喜欢</text>
				<text class="title2">Competitive Products For You</text>
			</view>
			<text class="iconfont icon-right"></text>
		</view>
		<view class="guess-section">
			<view class="guess-item" v-for="(item,index) in goodsList" :key='index'>
				<image :src="item.image2" mode=""></image>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">¥ {{item.price}}</text>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				// 轮播图列表
				CarouselList: "",
				// 背景颜色
				titleNViewBackground: "",
				// 商品列表
				goodsList: ''
			}
		},
		onLoad() {
			this.getCarouselList()
			this.getGoodsList()
		},
		methods: {
			// 获取轮播图
			async getCarouselList() {
				const CarouselList = await this.$api.json('carouselList')
				this.titleNViewBackground = CarouselList[0].background
				this.CarouselList = CarouselList
			},
			// 轮播图事件
			swiperChange(e) {
				const index = e.detail.current
				this.titleNViewBackground = this.CarouselList[index].background
			},
			// 获取商品列表数据
			async getGoodsList() {
				const goodsList = await this.$api.json('goodsList')
				this.goodsList = goodsList
				console.log(this.goodsList)
			},
			// 点击顶部的按钮事假
			onNavigationBarButtonTap (e) {
				if(e.index === 0) {
					this.$api.msg({
						title:"点击了扫描框"
					})
				}else if(e.index === 1) {
					uni.navigateTo({
						url:'../notice/notice'
					})
				}
			}
		}
	}
</script>

<style lang="scss" >
	@import './index.scss'
</style>
