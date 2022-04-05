<template>
  <view class="container">
    <view class="list-row">
      <view class="list-row-wrap">
        <view class="left-wrap">
          <image :src="require('@assets/home/avatar.png')" class="avatar"/>
          <view class="right-wrap">
            <view class="top">
              <text class="name">王建国</text>
              <text class="profession">主任医师</text>
            </view>
            <text class="clinic">皮肤科</text>
          </view>
        </view>
        <image :src="require('@assets/home/arrow.png')" class="forward"/>
      </view>
    </view>
    <view class="list-order-detail">
      <text class="title">订单详情</text>
      <template v-for="(item,index) in listItems" :key="index">
        <view class="list-row-wrapper">
          <view class="left-wrap">
            <text class="label">{{item.label}}</text>
            <text class="value">{{item.value}}</text>
          </view>
          <text @tap="copy(item,index)" class="txt-right">{{item.copyText}}</text>
        </view>
      </template>
    </view>
  </view>
</template>
<script setup>
  import {ref} from "vue";
  import Taro from '@tarojs/taro'
  const listItems = ref([
    {
      label:'订单编号：',
      value:'20210356677020134527',
      copyText:'复制',
    },
    {
      label:'订单类型：',
      value:'健康咨询',
      copyText:'',
    },
    {
      label:'下单时间：',
      value:'2021-12-30 14:21',
      copyText: '',
    },
    {
      label:'应付金额：',
      value:'59元',
      copyText: ''
    },
    {
      label:'实付金额：',
      value: '59元',
      copyText:'',
    },
    {
      label:'支付方式：',
      value: '微信支付',
      copyText:'',
    },
    {
      label:'支付时间：',
      value: '2021-12-30 14:45',
      copyText:'',
    }
  ])
  const copy = (item,index)=>{
      if(index==0){
        Taro.setClipboardData({
          //准备复制的数据
          data:item.value ,
          success: function (res) {
            Taro.showToast({
              title:'复制成功',
              icon:'none',
              duration:3500
            })
          }
        });
      }

  }
</script>
<style lang="scss">
@import "src/mixin";
  .container{
    height: 100%;
    background: #f9f9f9;
    padding-top: 10PX;
  }
  .list-row{
    display: flex;
    background: #fff;
    padding-left: 16PX;
    padding-right: 16PX;
    flex-direction: column;
    justify-content: center;
    height: 73PX;
      .list-row-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
          .left-wrap{
            display: flex;
            flex-direction: row;
            align-items: center;
              .avatar{
                width: 40PX;
                height: 40PX;
              }
              .right-wrap{
                display: flex;
                margin-left: 16PX;
                flex-direction: column;
                  .top{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                      .name{
                        @include commonFontStyle(14PX,500,#333,PingFangSC-Medium)
                      }
                      .profession{
                        margin-left: 15PX;
                        @include commonFontStyle(14PX,400,#333)
                      }
                  }
                  .clinic{
                    margin-top: 3PX;
                    @include commonFontStyle(13PX,400,#666)
                  }
              }
          }
          .forward{
            width: 9PX;
            height: 17PX;
          }
      }
  }
  .list-order-detail{
    padding:16PX;
    margin-top: 10PX;
    background: #fff;
     .title{
       @include commonFontStyle(14PX,500,#333,PingFangSC-Medium)
     }
     .list-row-wrapper{
       display: flex;
       margin-top:10PX;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
        .left-wrap{
          display: flex;
          flex-direction: row;
          align-items: center;
            .label{
              @include commonFontStyle(13PX,400,#333)
            }
            .value{
              margin-left: 7PX;
              @include commonFontStyle(13PX,400,#666)
            }
        }
        .txt-right{
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #427CFC;
          @include commonFontStyle(13PX,400,#427CFC)
        }
     }
  }
</style>
