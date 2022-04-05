<template>
  <view class="container">
    <view
      v-if="tabActive"
      class='order_pay_header'
    >
      <view class='txt_wrap'>
        <text class='txt'>医院自提</text>
      </view>
      <view class='section_wrap' @tap="tab1Click">
        <text class='section'>快递配送</text>
      </view>
      <view class='cnt_col'>
        <view class='cnt_col1'>
          <view class='cnt'>
            <image
              :src="require('@assets/svg/positioning.svg')"
              class='icon'
            ></image>
            <text class='txt1'>自取地址</text>
          </view>
          <text class='tit'>通海县人民医院大厅右转100米药房</text>
          <image
            :src="require('@assets/svg/bottom_line.svg')"
            class='img'
          ></image>
        </view>
        <view class='cnt1'>
          <view class='cnt_col2'>
            <text class='txt2'>自取时间</text>
            <text class='txt3'>9:00-17:00</text>
          </view>
          <view class='cnt_col3'>
            <text class='txt4'>自取电话</text>
            <text class='txt3'>010-1256378</text>
          </view>
          <image
            :src="require('@assets/svg/separator.svg')"
            class='img1'
          ></image>
        </view>
      </view>
    </view>

    <view
      v-if="!tabActive"
      class='order_pay__header'
    >
      <view class='section_wrap'>
        <text class='section'>医院自提</text>
      </view>
      <view class='section_wrap1'>
        <text class='section1'>快递配送</text>
      </view>
      <view class='cnt'>
        <view class='cnt1'>
          <image
            :src="require('@assets/svg/positioning.svg')"
            class='icon'
          ></image>
          <text class='txt'>请添加收货地址</text>
        </view>
        <image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img'
        />
      </view>
    </view>

    <view
      class='drug-list'
    >
      <view class='cnt'>
        <view class='cnt1'>
          <view class='cnt_col'>
            <text class='txt'>夫西地酸乳膏(立思丁)</text>
            <text class='txt1'>15g:0.3g*1支</text>
          </view>
          <view class='section_wrap'>
            <text class='section'>处方药</text>
          </view>
        </view>
        <view class='cnt_col1'>
          <view class='price_wrap'>
            <text class='yuan'>¥</text>
            <text class='price'>38.30</text>
          </view>
        </view>
        <view class='view'>
          <text class='txt2'>x1</text>
        </view>
      </view>
    </view>
    <view class="list-row-order">
      <view
        class='list-row-detail padding'
      >
        <view class="list-row-wrap">
          <text class="title">订单明细</text>
        </view>
      </view>
      <view
        class='list-row-detail margin'
      >
        <view class="list-row-wrap">
          <text class="label">药品金额</text>
          <view>
            <text class="yuan">¥</text>
            <text class="price">38.30</text>
          </view>
        </view>
      </view>
      <view
        class='list-row-detail margin'
      >
        <view class="list-row-wrap">
          <text class="label">运费</text>
          <view class="right-wrap">
            <text class="yuan _yuan">¥</text>
            <text class="price _price">12.00</text>
          </view>

        </view>
      </view>
      <view
        class='list-row-detail margin'
      >
        <view class="list-row-wrap">
          <text class="label">合计</text>
          <view class="right-wrap">
            <text class="yuan"> ¥</text>
            <text class="price">50.30</text>
          </view>
        </view>
      </view>
    </view>
    <view class="list-row-pay">
      <view class="list-row-wrap">
        <view class="left">
          <image :src="require('@assets/svg/wx.svg')" class="img"/>
          <text class="title">微信支付</text>
        </view>
        <image class="right" :src="require('@assets/svg/check.svg')"/>
      </view>
    </view>
    <view
      :style="isIphoneX?'bottom:17PX':'bottom:0'"
      class='list-order-footer'
    >
      <view class='cnt'>
        <view class='cnt1'>
          <text class='txt'>共1件</text>
          <text class='yuan'>¥</text>
          <text class='price'>50.30</text>
        </view>
        <view class='section_wrap'>
          <text class='section'>立即支付</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import {ref} from "vue";
import Taro from '@tarojs/taro'
const isIphoneX = Taro.getStorageSync('isIphoneX');
const tabActive = ref(true);
const tab1Click = () => {
  console.log(222, '走了');
}
</script>
<style lang="scss">
@import "../../../mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
}

