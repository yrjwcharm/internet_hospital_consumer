<template>
  <view class="container">
    <view
      class='__header'
    >
      <view class='cnt_col'>
        <text class='txt'>咨询医生</text>
        <view class='cnt'>
          <view class='cnt1'>
            <view class='icon_wrap'>
              <image
                :src=" !isExistImg(state.doctorAvatar)? require('@assets/user/avatar.png'):state.doctorAvatar"
                class='icon'
              ></image>
            </view>
            <view class='cnt_col1'>
              <view class='cnt2'>
                <text class='txt1'>{{ state.docName }}</text>
                <text class='txt2'>{{ state.protitleName }} | {{ state.professtion }}</text>
              </view>
              <text class='txt3'>{{ state.orgName }}</text>
            </view>
          </view>
          <image
            :src="state.rcStatus==0?require('@assets/user/Waiting.png'):state.rcStatus==1?require('@assets/user/in_consultation.png'):state.rcStatus==2?require('@assets/user/finish.png'):state.rcStatus==8?require('@assets/user/cancel.png'):require('@assets/user/wait_pay.png')"
            class='icon1'
          ></image>
        </view>
        <image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img'
        ></image>
        <view class='cnt3'>
          <text class='tit'>就诊人</text>
          <text class='tit1'>{{ state.patientName }} {{state.patientSex}} | {{state.patientBirthday}}岁</text>
        </view>
        <view class='cnt4'>
          <text class='tit2'>问诊类型</text>
          <text class='tit3'>{{state.treatType==0?'图文问诊':state.treatType==1?'视频问诊':'健康咨询'}}</text>
        </view>
        <view class='cnt5' v-if="state.treatType==0||state.treatType==2">
          <text class='txt4'>病情描述</text>
          <text class='tit4'>
            最近一个月总是头晕、头疼、疲劳、心悸等等，有时还会出现注意力不集中，记忆力减退，肢体麻木的现象
          </text>
        </view>
        <image
          :src="require('@assets/svg/bottom_line.svg')"
          class='img'
        ></image>
        <view class='cnt6'>
          <text class='tit5'>上传图片</text>
          <view class='cnt7'>
            <text class='tit6'>查看图片</text>
            <image
              :src="require('@assets/user/intrro_more.png')"
              class='icon2'
            ></image>
          </view>
        </view>
      </view>
    </view>
    <view
      class="main"
    >
      <view class="cnt">
        <view class="wrapper">
          <view class="cnt1">
            <view class="wrapper1">
              <view class="cnt_col">
                <text class="txt">订单状态</text><text class="txt1">实际支付</text
              ><text class="txt1">订单编号</text
              ><text class="txt2">创建时间</text
              ><text class="txt1" v-if="state.rcStatus!=9">支付时间</text>
              </view>
            </view>
            <view class="wrapper2">
              <view class="cnt_col1">
                <text class="txt3">支付完成</text>
                <view class="price_wrap">
                  <text class="yuan">¥</text><text class="price">{{state.totalfee}}元</text>
                </view>
                <text class="number">{{ state.orderId }}</text
                ><text class="txt4">{{state.createTime}}</text
              >
                <text class="txt5" v-if="state.rcStatus!=9">{{state.tradeTime}}</text>
              </view>
            </view>
          </view>
        </view>
        <text class="txt6" @tap="copyOrderId">复制</text>
      </view>
    </view>
    <view class="footer_btn" v-if="state.rcStatus==0|| state.rcStatus==1||state.rcStatus==2||state.rcStatus==9" :style="isIphoneX?'bottom:17PX':'bottom:0'">
      <view class="footer-wrap">
        <view class="left" @tap="onClickLeft(state.rcStatus)">
          <text>{{state.rcStatus==0||state.rcStatus==9?'取消订单':`查看处方(1)`}}</text>
        </view>
        <view class="right" @tap="onClickRight(state.rcStatus)">
          <text>{{ state.rcStatus==0?'立即问诊':state.rcStatus==1?'继续沟通':state.rcStatus==2?'再次问诊':'立即支付' }}</text>
        </view>
      </view>
    </view>
    <view class="footer" v-if="state.rcStatus==8" :style="isIphoneX?'bottom:17PX':'bottom:0'">
       <view class="btn-submit-view">
         <text class="btn-submit-text">再次问诊</text>
       </view>
    </view>
  </view>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import Taro from "@tarojs/taro";
