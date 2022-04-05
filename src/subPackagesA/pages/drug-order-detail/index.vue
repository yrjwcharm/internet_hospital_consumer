<template>
  <view class="container">
    <view
      class='drug_detail_header'
    >
      <view class='cnt_col'>
        <view class='cnt'>
          <image
            :src="require('@assets/user/marker.png')"
            class='icon_wrap'
          />
          <view class='cnt_col1'>
            <view class='cnt1'>
              <text class='txt'>王建国</text>
              <text class='txt1'>138 3456 7890</text>
            </view>
            <text class='instruction'>
              北京市朝阳区建国路欣欣园小区7号楼708
            </text>
          </view>
          <image
            :src='require("@assets/svg/more__.svg")'
            class='img'
          />
        </view>
        <image
          :src='require("@assets/svg/bottom_line.svg")'
          class='img1'
        />
        <view class='cnt2'>
          <text class='tit'>物流：顺丰速运 (运输中)</text>
          <text class='tit1'>RT58445802409 | 复制</text>
        </view>
      </view>
    </view>

    <view
      class='rp-list-main'
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
          :src='require("@assets/svg/bottom_line.svg")'
          class='img'
        ></image>
        <view class='cnt_col1'>
          <view class='cnt_col2'>
            <view class='cnt_col2'>
              <view class='cnt_col3'>
                <view class='cnt2'>
                  <text class='txt'>克拉仙 克拉霉素片 0.25g*8片/盒</text>
                  <view class='cnt3'>
                    <text class='number'>60</text>
                    <view class='cnt4'>
                      <text class='yuan'>¥</text>
                      <text class='price'>115</text>
                      <text class='price1'>.</text>
                    </view>
                  </view>
                </view>
                <text class='txt1'>x2</text>
              </view>
              <view class='cnt_col4'>
                <view class='cnt2'>
                  <text class='txt'>九芝堂 裸花紫珠片 0.5g*8片/盒</text>
                  <view class='cnt5'>
                    <text class='number'>60</text>
                    <view class='cnt4'>
                      <text class='yuan'>¥</text>
                      <text class='price'>115</text>
                      <text class='price1'>.</text>
                    </view>
                  </view>
                </view>
                <text class='tit2'>x2</text>
              </view>
            </view>
            <image
              :src="require('@assets/svg/bottom_dash.svg')"
              class='img1'
            ></image>
          </view>
          <view class='cnt6'>
            <view class='cnt_col5'>
              <text class='tit3'>合计</text>
              <text class='tit4'>运费</text>
              <text class='txt2'>实付款</text>
            </view>
            <view class='cnt_col6'>
              <view class='cnt7'>
                <text class='yuan1'>¥</text>
                <text class='price2'>231.</text>
                <text class='price3'>20</text>
              </view>
              <view class='cnt8'>
                <text class='yuan1'>¥</text>
                <text class='price2'>12.</text>
                <text class='price3'>00</text>
              </view>
              <view class='cnt9'>
                <text class='yuan1'>¥</text>
                <text class='price2'>243.</text>
                <text class='price3'>20</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view
      class='rp-payOrder-info'
    >
      <view class='cnt'>
        <view class='cnt1'>
          <view class='cnt_col'>
            <text class='txt'>订单信息</text>
            <text class='desc_txt'>订单状态：</text>
            <text class='desc_txt'>订单编号：</text>
            <text class='desc_txt'>订单时间：</text>
            <text class='desc_txt'>支付时间：</text>
            <text class='desc_txt'>配送方式：</text>
          </view>
          <view class='cnt_col1'>
            <text class='txt1'>待发货</text>
            <text class='number'>23579989009</text>
            <text class='txt2'>2021-08-01 10:58</text>
            <text class='txt2'>2021-08-01 11:58</text>
            <text class='txt2'>普通快递</text>
          </view>
        </view>
        <text class='txt3'>复制</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from "@tarojs/taro";

const isIphoneX = Taro.getStorageSync('isIphoneX');
</script>
<style lang="scss">
@import "../../../mixin";

.container {
  height: 100%;
  overflow-y: scroll;
  background: #F9F9F9;
  @include top_line();
}

