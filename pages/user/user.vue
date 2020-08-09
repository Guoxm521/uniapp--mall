<template>
	<view class="container">
		<view class="user-section">
			<image class="bg" src="../../static/user-bg.jpg" mode=""></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image src="../../static/missing-face.png" mode=""></image>
				</view>
				<view class="info-box">
					<text>游客</text>
				</view>
			</view>
			<view class="vip-box">
				<view class="tit">
					<text class="iconfont icon-credits"></text>
					DCloud会员
				</view>
				<view class="b-btn">
					立即开通
				</view>
				
			</view>
		</view>
		<view class="cover-container">
			<image class="arc" src="../../static/arc.png" mode=""></image>
			<view class="tj-seciton">
				<view class="">
					<text class="num">128.8</text>
					<text>余额</text>
				</view>
				<view class="">
					<text class="num">0</text>
					<text>优惠券</text>
				</view>
				<view class="">
					<text class="num">20</text>
					<text>积分</text>
				</view>
			</view>
			
			<view class="order">
				<view class="">
					<text class="iconfont icon-dingdan"></text>
					<text>全部订单</text>
				</view>
				<view class="">
					<text class="iconfont icon-daifu"></text>
					<text>代付款</text>
				</view>
				<view class="">
					<text class="iconfont icon-shouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="">
					<text class="iconfont icon-tuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>
			
			<view class="history">
				<view class="history-title">
					<text class="iconfont icon-time"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view class="scroll" scroll-x="true" >
					<view class="scroll-box">
						<view class="scroll-item" v-for="(item,index) in historyList" :key="index">
							<image :src="item.image2" mode=""></image>
						</view>
					</view>
				</scroll-view>
			</view>
			
			<!-- 表单项目 -->
			
			<listCell title="我的钱包" cellIconColor="#F8D800" @eventClick="hello" cellIcon="icon-qianbao" cellTip="您的会员还有三天过期"></listCell>
			<listCell title="地址管理" cellIconColor="#0396FF"  @eventClick="hello" cellIcon="icon-dizhi"></listCell>
			<listCell title="分享" cellIconColor="#623AA2" cellIcon="icon-fenxiang" cellTip="邀请好友赢10万大礼"></listCell>
			<listCell title="晒单" cellIconColor="#9708CC" cellIcon="icon-shaidan" cellTip="晒单抢红包"></listCell>
			<listCell title="我的收藏" cellIconColor="#1abc9c" cellIcon="icon-shoucang" ></listCell>
			<listCell title="设置" @eventClick="navToSet" cellIconColor="#e74c3c" cellIcon="icon-shezhi"></listCell>
			
		</view>
	</view>
</template>

<script>
	import listCell from "@/compontents/list-cell";
	export default {
		components:{
			listCell
		},
		data() {
			return {
				historyList:''
			}
		},
		created() {
			this.getHistoryList()
		},
		methods: {
			async getHistoryList() {
				const list = await this.$api.json('goodsList')
				this.historyList = list
				console.log(list)
			},
			hello() {
				this.$api.msg('你好呀')
				uni.switchTab({
					url:'../index/index'
				})
			},
			// 跳转到设置页面
			navToSet() {
				uni.navigateTo({
					url:'../set/set'
				})
			},
			// 监听导航栏上两个按钮的事件
			onNavigationBarButtonTap(e) {
				if(e.index === 0) {
					uni.navigateTo({
						url:'../set/set'
					})
				}else {
					uni.navigateTo({
						url:'../notice/notice'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './user.scss';
</style>
