<template>
	<view>
		<view class="cart-list">
			<view class="cart-item" v-for="(item, index) in cartList" :key="index">
				<view class="left">
					<image :src="item.image" mode="" lazy-load></image>
					<text @click="check(item, index)" class="icon-all iconfont" :class="{ selected: item.selected }"></text>
				</view>
				<view class="right">
					<text class="name">{{ item.title }}</text>
					<text class="spec">{{ item.attr_val }}</text>
					<text class="price">¥{{ item.price }}</text>
					<uni-number-box
						:min="1"
						:max="item.stock"
						:value="item.stock > item.number ? item.number : item.stock"
						class="numberbox"
						:index="index"
						@eventChange="bindChange"
					></uni-number-box>
				</view>
				<text class="clear iconfont icon-clear" @click="remove(index)"></text>
			</view>
		</view>
		<view class="page-bottom">
			<view class="switch">
				<switch :checked="checked" @change="switchChange" color="#fa436a" />
				<text></text>
			</view>
			<view class="priceAll">
				<text>¥{{ calcTotal }}</text>
				<text>已经优惠74.35</text>
			</view>
			<button @click="createOrder">去结算</button>
		</view>
	</view>
</template>

<script>
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
export default {
	components: {
		uniNumberBox
	},
	data() {
		return {
			cartList: [],
			checked: true
		};
	},
	onLoad() {
		this.getCartList();
	},
	computed: {
		// 计算总价
		calcTotal() {
			if (this.cartList.length === 0) {
				return;
			}
			let sum = 0;
			this.cartList.forEach(item => {
				if (item.selected === true) {
					sum += item.price * item.number;
				}
			});
			sum = Number(sum.toFixed(2));
			return sum;
		},
		// 全选按钮

	},
	methods: {
		async getCartList() {
			let list = await this.$api.json('cartList');
			list.forEach(item => {
				this.$set(item, 'selected', true);
				if (item.number > item.stock) {
					item.number = item.stock;
				}
			});
			this.cartList = list;
		},
		//清除全部的购物车
		switchChange(data) {
			if(data.detail.value) {
				this.cartList.forEach(item => {
					item.selected = true
				})
			}else {
				this.cartList.forEach(item => {
					item.selected = false
				})
			}
		},
		// 商品的选择与取消
		check(item, index) {
			this.cartList[index].selected = !item.selected;
			this.checkeBtn()
		},
		// 数量改变
		bindChange: function(data) {
			this.cartList[data.index].number = data.number;
		},
		// 商品移除
		remove(index) {
			this.cartList.splice(index, 1);
		},
		// 全选按钮
		checkeBtn() {
			const len = this.cartList.filter(item => item.selected === true)
			if(len.length < this.cartList.length) {
				this.checked = false
			} else {
				this.checked = true
			}
		},
		// 创建订单
		createOrder() {
			uni.navigateTo({
				url:"../order/createOrder"
			})
		}

	}
};
</script>

<style lang="scss">
@import 'cart.scss';
</style>
