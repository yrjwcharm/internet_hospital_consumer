<template>
  <view class="container">
    <view class='panel__content'>
      <AtTabs
        class="atTabs"
        :current="current"
        scroll
        @click="handleClick"
        :tabList="tabList"/>
      <view class="panel-container">
        <view
          @tap="Taro.navigateTo({
            url:'/subPackagesA/pages/drug-order-detail/index'
          })"
          class='index'
        >
          <view class='cnt_col'>
            <view class='cnt'>
              <view class='cnt1'>
                <image
                  :src="require('@assets/user/home.png')"
                  class='icon'
                />
                <text class='tit'>通海县人民医院</text>
              </view>
              <text class='tit1'>待付款</text>
            </view>
            <image
              :src="require('@assets/svg/bottom_line.svg')"
              class='img'
            ></image>
            <view class='cnt_col1'>
              <view class='cnt_col2'>
                <view class='cnt_col3'>
                  <view class='cnt2'>
                    <text class='txt'>克拉仙 克拉霉素片 0.25g*8片/盒</text>
                    <view class='cnt3'>
                      <text class='yuan'>¥</text>
                      <text class='price'>115.</text>
                      <text class='price1'>60</text>
                    </view>
                  </view>
                  <text class='txt1'>x2</text>
                </view>
                <view class='cnt_col4'>
                  <view class='cnt2'>
                    <text class='tit2'>九芝堂 裸花紫珠片 0.5g*8片/盒</text>
                    <view class='cnt4'>
                      <text class='yuan'>¥</text>
                      <text class='price'>115.</text>
                      <text class='price1'>60</text>
                    </view>
                  </view>
                  <text class='tit3'>x2</text>
                </view>
                <image
                  src='//img20.360buyimg.com/img/jfs/t1/106580/26/26789/182/62482827E08dd1ebb/f55499c9b4fddbf3.png'
                  class='img1'
                ></image>
              </view>
              <view class='cnt5'>
                <text class='tit4'>2022-02-21 21:00</text>
                <view class='cnt6'>
                  <view class='txt_wrap'>
                    <text class='txt2'>取消订单</text>
                  </view>
                  <view class='txt_wrap1'>
                    <text class='txt3'>立即支付</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {reactive, ref} from "vue";
import store from "../../../store";
import  Taro from '@tarojs/taro'
const tabList = reactive([
  {
    title: '全部',
  },
  {
    title: '待付款',
  },
  {
    title: '待发货'
  },
  {title: '待收货'},
  {title: '已完成'},
])
const current = ref(0);
const handleClick = (value) => {
  current.value = value;
  // if (value == 0) status.value = 9;
  // else if (value == 1) status.value = 0;
  // else if (value == 2) status.value = 1;
  // else if (value == 3) status.value = 2;
  // else status.value = 8;
  // store.dispatch('getDrugList', {rcStatus: status.value})
  // drName: "依依"
  // drPhotoUrl: "/yiyi/photo"
  // pafeeall: "10.0"
  // practisingScopeName: "内科专业"
  // pridepict: "都短发的的的"
  // protitleName: "主任医师"
  // rcStatus: "9"
  // registerId: "427680260163764224"
  // treatType: "复诊开药"
}
</script>

<style lang="scss">
@import "../../../mixin";
.at-tabs__header {
  @include top_line();
  @include bottom_line();
}

.at-tabs__item--active {
  color: #06B48D;
}

.at-tabs__item {
  height: 40PX;
  width: 20%;
}

.at-tabs__item-underline {
  height: 0;
}

.container {
  height: 100%;
  overflow-y: scroll;
  background: #F9F9F9;
}

.panel-container {
  height: 100%;
  .index {
    font-family: PingFangSC-Medium;
    font-size: 14PX;
    display: flex;
    justify-content: center;
    width:100%;
    height: 197PX;
    overflow: hidden;
  }
  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 197PX;
  }
  .cnt {
    display: flex;
    align-items: center;

    width: 91.73%;
    height: 16PX;
    margin-top: 17PX;
    font-family: PingFang SC;
    font-weight: bold;
  }
  .cnt1 {
    display: flex;
    align-items: center;

    //width: 302PX;
    height: 16PX;
  }
  .icon {

    width: 16PX;
    height: 16PX;
  }
  .tit {
    line-height: 1.33;
    color: rgb(51, 51, 51);
    font-size: 15PX;

    height: 20PX;
    margin-left: 8PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 270PX;
    overflow: hidden;
  }
  .tit1 {
    color: rgb(255, 0, 32);
    line-height: 1.43;
    flex:1;
    text-align: right;
    //height: 20PX;
  }
  .img {

    width: 100%;
    height: 1PX;
    margin-top: 15PX;
  }
  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width:91.733333%;
    height: 136PX;
    margin-top: 12PX;
  }
  .cnt_col2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 97PX;
  }
  .cnt_col3 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 36PX;
  }
  .cnt2 {
    display: flex;
    align-items: center;

    width: 100%;
    height: 20PX;
    color: rgb(51, 51, 51);
  }
  .txt {
    font-family: PingFang SC;
    line-height: 1.43;
    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 294PX;
    overflow: hidden;
  }
  .cnt3 {
    width: 50PX;
    //height: 15PX;
    /* margin-left: 85PX; */
    flex: 1;
    text-align: right;
  }
  .yuan {
    line-height: 1.67;
    font-weight: bold;
    font-family: PingFang SC;
    font-size: 12PX;
    letter-spacing: 1PX;
    height: 12PX;
  }
  .price {
    line-height: 1.33;
    font-weight: 500;
    font-size: 15PX;
    height: 15PX;
  }
  .price1 {
    line-height: 1.54;
    font-weight: 500;
    font-size: 13PX;
    height: 13PX;
  }
  .txt1 {
    line-height: 1.14;
    color: rgb(136, 136, 136);
    font-family: PingFang SC;

    height: 16PX;
  }
  .cnt_col4 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 35PX;
    margin-top: 11PX;
  }
  .tit2 {
    font-family: PingFang SC;
    line-height: 1.43;
    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 294PX;
    overflow: hidden;
  }
  .cnt4 {
    width: 50PX;
    flex: 1;
    /* height: 15PX; */
    text-align: right;
  }
  .tit3 {
    line-height: 1.14;
    color: rgb(136, 136, 136);
    font-family: PingFang SC;

    height: 16PX;
  }
  .img1 {
    width: 343PX;
    height: 1PX;
    margin-top: 14PX;
  }
  .cnt5 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 39PX;
    font-family: PingFang SC;
  }
  .tit4 {
    color: rgb(136, 136, 136);
    line-height: 1.43;
    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200PX;
    overflow: hidden;
  }
  .cnt6 {
    display: flex;
    align-items: center;
    width: 144PX;
    height: 24PX;
    font-size: 13PX;
    flex: 1;
    justify-content: flex-end;
    /* margin-left: 79PX; */
  }
  .txt_wrap {
    border-radius: 12PX;
    display: flex;
    width: 68PX;
    height: 24PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(7, 173, 132);
  }
  .txt2 {
    color: rgb(51, 51, 51);
    line-height: 1.38;
    height: 18PX;
    margin-left: 7.5PX;
  }
  .txt_wrap1 {
    border-radius: 12PX;
    display: flex;
    width: 68PX;
    height: 24PX;
    margin-left: 8PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(255, 0, 32);
  }
  .txt3 {
    color: rgb(255, 0, 32);
    line-height: 1.38;
    height: 18PX;
    margin-left: 7.5PX;
  }

}
</style>
