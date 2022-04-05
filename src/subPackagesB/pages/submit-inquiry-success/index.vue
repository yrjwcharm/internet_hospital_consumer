<template>
  <view class="container">
    <view class="submit-success">
      <image :src="require('@assets/home/avatar.png')" class="success"/>
      <text class="info-success">信息提交成功</text>
    </view>
    <view class="foot" :style="isIphoneX?'bottom:17PX':'bottom:0'">
      <view class="list-row-wrap">
        <view class="left" @tap="backHome">
          <text>返回首页</text>
        </view>
        <view class="right" @tap="startInquiry">
          <text>开始问诊</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from '@tarojs/taro'
const isIphoneX = Taro.getStorageSync('isIphoneX');
  const backHome =()=>{
    Taro.reLaunch({
      url:'/pages/index/index'
    })
  }
  const startInquiry =()=>{
    Taro.navigateTo({
      url:'/pages/base/index'
    })
    // Taro.navigateTo({
    //   url:'/pages/base/index'
    // })
  }
</script>

<style lang="scss">
@import 'src/mixin';

.container {
  height: 100%;
  background: #F9F9F9;
}
.submit-success{
  display: flex;
  padding-top: 75PX;
  flex-direction: column;
    .success{
      margin:0 auto;
      width: 54PX;
      height: 54PX;
    }
    .info-success{
      margin: 17PX auto;
      @include commonFontStyle(16PX,400,#333)
    }
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    .left {
      height: 40PX;
      line-height: 40PX;
      width: 125PX;
      text-align: center;
      background: #fff;
      @include commonFontStyle(15PX, 400, #666);
    }

    .right {
      height: 40PX;
      flex: 1;
      line-height: 40PX;
      text-align: center;
      background: #06B48D;
      @include commonFontStyle(15PX, 400, #fff);
    }
  }
}
</style>
