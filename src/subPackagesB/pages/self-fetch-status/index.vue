<template>
  <view class="container">
    <view
      class='self-fetch-header'
    >
      <view class='cnt'>
        <image
          :src="require('@assets/svg/wait.svg')"
          class='icon'
        ></Image>
        <text class='section'>等待自提</text>
      </view>
      <view class='cnt_col'>
        <view class='cnt1'>
          <view class='cnt2'>
            <text class='tit'>夫西地酸乳膏(立思丁)</text>
            <view class='section_wrap'>
              <text class='section1'>处方药</text>
            </view>
          </view>
          <view class='price_wrap'>
            <text class='yuan'>¥ </text>
            <text class='price'>38.30</text>
          </view>
        </view>
        <view class='cnt3'>
          <text class='tit1'>15g:0.3g*1支</text>
          <view class='tit_wrap'>
            <text class='tit2'>申请退款</text>
          </view>
        </view>
        <image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img'
        ></Image>
        <view class='cnt4'>
          <text class='tit3'>药品总额</text>
          <view class='price_wrap1'>
            <text class='yuan1'>¥</text>
            <text class='price1'>38.30</text>
          </view>
        </view>
        <view class='cnt5'>
          <text class='tit4'>运费</text>
          <view class='price_wrap2'>
            <text class='yuan1'>¥</text>
            <text class='price1'>12.00</text>
          </view>
        </view>
        <image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img1'
        ></Image>
        <view class='cnt3'>
          <text class='tit5'>合计实付</text>
          <view class='price_wrap3'>
            <text class='yuan'>¥ </text>
            <text class='price'>38.30</text>
          </view>
        </view>
      </view>
    </view>

    <view
      class='self-fetch-info'
    >
      <view class='cnt_col'>
        <text class='tit'>订单信息</text>
        <Image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img'
        ></Image>
        <view class='cnt'>
          <view class='cnt_col1'>
            <view class='cnt1'>
              <text class='desc_txt'>订单编号：</text>
              <text class='txt'>2021020-1923746376</text>
            </view>
            <view class='cnt2'>
              <text class='desc_txt'>创建时间：</text>
              <text class='txt'>2021-12-30 15:35:24</text>
            </view>
            <view class='cnt2'>
              <text class='desc_txt'>付款时间：</text>
              <text class='txt'>2021-12-30 15:40:24</text>
            </view>
          </view>
          <text class='tit1'>复制</text>
        </view>
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
    background: #F9F9F9;
  }
  .self-fetch-header {
    font-family: PingFang SC;
    color: rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 244PX;
    overflow: hidden;

    .cnt {
      background-color: rgb(234, 245, 242);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 44PX;
    }

    .icon {
      width: 20PX;
      height: 20PX;
    }

    .section {
      font-weight: bold;
      font-size: 16PX;
      line-height: 1.38;
      height: 22PX;
      margin-left: 8PX;
    }

    .cnt_col {
      background-color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding:0 16PX 0 16PX;
      height: 200PX;
      font-size: 14PX;
    }

    .cnt1 {
      display: flex;
      align-items: center;

      width: 100%;
      height: 22PX;
      margin-top: 12PX;
    }

    .cnt2 {
      display: flex;
      align-items: center;
      width: 210PX;
      height: 18PX;
    }

    .tit {
      font-size: 16PX;
      line-height: 1.38;

      height: 22PX;
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
      margin-left: 7PX;
    }

    .section1 {
      color: rgb(255, 255, 255);
      font-size: 12PX;
      line-height: 1.42;
      height: 17PX;
      margin-left: 6PX;
    }

    .price_wrap {
      flex: 1;
      height: 22PX;
      text-align: right;
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

  .cnt3 {
    display: flex;
    align-items: center;

    width: 100%;
    height: 22PX;
    margin-top: 9PX;
  }

  .tit1 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    height: 20PX;
    flex: 1;
    //display: inline-block;
    //text-overflow: ellipsis;
    //white-space: nowrap;
    //max-width: 270PX;
    //overflow: hidden;
  }

  .tit_wrap {
    border-radius: 11PX;
    display: flex;
    width: 74PX;
    height: 22PX;
    //margin-left: 188PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(153, 153, 153);
  }

  .tit2 {
    color: rgb(51, 51, 51);
    line-height: 1.43;
    height: 20PX;
    margin-left: 8.5PX;
  }

  .img {

    width: 108.08%;
    height: 1PX;
    margin-top: 14PX;
  }

  .cnt4 {
    display: flex;
    align-items: center;

    width: 100%;
    height: 20PX;
    margin-top: 13PX;
  }

  .tit3 {
    line-height: 1.43;

    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 295PX;
    overflow: hidden;
  }

  .price_wrap1 {

   /* width: 51PX; */
     flex: 1;
    text-align: right;
    height: 15PX;
    /* margin-left: 239PX;*/
  }

  .yuan1 {
    font-size: 12PX;
    line-height: 1.42;
    height: 15PX;
  }

  .price1 {
    font-weight: 400;
    font-family: PingFangSC-Regular;
    line-height: 1.43;
    height: 14PX;
  }

  .cnt5 {
    display: flex;
    align-items: center;

    width: 100%;
    height: 20PX;
    margin-top: 10PX;
  }

  .tit4 {
    line-height: 1.43;

    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 297PX;
    overflow: hidden;
  }

  .price_wrap2 {

    /* width: 48PX; */
    height: 15PX;
    /* margin-left: 269PX; */
    flex: 1;
    text-align: right;
  }

  .img1 {

    width: 108.08%;
    height: 2PX;
    margin-top: 13PX;
  }

  .tit5 {
    line-height: 1.43;
    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 289PX;
    overflow: hidden;
  }

  .price_wrap3 {
    display: inline-flex;
    height: 22PX;
    flex: 1;
    justify-content: flex-end;
   color: rgb(247, 63, 51);
  }
}
  .self-fetch-info{
      margin-top: 10PX;
      font-family: PingFang SC;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 150PX;
      overflow: hidden;
    .cnt_col {
      background-color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 150PX;
    }
    .tit {
      color: rgb(51, 51, 51);
      font-weight: bold;
      font-size: 16PX;
      line-height: 1.38;

      height: 22PX;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 343PX;
      overflow: hidden;
      margin: 11PX 0 0 16PX;
    }
    .img {

      width: 100%;
      height: 2PX;
      margin-top: 11PX;
    }
    .cnt {
      display: flex;
      align-self: center;
      padding-left: 16PX;
      padding-right: 16PX;
      width: 100%;
      height: 80PX;
      margin-top: 11PX;
      font-size: 14PX;
    }
    .cnt_col1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 215PX;
      height: 80PX;
    }
    .cnt1 {
      display: inline-flex;
      width: 215PX;
      height: 20PX;
    }
    .desc_txt {
      color: rgb(102, 102, 102);
      line-height: 1.43;
      height: 14PX;
    }
    .txt {
      color: rgb(51, 51, 51);
      line-height: 1.43;
      height: 14PX;
    }
    .cnt2 {
      display: inline-flex;
      width: 209PX;
      height: 20PX;
      margin-top: 10PX;
    }
    .tit1 {
      color: #06b48d;
      line-height: 1.43;
      height: 20PX;
      flex: 1;
      text-align: right;
    }

  }
</style>
