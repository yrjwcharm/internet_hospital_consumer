<template>
  <view class="container">
    <view class="user-data">
      <view class="list-row-header">
        <image :src="require('@assets/home/avatar.png')" class="avatar"/>
        <view class="right-wrap">
          <view class="top">
            <text class="name">王建国</text>
            <text class="profession">医生</text>
          </view>
          <view class="bottom">
            <text class="name">通海人民医院</text>
            <text class="profession">呼吸内科</text>
          </view>
        </view>
      </view>
      <view class="evaluate-doctor">
        <text class="label">医生服务</text>
        <at-rate class="rate" :value="5" size="15"/>
        <text class="value">非常满意</text>
      </view>
      <view class="list-textarea-input">
        <image :src="require('@assets/home/edit.png')" class="edit"/>
        <textarea placeholder-class="" class="textarea" placeholder="从多角度评价医生，可以帮助更多就诊人" name="textarea" id=""/>

      </view>
      <view class="list-evaluate-button">
        <template v-for="(item,index) in listItem" :key="index">
          <view :class="item.checked?'list-row-wrap active':'list-row-wrap inActive'" @tap="selEvaluate(item)">
            <text>{{ item.label }}</text>
          </view>
        </template>
      </view>
    </view>
    <view class="list-row-topic-evaluate">
      <text class="title">问诊评价</text>
      <view class="list-row">
        <text class="label">问诊流程</text>
        <at-rate class="rate" :value="0" size="15"/>
      </view>
      <view class="list-row">
        <text class="label">物流服务</text>
        <at-rate class="rate"  :value="0" size="15"/>
      </view>
    </view>
    <view class="footer" style="bottom:17PX" @tap="submitEvaluate">
        <view class="btn-submit-view">
          <text class="btn-submit-text">提交评价</text>
        </view>
    </view>
  </view>
</template>
<script setup>
import Taro from '@tarojs/taro'
const isIphoneX = Taro.getStorageSync('isIphoneX');
import {ref} from "vue";
const selEvaluate =(item)=>{
  listItem.value.map(_item=>{
     if(JSON.stringify(_item)==JSON.stringify(item)){
       _item.checked =!_item.checked;
     }
  })
}
const submitEvaluate =()=>{

}
const listItem = ref([
  {
    label: '专业性强',
    checked: true,
  },
  {
    label: '态度非常好',
    checked: true,
  },
  {
    label: '解决了问题',
    checked: false,
  },
  {
    label: '很专业',
    checked: false,
  },
  {
    label: '主动询问',
    checked: false,
  },
  {
    label: '讲解很清楚',
    checked: true,
  },
  {
    label: '建议很帮助',
    checked: false,
  },
])
</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  padding-top: 10PX;
}

.user-data {
  margin-left: 16PX;
  margin-right: 16PX;
  padding-top: 17PX;
  padding-left: 8PX;
  background: #fff;
  border-radius: 5PX;

  .list-row-header {
    display: flex;
    flex-direction: row;
    align-items: center;

    .avatar {
      width: 59px;
      height: 59px;
    }

    .right-wrap {
      margin-left: 16PX;
      display: flex;
      flex-direction: column;

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        @include commonFontStyle(14PX, 500, #333, PingFangSC-Medium);

        .name {

        }

        .profession {
          margin-left: 4PX;
        }
      }

      .bottom {
        display: flex;
        flex-direction: row;
        align-content: center;
        @include commonFontStyle(14PX, 400, #333);

        .hospital {

        }

        .major {
        }
      }
    }

  }

  .evaluate-doctor {
    margin-top: 12PX;
    display: flex;
    flex-direction: row;
    align-items: center;

    .label {
      margin-right: 8PX;
      @include commonFontStyle(14PX, 400, #333);
    }

    .value {
      margin-left: 17PX;
      @include commonFontStyle(14PX, 400, #999)
    }
  }
}

.list-textarea-input {
  margin-top: 18PX;
  display: flex;
  flex-direction: row;
  //align-items: center;
  .edit {
    width: 14PX;
    height: 14PX;
    margin-right: 8PX;
  }

  .textarea {
    display: inline-block;
    font-size: 13PX;
    height: 80PX !important;
    flex: 1;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    caret-color: #666666;
  }

  .placeholder-class {
    color: #999999;
  }
}

.list-evaluate-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //justify-content: space-between;
  align-items: center;

  .list-row-wrap {
    margin-bottom: 10PX;
    margin-right: 8PX;
    padding: 2PX 8PX;
    border-radius: 18PX;
  }

  .inActive {
    background: #F9F9F9;
    @include commonFontStyle(14PX, 400, #666)
  }

  .active {

    background: #06B48D;
    @include commonFontStyle(14PX, 400, #fff);
  }

}

.list-row-topic-evaluate{
  margin-top: 8PX;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 106PX;
  padding:13PX 8PX;
  background: #fff;
  margin-left: 16PX;
  margin-right: 16PX;
  border-radius: 5PX;
    .title{
      @include commonFontStyle(14PX,500,#333,PingFangSC-Medium)
    }
    .list-row{
      margin-top: 10PX;
      display: flex;
      flex-direction: row;
      align-items: center;
        .label{
          margin-right: 14PX;
          font-size: 14PX;
          color: #333333;
        }

    }
}
.at-rate__icon--off {
  //color: #FFFFFF;
}
</style>
