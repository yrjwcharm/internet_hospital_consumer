<template>
  <view class="msg_container">
    <view class="nav-header" :style="'padding-top:'+statusBarHeight+'PX'">
      <view :class="platform=='android'?'header android':'header ios'">
        <text>消息</text>
      </view>
    </view>

    <view
      class='list-info-item'
    >
      <view class='cnt_col'>
        <view class='cnt'>
          <view class='cnt1'>
            <text class='txt'>【公告】2022年春节放假通知～</text>
            <view class='color_view'></view>
          </view>
          <text class='txt1'>2022-03-14 10:23</text>
        </view>
        <text class='txt2'>
          根据北京市政府办公厅通知精神，现将2022年春节放假安排通知如下：1月31日至2月6日放假调休，共7天…
        </text>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from "@tarojs/taro";

const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight;

</script>
<style lang="scss">
@import "../../mixin";

.msg-container {
  height: 100%;
  position: relative;

  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    content: '';
    border-top: 1PX solid rgba(204, 204, 204, 0.4);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.nav-header {
  background: #fff;
  @include bottom_line();

  .android {
    align-items: flex-start;
    padding-left: 12PX;
  }

  .ios {
    align-items: center;
  }

  .header {
    display: flex;
    height: 44PX;
    flex-direction: column;
    justify-content: center;
    @include commonFontStyle(16PX, 400, #333);
  }
}

.list-info-item {
  font-family: PingFang SC;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 92PX;
  line-height: 0;

  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 92PX;
  }

  .cnt {
    display: flex;
    align-items: center;
    align-self: center;
    width: 100%;
    height: 14PX;
    padding-left: 16PX;
    padding-right: 16PX;
  }

  .cnt1 {
    display: inline-block;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    /* width: 209PX; */
    flex: 1;
    /* overflow: hidden; */
    /* -o-text-overflow: ellipsis; */
    /* text-overflow: ellipsis;*/
  }

  .txt {
    color: rgb(51, 51, 51);
    font-size: 14PX;
    line-height: 1.43;

    height: 20PX;
    margin-left: 7PX;
    white-space: nowrap;
    max-width: 202PX;
  }

  .color_view {
    border-radius: 50%;
    background-color: rgb(245, 73, 61);
    display: inline-flex;

    width: 8PX;
    height: 8PX;
    margin-left: -209PX;
  }

  .txt1 {
    line-height: 1.33;
    color: rgb(153, 153, 153);
    font-size: 12PX;

    height: 16PX;
    margin-left: 31PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 104PX;
    overflow: hidden;
  }

  .txt2 {
    color: rgb(102, 102, 102);
    font-size: 13PX;
    line-height: 1.38;
    //width: 345PX;
    height: 36PX;
    webkit-line-clamp: 2;
    webkit-box-orient: vertical;
    display: -webkit-box;
    word-break: break-word;
    overflow: hidden;
    margin: 12PX 16px 0 16PX;
  }

}
</style>
