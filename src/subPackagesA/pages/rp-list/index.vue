<template>
  <view class="container">
    <view
      src='//img11.360buyimg.com/img/jfs/t1/223866/14/8822/16726/6246aa16Eaa4e8e21/267bf5fa8b2298f6.jpg'
      class='rp-list'
    >
      <view class='cnt_col'>
        <view class='cnt_col1'>
          <view class='cnt'>
            <text class='tit'>诊断：慢性鼻炎</text>
            <text class='tit1'>NO：24902448048013</text>
          </view>
          <image
            src='//img12.360buyimg.com/img/jfs/t1/149002/14/24866/194/6246aa18E2851f99f/df33a0c2455ea0f7.png'
            class='img'
          ></image>
        </view>
        <text class='tit2'>2022-03-25 21:00</text>
      </view>
    </view>
  </view>
</template>
<script setup>

</script>
<style lang="scss">
@import "../../../mixin";
.container{
  height: 100%;
  background: #F9F9F9;
  overflow-y: scroll;
  @include top_line();
}
.rp-list {
  font-family: PingFang SC;
  font-size: 14PX;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 84PX;
}
.cnt_col {
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 84PX;
}
.cnt_col1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  width: 345PX;
  height: 46PX;
}
.cnt {
  display: flex;
  align-items: center;
  width: 344PX;
  height: 14PX;
  margin-top: 15PX;
}
.tit {
  color: rgb(51, 51, 51);
  line-height: 1.43;
  flex-shrink: 0;
  height: 20PX;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 194PX;
  overflow: hidden;
}
.tit1 {
  color: rgb(102, 102, 102);
  line-height: 1.43;
  flex-shrink: 0;
  height: 20PX;
  margin-left: 96PX;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150PX;
  overflow: hidden;
}
.img {
  width: 345PX;
  height: 2PX;
  margin-top: 15PX;
}
.tit2 {
  color: rgb(51, 51, 51);
  line-height: 1.43;
  height: 20PX;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 343PX;
  overflow: hidden;
  margin: 8PX 0 0 16PX;
}

</style>
