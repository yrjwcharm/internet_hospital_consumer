<template>
  <view class="container">
    <view class="order-fail-vue">
      <view class="center">
        <view class="top">
          <view class="fail-view">
            <image :src="require('@assets/home/fail.png')" class="fail"/>
            <text class="pay-fail">支付失败</text>
          </view>
        </view>
        <view class="bottom">
          <view class="back-view">
            <text>返回首页</text>
          </view>
          <view class="again-pay">
            <text>再次支付</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>

</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #f9f9f9;
}

.order-fail-vue {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 169PX;
  background: linear-gradient(174deg, #06B48D 0%, #4BB9A0 100%);

  .center {
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
        .fail-view {
          display: flex;
          flex-direction: row;
          align-items: center;
          .fail {
            width: 26PX;
            height: 26PX;
          }

          .pay-fail {
            margin-left: 8PX;
            @include commonFontStyle(20PX, 500, #fff, PingFangSC-Medium)
          }

        }
    }

    .bottom {
      margin-top: 16PX;
      display: flex;
      flex-direction: row;
      align-items: center;
      @include commonFontStyle(13PX, 400, #fff);

      .back-view {
        width: 109PX;
        height: 30PX;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @include all(#fff, 20PX)
      }
      .again-pay {
        width: 109PX;
        margin-left: 8PX;
        height: 30PX;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @include all(#fff, 20PX)
      }
    }
  }
}
</style>