.drug_detail_header {
  font-family: PingFang SC;
  font-size: 14PX;
  color: rgb(51, 51, 51);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 108PX;
  overflow: hidden;

  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 108PX;
  }

  .cnt {
    display: flex;
    padding:0 16PX 0 16PX;
    width: 100%;
    height: 41PX;
    margin-top: 14PX;
  }

  .icon_wrap {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 30PX;
    height: 30PX;
  }

  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    //width: 289PX;
    flex:1;
    height: 41PX;
    margin-left: 8PX;
  }

  .cnt1 {
    display: flex;
    align-items: center;

    width: 152PX;
    height: 15PX;
  }

  .txt {
    line-height: 1.43;

    height: 20PX;
  }

  .txt1 {
    color: rgb(102, 102, 102);
    line-height: 1.43;

    height: 20PX;
    margin-left: 11PX;
  }

  .instruction {
    line-height: 1.43;

    height: 20PX;
    margin-top: 9PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 289PX;
    overflow: hidden;
  }

  .img {
    align-self: flex-end;
    width: 8PX;
    height: 14PX;
    margin-left: 8PX;
  }

  .img1 {

    width: 100%;
    height: 2PX;
    margin-top: 13PX;
  }

  .cnt2 {
    display: flex;
    align-items: center;
    padding-left: 16PX;
    padding-right: 16PX;
    width: 100%;
    height: 14PX;
    margin-top: 11PX;

  }

  .tit {
    line-height: 1.43;
    //height: 20PX;
    display: inline-block;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    /* max-width: 193PX; */
    /* overflow: hidden; */
    flex: 1;
  }

  .tit1 {
    line-height: 1.43;

    height: 20PX;
    //margin-left: 34PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 151PX;
    overflow: hidden;
  }

}
.rp-list-main {
  margin-top: 10PX;
  font-family: PingFang SC;
  font-size: 14PX;
  color: rgb(51, 51, 51);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 256PX;
  overflow: hidden;

  .cnt_col {
    padding-left: 16PX;
    padding-right: 16PX;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 256PX;
  }

  .cnt {
    display: flex;
    align-items: center;

    width: 100%;
    height: 16PX;
    margin-top: 17PX;
  }

  .cnt1 {
    display: flex;
    align-items: center;

    flex: 1;
    height: 16PX;
  }

  .icon {

    width: 16PX;
    height: 16PX;
  }

  .tit {
    line-height: 1.33;
    color: rgb(51, 51, 51);
    font-weight: bold;
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
    height: 195PX;
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
    line-height: 1.43;
    height: 20PX;
    display: inline-block;
    //text-overflow: ellipsis;
    //white-space: nowrap;
    //max-width: 296PX;
    //overflow: hidden;
    flex:1;
  }

  .cnt3 {
    display: inline-flex;
    width: 48PX;
    height: 20PX;
    //margin-left: 87PX;
    font-weight: bold;
  }

  .number {
    line-height: 1.54;
    font-size: 13PX;

    height: 13PX;
  }

  .cnt4 {

    width: 33PX;
    height: 20PX;
  }

  .yuan {
    line-height: 1.67;
    font-size: 12PX;
    letter-spacing: 1PX;
    height: 12PX;
  }

  .price {
    line-height: 1.43;
    height: 14PX;
  }

  .price1 {
    line-height: 1.33;
    font-size: 15PX;
    height: 15PX;
  }

  .txt1 {
    line-height: 1.14;
    color: rgb(136, 136, 136);

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

  .cnt5 {
    display: inline-flex;
    width: 48PX;
    height: 20PX;
    //margin-left: 95PX;
    font-weight: bold;
  }

  .tit2 {
    line-height: 1.14;
    color: rgb(136, 136, 136);

    height: 16PX;
  }

  .img1 {
    width: 100%;
    height: 1PX;
  }

  .cnt6 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 98PX;
    font-family: PingFangSC-Medium;
  }

  .cnt_col5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    height: 70PX;
    font-family: PingFang SC;
  }

  .tit3 {
    line-height: 1.43;

    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 291PX;
    overflow: hidden;
  }

  .tit4 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 7PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 291PX;
    overflow: hidden;
  }

  .txt2 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 9PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 291PX;
    overflow: hidden;
  }

  .cnt_col6 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 52PX;
    height: 76PX;
  }

  .cnt7 {

    width: 51PX;
    height: 15PX;
    color: rgb(51, 51, 51);
  }

  .yuan1 {
    font-weight: bold;
    font-size: 12PX;
    letter-spacing: 1PX;
    line-height: 1.42;
    height: 15PX;
  }

  .price2 {
    font-weight: 500;
    line-height: 1.43;
    height: 14PX;
  }

  .price3 {
    font-weight: 500;
    font-size: 12PX;
    line-height: 1.42;
    height: 15PX;
  }

  .cnt8 {

    width: 42PX;
    height: 15PX;
    margin-top: 12PX;
    color: rgb(51, 51, 51);
  }

  .cnt9 {

    width: 53PX;
    height: 15PX;
    margin-top: 14PX;
    color: rgb(255, 0, 32);
  }
}
.rp-payOrder-info {
  margin-top: 10PX;
  font-family: PingFang SC;
  font-size: 14PX;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 197PX;

  .cnt {
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 16PX;
    padding-right: 16PX;
    height: 197PX;
  }

  .cnt1 {
    display: flex;
    align-self: center;
    //width: 194PX;
    flex:1;
    height: 165PX;
    color: rgb(51, 51, 51);
  }

  .cnt_col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 76PX;
    height: 165PX;
  }

  .txt {
    font-weight: bold;
    font-size: 15PX;
    line-height: 1.4;

    height: 21PX;
    margin-top: -3PX;
  }

  .desc_txt {
    color: rgb(136, 136, 136);
    line-height: 1.43;

    height: 20PX;
    margin-top: 10PX;
  }

  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-end;
    width: 118PX;
    height: 134PX;
  }

  .txt1 {
    line-height: 1.43;

    height: 20PX;
    margin-top: -3PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 118PX;
    overflow: hidden;
  }

  .number {
    line-height: 1.43;

    height: 20PX;
    margin-top: 10PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 118PX;
    overflow: hidden;
  }

  .txt2 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 10PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 118PX;
    overflow: hidden;
  }

  .txt3 {
    color: rgb(255, 0, 32);
    line-height: 1.43;
    //height: 20PX;
    margin: 74PX 0 0 0;
  }
}

</style>