import store from "../../../store";
import {isEmpty, isExistImg} from "../../../utils/RegUtil";
import {callQueryInterrogationDetail} from "../../../services/SyncRequest";
onMounted(()=>{
  initData();
})
const isIphoneX = Taro.getStorageSync('isIphoneX');
const state =reactive({
  docName:'',
  patientName:'',
  treatType:0,
  professtion:'',
  totalfee:0,
  protitleName:'',
  doctorAvatar:'',
  orderId:'',
  orderStatus:0,
  rcStatus:7,
  orgName:'',
  patientBirthday:'',
  patientSex:'',
  tradeTime:'',
  createTime:'',

})
const onClickLeft=(status)=>{
   let ele =[1,9];
   if(ele.includes(parseInt(status))){

   }else{
     Taro.navigateTo({
       url:'/subPackagesA/pages/rp-list/index'
     })
   }

}
const onClickRight=(status)=>{

}
const copyOrderId=()=>{
  Taro.setClipboardData({
    data: state.orderId,
    success: function (res) {
      wx.showToast({
        title: '复制成功',
        icon: 'none',
        duration: 3500,
        mask: true
      })
    }

  })
}
const initData=async ()=>{
  const {registerId} =Taro.getCurrentInstance().router.params;
  const res = await callQueryInterrogationDetail(registerId);
  if(res.code ==200){
    console.log(333,res.data);
    const {treatType,patientName,rcStatus,ctstamp,tradeTime,patientSex,practisingScopeName,protitleName,totalfee,drName,drPhotoUrl,orderCode,orderStatus,orgName,patientBirthday,}= res.data;
    state.docName = drName;
    state.patientName = patientName;
    state.treatType = treatType;
    state.professtion = practisingScopeName;
    state.protitleName = protitleName;
    state.totalfee = totalfee;
    state.doctorAvatar = drPhotoUrl;
    state.orderId = orderCode;
    state.patientSex = patientSex;
    state.orderStatus = orderStatus;
    state.orgName = orgName;
    state.rcStatus = rcStatus;
    state.patientBirthday=patientBirthday;
    state.tradeTime = tradeTime;
    state.createTime=ctstamp;
    // drName: "依依"
    // drPhotoUrl: "/yiyi/photo"
    // pafeeall: "10.0"
    // practisingScopeName: "内科专业"
    // pridepict: "都短发的的的"
    // protitleName: "主任医师"
    // rcStatus: "9"
    // registerId: "427680260163764224"
  }
}
const listItem = ref([
  {
    label: '订单状态',
    value: '支付完成',
  },
  {
    label: '实际支付',
    value: '¥80元',
  },
  {
    label: '订单编号',
    value: '3556432456112',
  },
  {
    label: '创建时间',
    value: '2021-08-20  20:00',
  },
  {
    label: '支付时间',
    value: '2021-08-20  20:00',
  }
]);
</script>

