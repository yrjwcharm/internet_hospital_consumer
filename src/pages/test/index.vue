<template>
  <view class="container">
    <view
      class='header'
    >
      <view class='cnt_col'>
        <view class='cnt'>
          <view class='cnt1'>
            <image
              :src="require('@assets/user/home.png')"
              class='icon'
            ></image>
            <text class='tit'>通海县人民医院</text>
          </view>
          <text class='tit1'>待付款</text>
        </view>
        <image
          src='//img20.360buyimg.com/img/jfs/t1/89654/8/26179/178/624b0f0fE893ccf93/1980b80a3a418246.png'
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
              src='//img10.360buyimg.com/img/jfs/t1/90711/3/26781/182/624b0f0fEd11a551f/70e945ae2c3b0f16.png'
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
</template>
<script setup>
import Taro from '@tarojs/taro'

Taro.setNavigationBarTitle({
  title: '测试页面'
})
</script>
<style lang="scss">
@import "../../mixin";
.container {
  height: 100%;
  overflow-y: scroll;
  background: #F9F9F9;
  @include top_line();
}

.header {
  font-family: PingFangSC-Medium;
  font-size: 14PX;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 197PX;
  overflow: hidden;

  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    padding-left: 16PX;
    padding-right: 16PX;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 197PX;
  }

  .cnt {
    display: flex;
    align-items: center;

    width: 100%;
    height: 16PX;
    margin-top: 17PX;
    font-family: PingFang SC;
    font-weight: bold;
  }

  .cnt1 {
    display: flex;
    align-items: center;

    //width: 302PX;
    flex:1;
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

    height: 20PX;
  }

  .img {

    width: 377PX;
    height: 1PX;
    margin-top: 15PX;
  }

  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
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
    //max-width: 294PX;
    flex:1;
    overflow: hidden;
  }

  .cnt3 {
    width: 50PX;
    height: 15PX;
    margin-left: 85PX;
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
    //max-width: 294PX;
    flex:1;
    overflow: hidden;
  }

  .cnt4 {
    width: 50PX;
    height: 15PX;
    margin-left: 93PX;
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
    //max-width: 200PX;
    flex:1;
    overflow: hidden;
  }

  .cnt6 {
    display: flex;
    align-items: center;
    width: 144PX;
    height: 24PX;
    margin-left: 79PX;
    font-size: 13PX;
  }

  .txt_wrap {
    border-radius: 12PX;
    display: flex;
    width: 68PX;
    //display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 24PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(7, 173, 132);
  }

  .txt2 {
    color: rgb(51, 51, 51);
    line-height: 1.38;
    height: 18PX;
    //margin-left: 7.5PX;
  }

  .txt_wrap1 {
    border-radius: 12PX;
    display: flex;
    width: 68PX;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 24PX;
    margin-left: 8PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(255, 0, 32);
  }

  .txt3 {
    color: rgb(255, 0, 32);
    line-height: 1.38;
    height: 18PX;
    //margin-left: 7.5PX;
  }
}

</style>
