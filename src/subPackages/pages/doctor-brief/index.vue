<template>
  <view class="container">
    <view class="list-row-header">
      <view class="list-row-wrap">
        <view class="left">
          <image class="img" :src="isExistImg(obj?.photoUrl)? obj.photoUrl:require('@assets/home/avatar.png')"/>
          <view class="right-wrap">
            <text class="name">{{ obj?.realName??'' }}</text>
            <view class="center">
              <view class="profession">{{ obj?.protitleName??'' }}</view>
              <view class="major">{{ obj?.deptName??'' }}</view>
            </view>
            <view class="bottom" @tap="jumpToHospitalBrief">
              <text class="hospital">{{ obj?.orgName??'' }}</text>
              <image :src="require('@assets/svg/more.svg')" class="img"/>
            </view>
          </view>
        </view>
        <view :class="focused==1?'focused':'focus'" @tap="focusDoc">
          <text>{{focused==1?'已关注':'关注'}}</text>
        </view>
      </view>
      <text class="major-1">擅长：{{obj?.expertIn??''}}</text>
    </view>
    <view class="list-row-experience">
      <image :src="require('@assets/home/work.png')" class="img"/>
      <text class="txt-experience">执业经历</text>
    </view>
    <view class="experience">
      <text>{{obj?.drInfo??''}}</text>
    </view>
  </view>
</template>
<script setup>
import {isExistImg} from "../../../utils/RegUtil";
import Taro from '@tarojs/taro';
import store from "../../../store";
import {callIsAttentionByIdApi} from "../../../services/SyncRequest";
import {onMounted, ref} from "vue";
const {item} = Taro.getCurrentInstance().router.params;
let obj =JSON.parse(item);
  const jumpToHospitalBrief =()=>{
     Taro.navigateTo({
       url:`/subPackages/pages/hospital-brief/index`
     })
  }
  const focused = ref(0);
  onMounted(async ()=>{
    const {userId} = JSON.parse(item);
    const res = await callIsAttentionByIdApi(userId);
    if(res.code==200){
      focused.value = res.data;
    }
  })
  const focusDoc=async ()=>{
    const {item} = Taro.getCurrentInstance().router.params;
    const {userId} = JSON.parse(item);
    if(focused.value==1){
      focused.value =0;
    }else{
      focused.value = 1;
    }
    store.dispatch('attention', {docId:userId,useFlag:focused.value}).then(res=>{
      if(res.code ==200){}
    })
  }
</script>
<style lang="scss">
@import "../../../mixin";
@mixin fl{
  height: 18PX;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(9, 187, 143, 0.07);
  border-radius: 9PX;
  opacity: 0.8;
  padding-left: 9PX;
  padding-right: 9PX;
  border: 1px solid rgba(9, 187, 143, 0.78);
}
.container {
  height: 100%;
  background: #fff;
  position: relative;
  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    content: '';
    border-top: 1px solid #EEEEEE;
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.list-row-header {
  display: flex;
  padding: 16PX;
  flex-direction: column;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        width: 59PX;
        height: 59PX;
      }

      .right-wrap {
        margin-left: 16PX;
        display: flex;
        flex-direction: column;

        .name {
          @include commonFontStyle(18PX, 400, #333);
        }

        .center {
          margin-top: 8PX;
          display: flex;
          flex-direction: row;
          align-items: center;
          @include commonFontStyle(13PX, 400, #09BB8F);
          .profession {
            @include fl;
          }

          .major {
            margin-left: 9PX;
            @include fl;
          }
        }

        .bottom {
          margin-top: 9PX;
          display: flex;
          flex-direction: row;
          align-items: center;

          .hospital {
            font-size: 14PX;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
          }

          .img {
            margin-left: 8PX;
            width: 12PX;
            height: 12PX;
          }
        }
      }
    }

    .focused {
      height: 20PX;
      line-height: 20PX;
      padding-left: 12PX;
      padding-right: 12PX;
      background: #09BB8F;
      border-radius: 11PX;
      @include commonFontStyle(12PX,400,#fff);
    }
    .focus {
      height: 20PX;
      line-height: 20PX;
      padding-left: 12PX;
      padding-right: 12PX;
      background: #999999;
      border-radius: 11PX;
      @include commonFontStyle(12PX,400,#fff);
    }
  }
  .major-1{
    margin-top: 9PX;
    @include commonFontStyle(14PX,400,#777)
  }
}
.list-row-experience{
  display: flex;
  padding-left: 16PX;
  flex-direction: row;
  align-items: center;
    .img{
      width: 16PX;
      height: 16PX;
    }
    .txt-experience{
      margin-left: 12PX;
      @include commonFontStyle(16PX,400,#333)
    }
}
.experience{
  margin-top: 14PX;
  padding-left: 16PX;
  padding-right: 16PX;
  @include commonFontStyle(14PX,400,#444);
  line-height: 28PX;
  text-indent: 2em;
  text-align: justify;
  text-justify: inter-ideograph;
}
</style>
