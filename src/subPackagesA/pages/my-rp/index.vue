<template>
  <view class="container">
    <view
      class='my-rp'
    >
      <view class='cnt_col'>
        <image
          src='//img12.360buyimg.com/img/jfs/t1/178607/32/22225/178/62481bd6Ede295a72/020642da1b6cce28.png'
          class='img'
        ></image>
        <view class='cnt'>
          <view class='cnt1'>
            <text class='tit'>王建国</text>
            <image
              :src="require('@assets/user/drop_down.png')"
              class='icon'
            ></image>
          </view>
          <view class='cnt2'>
            <text class='tit'>2021-08</text>
            <image
              :src="require('@assets/user/drop_down.png')"
              class='icon'
            ></image>
          </view>
        </view>
      </view>
    </view>
    <view
      class='my-rp-list'
      @tap="Taro.navigateTo({
        url:'/subPackagesA/pages/prescription-detail/index'
      })"
    >
      <view class='cnt_col'>
        <view class='cnt'>
          <view class='cnt1'>
            <text class='txt'>王建国</text>
            <text class='txt1'> 综合科</text>
          </view>
          <text class='section'>已过期</text>
        </view>
        <view class='cnt2'>
          <text class='desc_txt'>问诊医生：</text>
          <text class='tit'>乔晶晶 主治医师</text>
        </view>
        <view class='cnt2'>
          <text class='desc_txt'>诊断结果：</text>
          <text class='tit1'>幽门螺旋杆菌感染</text>
        </view>
        <image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img'
        />
        <view class='cnt3'>
          <text class='tit2'>2021-08-20 20:00</text>
          <view class='cnt4'>
            <view class='txt_wrap'>
              <text class='txt2'>删除</text>
            </view>
            <view class='txt_wrap1'>
              <text class='txt3'>查看问诊</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from '@tarojs/taro'
</script>
<style lang="scss">
.container {
  height: 100%;
  background: #F9F9F9;
  overflow-y: scroll;
}
.my-rp-list {
  font-family: PingFang SC;
  font-size: 14PX;
  display: flex;
  justify-content: center;
  width:100%;
  height: 158PX;
  overflow: hidden;
  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    width:100%;
    height: 157PX;
  }
  .cnt {
    background-color: rgb(9, 187, 143);
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 16PX 0 16PX;
    width:100%;
    height: 40PX;
    color: rgb(255, 255, 255);
  }
  .cnt1 {
    display: inline-flex;
    //width: 286PX;
    flex:1;
    height: 20PX;
  }
  .txt {
    font-weight: bold;
    line-height: 1.43;
    height: 14PX;
  }
  .txt1 {
    line-height: 1.43;
    height: 14PX;
    margin-left: 6PX;
  }
  .section {
    line-height: 1.43;
    height: 20PX;
    margin-left: 16PX;
  }
  .cnt2 {
    display: flex;
    align-items: center;

    width: 188PX;
    height: 14PX;
    color: rgb(51, 51, 51);
    margin: 16PX 0 0 16PX;
  }
  .desc_txt {
    line-height: 1.71;

    height: 24PX;
  }
  .tit {
    line-height: 1.43;

    height: 20PX;
    margin-left: 6PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 106PX;
    overflow: hidden;
  }
  .tit1 {
    line-height: 1.43;

    height: 20PX;
    margin-left: 6PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 112PX;
    overflow: hidden;
  }
  .img {

    width: 100%;
    height: 1PX;
    margin-top: 17PX;
  }
  .cnt3 {
    display: flex;
    align-items: center;
    align-self: center;
    padding:0 16PX 0 16PX;
    width: 100%;
    height: 24PX;
    margin-top: 8PX;
  }
  .tit2 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    //height: 20PX;
    display: inline-block;
    //text-overflow: ellipsis;
    //white-space: nowrap;
    flex:1;
    //max-width: 209PX;
    //overflow: hidden;
  }
  .cnt4 {
    display: flex;
    align-items: center;
    width: 134PX;
    height: 24PX;
    //margin-left: 85PX;
    font-size: 13PX;
  }
  .txt_wrap {
    border-radius: 12PX;
    display: flex;
    width: 58PX;
    align-items: center;
    justify-content: center;
    height: 24PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(102, 102, 102);
  }
  .txt2 {
    color: rgb(51, 51, 51);
    line-height: 1.38;
    height: 18PX;
  }
  .txt_wrap1 {
    border-radius: 12PX;
    display: flex;
    width: 68PX;
    height: 24PX;
    align-items: center;
    justify-content: center;
    margin-left: 8PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(9, 187, 143);
  }
  .txt3 {
    color: rgb(9, 187, 143);
    line-height: 1.38;
    height: 18PX;
  }
}

.my-rp{
    font-family: PingFang SC;
    font-size: 14PX;
    color: rgb(51, 51, 51);
    display: flex;
    justify-content: center;
    width:100%;
    height: 48PX;
    overflow: hidden;
  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 48PX;
  }
  .img {

    width: 100%;
    height: 1PX;
  }
  .cnt {
    display: flex;
    align-items: center;

    width: 255PX;
    height: 14PX;
    margin-top: 16PX;
  }
  .cnt1 {
    display: flex;
    align-items: center;
    width: 61PX;
    height: 14PX;
  }
  .tit {
    line-height: 1.43;

    height: 20PX;
  }
  .icon {

    width: 12PX;
    height: 8PX;
    margin-left: 7PX;
  }
  .cnt2 {
    display: flex;
    align-items: center;
    width: 76PX;
    height: 14PX;
    margin-left: 118PX;
  }

}
</style>