<style  lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  overflow-y: scroll;
  background: #F9F9F9;
  @include top_line();
}
.__header {
  font-family: PingFang SC;
  color: rgb(51, 51, 51);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 314PX;
  overflow: hidden;
  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    width:100%;
    height: 314PX;
  }
  .txt {
    font-size: 16PX;
    line-height: 1.38;
    flex-shrink:0;
    height: 22PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 358PX;
    overflow: hidden;
    margin: 12PX 0 0 16PX;
  }
  .cnt {
    display: flex;
    align-items: center;
    align-self: center;
    flex-shrink:0;
    width: 343PX;
    height: 48PX;
    margin-top: 21PX;
  }
  .cnt1 {
    display: flex;
    align-items: center;
    width: 230PX;
    height: 48PX;
  }
  .icon_wrap {
    border-radius: 50%;
    background-color: rgb(216, 216, 216);
    display: flex;
    justify-content: center;
    width: 48PX;
    height: 48PX;
    overflow: hidden;
    box-sizing: border-box;
    //border: 1PX solid rgb(151, 151, 151);
  }
  .icon {
    width: 49PX;
    height: 57PX;
    margin-top: -3PX;
  }
  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 166PX;
    height: 42PX;
    margin-left: 16PX;
  }
  .cnt2 {
    display: flex;
    align-items: center;
    flex-shrink:0;
    width: 166PX;
    height: 16PX;
  }
  .txt1 {
    font-weight: bold;
    font-size: 16PX;
    line-height: 1.38;
    flex-shrink:0;
    height: 22PX;
  }
  .txt2 {
    color: rgb(102, 102, 102);
    font-size: 14PX;
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
    margin-left: 7PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 111PX;
    overflow: hidden;
  }
  .txt3 {
    font-size: 14PX;
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
    margin-top: 9PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 166PX;
    overflow: hidden;
  }
  .icon1 {
    width: 40PX;
    height: 40PX;
    margin-left: 73PX;
  }
  .img {
    flex-shrink:0;
    width: 100%;
    height: 2PX;
    margin-top: 16PX;
  }
  .cnt3 {
    display: flex;
    align-items: center;
    flex-shrink:0;
    width: 181PX;
    height: 14PX;
    font-size: 14PX;
    margin: 14PX 0 0 16PX;
  }
  .tit {
    line-height: 1.71;
    color: rgb(102, 102, 102);
    flex-shrink:0;
    height: 22PX;
  }
  .tit1 {
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
    margin-left: 30PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 109PX;
    overflow: hidden;
  }
  .cnt4 {
    display: flex;
    align-items: center;
    flex-shrink:0;
    width: 128PX;
    height: 14PX;
    font-size: 14PX;
    margin: 17PX 0 0 16PX;
  }
  .tit2 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
  }
  .tit3 {
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
    margin-left: 16PX;
  }
  .cnt5 {
    display: flex;
    align-self: center;
    flex-shrink:0;
    width: 346PX;
    height: 58PX;
    //margin-top: 16PX;
    margin: 16PX 0 0 16PX;
    font-size: 14PX;
  }
  .txt4 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
    margin-top: -3PX;
  }
  .tit4 {
    line-height: 1.57;
    flex-shrink:0;
    width: 274PX;
    height: 66PX;
    webkit-line-clamp: 3;
    webkit-box-orient: vertical;
    display: -webkit-box;
    word-break: break-word;
    overflow: hidden;
    margin: -4PX 0 0 16PX;
  }
  .cnt6 {
    display: flex;
    align-items: center;
    align-self: center;
    flex-shrink:0;
    width: 344PX;
    height: 16PX;
    margin-top: 12PX;
    font-size: 14PX;
  }
  .tit5 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 272PX;
    overflow: hidden;
  }
  .cnt7 {
    display: flex;
    align-items: center;
    flex-shrink:0;
    width: 72PX;
    height: 16PX;
    margin-left: 216PX;
  }
  .tit6 {
    color: rgb(51, 51, 51);
    line-height: 1.43;
    flex-shrink:0;
    height: 20PX;
  }
  .icon2 {
    flex-shrink:0;
    width: 9PX;
    height: 16PX;
    margin-left: 7PX;
  }

}
.main{
  margin-top: 10PX;
  font-family: PingFang SC;
  font-size: 14PX;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 165PX;
  .cnt {
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    min-height: 165PX;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 199PX;
    height: auto;
    min-height: 133PX;
    overflow: hidden;
  }
  .cnt1 {
    align-items: flex-start;
    flex-wrap: wrap;
    display: flex;
  }
  .wrapper1 {
    margin-right: 16PX;
    color: rgb(102, 102, 102);
  }
  .cnt_col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 56PX;
    height: 133PX;
  }
  .txt {
    line-height: 1.43;

    height: 20PX;
    margin-top: -3PX;
  }
  .txt1 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 10PX;
  }
  .txt2 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 9PX;
  }
  .wrapper2 {
    color: rgb(51, 51, 51);
  }
  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 127PX;
    height: 133PX;
  }
  .txt3 {
    line-height: 1.43;

    height: 20PX;
    margin-top: -3PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 127PX;
    overflow: hidden;
  }
  .price_wrap {

    width: 120PX;
    height: 15PX;
    margin-top: 12.5PX;
  }
  .yuan {
    font-size: 12PX;
    letter-spacing: 2PX;
    line-height: 1.42;
    height: 15PX;
  }
  .price {
    font-weight: 400;
    font-family: PingFangSC-Regular;
    line-height: 1.43;
    height: 14PX;
  }
  .number {
    line-height: 1.43;

    height: 20PX;
    margin-top: 12.5PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 127PX;
    overflow: hidden;
  }
  .txt4 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 9PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 127PX;
    overflow: hidden;
  }
  .txt5 {
    line-height: 1.43;

    height: 20PX;
    margin-top: 10PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 127PX;
    overflow: hidden;
  }
  .txt6 {
    color: rgb(255, 49, 49);
    line-height: 1.43;
    height: 20PX;
    margin-left: 117PX;
  }
}
.footer_btn{
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  height: 40PX;
    .footer-wrap{
      display: flex;
      flex-direction: row;
      flex:1;
      .left{
        width: 140PX;
        background: #fff;
        text-align: center;
        line-height: 44PX;
        color: rgb(6, 180, 141);
      }
      .right{
        flex:1;
        line-height: 44PX;
        background: #06B48D;
        text-align: center;
        color: rgb(255, 255, 255);
      }
    }
}

</style>
