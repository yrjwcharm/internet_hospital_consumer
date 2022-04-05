<template>
  <view class="container">
    <view class="pay-success-wrap">
      <view class="pay-top">
        <view class="pay-wrapper">
          <image :src="require('@assets/home/complete.png')" class="success"/>
          <text class="txt-pay-success">支付完成</text>
        </view>
      </view>
      <view class="center" @tap="jumpToOrderDetail">
        <text>查看订单</text>
      </view>

      <view class="bottom-wrap">
        <view class="list-row-wrapper">
          <view class="left">
            <image :src="null" class="img"/>
          </view>
          <view class="align-center">
            <text class="title">问诊前需先填写信息</text>
            <text class="sub-title">超24小时未填写信息将取消订单</text>
          </view>
          <view class="right" @tap="jumpToImproveInquiry">
            <text>填写信息</text>
          </view>
        </view>
      </view>
    </view>
  </view>

</template>
<script setup lang="ts">
import Taro from '@tarojs/taro'
  const jumpToOrderDetail=()=>{
    Taro.navigateTo({
      url:'/subPackagesA/pages/order-detail/index'
    })
  }
  const jumpToImproveInquiry=()=>{
    Taro.navigateTo({
      url:'/subPackagesA/pages/improve-inquiry/index'
    })
  }
</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #f9f9f9;
}

.pay-success-wrap {
  display: flex;
  padding-top: 49PX;
  padding-bottom: 16PX;
  background: linear-gradient(174deg, #06B48D 0%, #4BB9A0 100%);
  border-radius: 0 0 5PX 5PX;
  flex-direction: column;

  .pay-top {
    display: flex;
    flex-direction: row;
    align-items: center;

    .pay-wrapper {
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      .success {
        width: 26PX;
        height: 26PX;
      }

      .txt-pay-success {
        margin-left: 8PX;
        @include commonFontStyle(20PX, 500, #fff, PingFangSC-Medium)
      }
    }

  }

  .center {
    margin: 0 auto;
    margin-top: 16PX;
    width: 108PX;
    height: 30PX;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @include commonFontStyle(13PX, 400, #fff);
    @include all(#fff, 20PX)
  }

  .bottom-wrap {
    margin-top: 40PX;
    display: flex;
    padding-left: 8PX;
    padding-right: 8PX;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    border-radius: 5PX;
    margin-left: 16PX;
    margin-right: 16PX;
    height: 70PX;

    .list-row-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .left {

          .img{
            width: 26PX;
            height: 26PX;
          }
      }

      .align-center {
        display: flex;
        flex-direction: column;
        flex:1;
        .title {
          @include commonFontStyle(16PX, 400, #333)
        }

        .sub-title {
          margin-top: 2PX;
          @include commonFontStyle(14PX, 400, #666)
        }
      }

      .right {
        width: 72PX;
        height: 30PX;
        line-height: 30PX;
        text-align: center;
        background: #06B48D;
        border-radius: 15PX;
        @include commonFontStyle(13PX, 400, #fff)
      }
    }
  }
}
</style>
