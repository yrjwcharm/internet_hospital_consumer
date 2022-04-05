<template>
  <view class="container">
    <view class="list-row">
        <text>
          请在15分钟内完成支付，超时将取消订单
        </text>
    </view>
    <view class="list-item">
      <view class="list-row-wrap">
        <view class="left">
          <text class="label">
            {{type=='0'?'图文问诊':type==1?'视频问诊':'健康咨询'}}
          </text>
          <text class="about">
          (医生 {{name}})
          </text>
        </view>
        <view class="right">
          <text class="money">
            ¥{{totalMoney}}
          </text>
        </view>
      </view>
    </view>
    <view class="list-line">
      <text>选择支付方式</text>
    </view>
    <view class="list-item">
      <view class="list-row-wrap">
        <view class="left">
          <image class="wx-icon" :src="require('@assets/home/weixin.png')"/>
          <text class="wx-pay-label">
            微信支付
          </text>
        </view>
        <view class="right">
          <radio style="transform: scale(0.7)" color="#06B48D" :checked="true"/>
        </view>
      </view>
    </view>
    <view class='footer' :style="isIphoneX?'bottom:17PX;':'bottom:0'">
      <view class='btn-wrap-view'>
      <view class='price-view'>
        <text class='RMB'>合计</text>
        <text class="'_price'">¥ {{totalMoney}}</text>
      </view>
      <view class='enter-view' @tap="sendPayRequest">
        <text class='enter-pay'>立即支付</text>
      </view>
    </view>
  </view>
  </view>
</template>
<script setup>
  import Taro from '@tarojs/taro'
  import {onMounted, ref, toRaw} from "vue";
  import {callPayApi} from "../../../services/SyncRequest";
  const isIphoneX = Taro.getStorageSync('isIphoneX');
  const totalMoney=ref('');
  const type = ref('');
  const name= ref('');
  const _orderId = ref('');
  onMounted(()=>{
    const {orderId,treatType,totalFee,realName}=Taro.getCurrentInstance().router.params;
    type.value = treatType;
    totalMoney.value = totalFee;
    name.value =realName;
    _orderId.value = orderId;
  })
  const sendPayRequest=async ()=>{
    const openId = Taro.getStorageSync('openId');
    const res = await callPayApi({
      orderId:_orderId.value,
      openId:openId,
    })
    console.log(333,res);
    if(res.code ==200){
      const {payResult:{appId,nonceStr,packageValue,paySign,signType,timeStamp},} = res.data;
      Taro.requestPayment({
        timeStamp: timeStamp,
        nonceStr: nonceStr,
        package: packageValue,
        signType: signType,
        paySign: paySign,
        success: function (res) {
          Taro.navigateTo({
            url:'/subPackagesA/pages/pay-success/index'
          })
        },
        fail: function (res) { }
      })
    }
  }
</script>
<style lang="scss">
@import "src/mixin";
  .container{
    height: 100%;
    background: #f9f9f9;
  }
  .list-row{
    display: flex;
    flex-direction: column;
    height: 44PX;
    justify-content: center;
    align-items: center;
    background: #FFA730;
    @include commonFontStyle(14PX,500,#fff,PingFangSC-Medium)

  }
  .list-item{
    display: flex;
    padding-left: 16PX;
    padding-right: 16PX;
    flex-direction: column;
    justify-content: center;
    height: 50PX;
    background: #fff;
      .list-row-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
          .left{
            display: flex;
            flex-direction: row;
            align-items: center;
              .label{
                @include commonFontStyle(14PX,500,#333,PingFangSC-Medium)
              }
              .about{
                margin-left: 10PX;
                @include commonFontStyle(14PX,500,#333)
              }
              .wx-icon{
                width: 20PX;
                height: 20PX;
              }
              .wx-pay-label{
                margin-left: 10PX;
                @include commonFontStyle(14PX,400,#333)
              }
          }
          .right{
            display: flex;
            flex-direction: row;
            align-items: center;
              .money{
                @include commonFontStyle(13PX,500,#333,PingFangSC-Medium)
              }
              .checked-icon{
                width: 22PX;
                height: 22PX;
              }
          }
      }
  }
   .list-line{
     display: flex;
     flex-direction: column;
     justify-content: center;
     padding-left: 16PX;
     height: 44PX;
      @include commonFontStyle(14PX,500,#333,PingFangSC-Medium)
   }
.footer{
  position: fixed;
  left:0;
  right:0;
  display: flex;
  flex-direction: column;
  flex:1;
  justify-content: flex-end;
}

.btn-wrap-view{
  display: flex;
  flex-direction: row;
  height: 96rpx;
}
.price-view{
  width: 202PX;
  line-height: 96rpx;
  height: 96rpx;
  background: #fff;
}
.RMB{
  margin-left: 10PX;
  @include commonFontStyle(14PX,400,#333)
}
.price{
  text-decoration: line-through;
  font-size: 28PX;
  color: #fff;
}
._price{
  margin-left: 10PX;
  @include commonFontStyle(16PX,400,#FF3131)

}
.enter-view{
  flex: 1;
  display: flex;
  background: #06B48D;
  @include commonFontStyle(16PX,500,#fff,PingFangSC-Medium)
}
.enter-pay{
  margin: auto;
}
</style>
