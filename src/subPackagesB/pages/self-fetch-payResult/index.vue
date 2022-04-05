<template>
  <view class="container">
    <view
      class='header'
    >
      <image
        :src="require('@assets/svg/success.svg')"
        class='img'
      ></image>
      <text class='txt'>订单支付完成</text>
      <view class='section_wrap'>
        <text class='section'>返回首页</text>
      </view>
      <view class='txt_wrap'>
        <text class='txt1'>查看订单详情</text>
      </view>
    </view>
  </view>
</template>
<script setup>

</script>
<style lang="scss">
  .container{
    height: 100%;
    overflow-y: scroll;
    background: #f9f9f9;
  }
  .header {
    margin-top: 48PX;
    font-family: PingFang SC;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 234PX;

    .img {
      width: 54PX;
      height: 54PX;
    }

    .txt {
      color: rgb(51, 51, 51);
      font-size: 16PX;
      line-height: 1.38;
      height: 22PX;
      margin-top: 17PX;
    }

    .section_wrap {
      border-radius: 20PX;
      background-color: rgb(6, 180, 141);
      display: flex;
      width: 343PX;
      height: 40PX;
      margin-top: 45PX;
    }

    .section {
      color: rgb(255, 255, 255);
      font-size: 15PX;
      line-height: 1.4;
      align-self: center;
      height: 21PX;
      margin-left: 142PX;
    }

    .txt_wrap {
      border-radius: 20PX;
      display: flex;
      width: 343PX;
      height: 40PX;
      margin-top: 16PX;
      box-sizing: border-box;
      border: 1PX solid rgb(6, 180, 141);
    }

    .txt1 {
      color: rgb(6, 180, 141);
      font-size: 15PX;
      line-height: 1.4;
      align-self: center;
      height: 21PX;
      margin-left: 126PX;
    }
  }

</style>