.order_pay_header {
  margin-top: 9PX;
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 207PX;
  z-index: 0;

  .txt_wrap {
    display: flex;
    position: relative;
    width: 100%;
    height: 44PX;
    z-index: 1;
    background: url(//img20.360buyimg.com/img/jfs/t1/217646/26/16108/864/62481f2eE5e4c5cbd/deea798e9ff647a7.png) no-repeat;
  }

  .txt {
    color: rgb(6, 180, 141);
    font-size: 17PX;
    line-height: 1.41;
    align-self: center;
    height: 24PX;
    margin-left: 60PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 255PX;
    overflow: hidden;
  }

  .section_wrap {
    display: flex;
    position: absolute;
    top: 2PX;
    left: 49.866666%;
    width: 50.133333%;
    height: 42PX;
    z-index: 0;
    background: url(//img11.360buyimg.com/img/jfs/t1/182758/15/22651/786/62481f2eE58eddddb/2740a1b171ec3155.png) no-repeat;
  }

  .section {
    color: rgb(51, 51, 51);
    font-size: 16PX;
    line-height: 1.38;
    align-self: center;
    height: 22PX;
    margin-left: 63PX;
  }

  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 163PX;
    font-size: 14PX;
  }

  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 94PX;
  }

  .cnt {
    display: flex;
    align-items: center;
    width: 79PX;
    height: 16PX;
    margin-top: 24PX;
  }

  .icon {

    width: 16PX;
    height: 16PX;
  }

  .txt1 {
    color: rgb(136, 136, 136);
    line-height: 1.43;

    height: 20PX;
    margin-left: 7PX;
  }

  .tit {
    color: rgb(51, 51, 51);
    line-height: 1.43;
    height: 21PX;
    margin-top: 12PX;
  }

  .img {
    width: 100%;
    height: 1PX;
    margin-top: 20PX;
  }

  .cnt1 {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 69PX;
    z-index: 0;
  }

  .cnt_col2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 38PX;
  }

  .txt2 {
    color: rgb(136, 136, 136);
    line-height: 1.43;

    height: 20PX;
    margin-top: -3PX;
  }

  .txt3 {
    color: rgb(51, 51, 51);
    line-height: 1.43;

    height: 20PX;
    margin-top: 4PX;
  }

  .cnt_col3 {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //position: absolute;
    //top: 15PX;
    //left: 0PX;
    //width: 257PX;
    height: 38PX;
    //z-index: 0;
  }

  .txt4 {
    color: rgb(136, 136, 136);
    line-height: 1.43;

    height: 20PX;
  }

  .img1 {
    width: 1PX;
    height: 42PX;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

}

.order_pay__header {
  margin-top: 9PX;
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 100PX;
  z-index: 0;

  .section_wrap {
    display: flex;
    position: relative;
    width: 206PX;
    height: 44PX;
    z-index: 1;
    background: url(//img13.360buyimg.com/img/jfs/t1/210454/31/19968/903/62486847E8cde2956/9f8733fd6ccc746c.png) no-repeat;
  }

  .section {
    color: rgb(6, 180, 141);
    font-size: 16PX;
    line-height: 1.38;
    align-self: center;
    height: 22PX;
    margin-left: 72PX;
  }

  .section_wrap1 {
    display: flex;
    position: absolute;
    top: 2PX;
    left: 0PX;
    width: 188PX;
    height: 42PX;
    z-index: 0;
    background: url(//img11.360buyimg.com/img/jfs/t1/149510/4/26871/832/62486847Ec8ec722f/d9d075737b30f470.png) no-repeat;
  }

  .section1 {
    color: rgb(51, 51, 51);
    font-size: 17PX;
    line-height: 1.41;
    align-self: center;
    height: 24PX;
    margin-left: 59PX;
  }

  .cnt {
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56PX;
  }

  .cnt1 {
    display: flex;
    align-items: center;
    width: 323PX;
    height: 16PX;
  }

  .icon {

    width: 16PX;
    height: 16PX;
  }

  .txt {
    color: rgb(102, 102, 102);
    font-size: 16PX;
    line-height: 1.38;

    height: 22PX;
    margin-left: 8PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 291PX;
    overflow: hidden;
  }

  .img {
    width: 8PX;
    height: 14PX;
    margin-left: 14PX;
  }

}

.drug-list {
  margin-top: 10PX;
  font-family: PingFang SC;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80PX;

  .cnt {
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    padding-left: 16PX;
    padding-right: 16PX;
    height: 80PX;
    z-index: 0;
  }

  .cnt1 {
    display: flex;
    width: 210PX;
    height: 47PX;
  }

  .cnt_col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 162PX;
    height: 46PX;
  }

  .txt {
    color: rgb(51, 51, 51);
    font-size: 16PX;
    line-height: 1.38;

    height: 22PX;
    margin-top: -3PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 162PX;
    overflow: hidden;
  }

  .txt1 {
    color: rgb(102, 102, 102);
    font-size: 14PX;
    line-height: 1.43;

    height: 20PX;
    margin-top: 10PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 162PX;
    overflow: hidden;
  }

  .section_wrap {
    border-radius: 9PX;
    background-color: rgb(6, 180, 141);
    display: flex;
    width: 48PX;
    height: 18PX;
  }

  .section {
    color: rgb(255, 255, 255);
    font-size: 12PX;
    line-height: 1.42;
    height: 17PX;
    margin-left: 6PX;
  }

  .cnt_col1 {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    /* width: 55PX; */
    flex: 1;
    align-items: flex-end;
    height: 51PX;
    margin-left: 79PX;
    color: #333333;
  }

  .price_wrap {
    display: inline-flex;

    width: 55PX;
    height: 22PX;
  }

  .yuan {
    font-size: 13PX;
    line-height: 1.38;

    height: 17PX;
  }

  .price {
    font-size: 16PX;
    line-height: 1.38;
    height: 16PX;
  }

  .txt2 {
    font-size: 14PX;
    line-height: 1.43;
    height: 20PX;
    margin: 12PX 0 0 0;
  }

  .view {
    border-radius: 5PX;
    position: absolute;
    top: 42PX;
    right: 16PX;
    width: 28PX;
    text-align: center;
    height: 28PX;
    z-index: 0;
    box-sizing: border-box;
    border: 0.5PX solid rgb(204, 204, 204);
  }
}

.list-row-order {
  background: #fff;
  margin-top: 10PX;

  .margin {
    margin-left: 16PX;
    margin-right: 16PX;
  }

  .padding {
    padding-left: 16PX;
    padding-right: 16PX;
  }

  .list-row-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 44PX;
    @include bottom_line();

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .label {
        font-family: PingFangSC-Regular;
        font-size: 14PX;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #333333;
      }

      .title {
        font-family: PingFangSC-Medium;
        font-size: 16PX;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #333333;
      }

      .right-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;

        .yuan {
          font-family: PingFangSC-Medium;
          font-size: 13PX;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0;
          color: #333333;
        }

        ._yuan {
          font-family: PingFangSC-Regular;
        }

        .price {
          font-family: PingFangSC-Medium;
          font-size: 16PX;
          font-weight: normal;
          letter-spacing: 0;
          color: #333333;
        }

        ._price {
          font-family: PingFangSC-Regular;
        }
      }
    }
  }
}

.list-row-pay {
  margin-top: 10PX;
  display: flex;
  background: #FFFFFF;
  padding-left: 16PX;
  padding-right: 16PX;
  flex-direction: column;
  justify-content: center;
  height: 44PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        width: 20PX;
        height: 20PX;
      }

      .title {
        margin-left: 10PX;
        font-family: PingFangSC-Regular;
        font-size: 14PX;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #333333;
      }
    }

    .right {
      width: 22PX;
      height: 22PX;
    }
  }
}


.list-order-footer {
  position: fixed;
  bottom: 0;
  font-family: PingFang SC;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 56PX;

  .cnt {
    padding-left: 16PX;
    padding-right: 16PX;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56PX;
  }

  .cnt1 {
    display: flex;
    //width: 218PX;
    align-items: center;
    height: 22PX;
  }

  .txt {
    color: rgb(51, 51, 51);
    font-size: 14PX;
    line-height: 1.43;
    height: 16PX;
  }

  .yuan {
    color: rgb(255, 49, 49);
    font-weight: bold;
    font-size: 14PX;
    line-height: 1.43;
    height: 16PX;
    margin: 0 4PX 0 4PX;
  }

  .price {
    color: rgb(255, 49, 49);
    font-weight: bold;
    font-size: 16PX;
    line-height: 1.38;
    height: 16PX;
  }

  .section_wrap {
    border-radius: 17PX;
    background-color: rgb(6, 180, 141);
    display: flex;
    width: 109PX;
    height: 34PX;
    margin-left: 16PX;
  }

  .section {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 16PX;
    line-height: 1.38;
    align-self: center;
    height: 22PX;
    margin-left: 23PX;
  }
}

</style>
