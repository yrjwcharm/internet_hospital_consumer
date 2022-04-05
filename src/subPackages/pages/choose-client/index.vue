<template>
  <view class="container">
    <at-virtual-scroll
      bench="5"
      v-if="patientList.length!==0"
      :height="Taro.getSystemInfoSync().windowHeight"
      :items="patientList"
      :item-height="111.0"
    >
      <template #default="{ index, item }">
        <view class="list-row-client" @tap="choosePatient(item)">
          <view class="list-row-wrap">
            <view class="left-wrap">
              <view class="top">
                <text class="name">{{ item.patientName }}</text>
                <text class="gender">{{ item.patientSex }}</text>
                <text class="separator">|</text>
                <text class="age">{{ item.patientAge }}岁</text>
              </view>
              <view class="center">
                <text class="phone-label">手机号码</text>
                <text class="phone-value">{{ desensitizationMobile(item.mobile) }}</text>
              </view>
              <view class="bottom">
                <text class="idcard-label">身份证</text>
                <text class="idcard-value">{{ desensitizationIdCard(item.cardNo) }}</text>
              </view>
            </view>
            <view class="right-wrap" v-if="item.isDefault==1">
              <text>默认</text>
            </view>
          </view>
        </view>
      </template>
    </at-virtual-scroll>
    <empty v-if="patientList.length==0" :empty-img="require('@assets/empty.png')" :empty-text="'暂无就诊人，请点击添加'"/>
    <view class="footer" style="bottom:17PX;" @tap="jumpToAddClient">
      <view class="btn-submit-view">
        <text class="btn-submit-text">添加就诊人</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {desensitizationIdCard, desensitizationMobile} from '@utils/common'
import Taro from '@tarojs/taro'
import store from "../../../store";

const patientList = computed(() => store.getters.getPatientList);
onMounted(() => {
  store.dispatch('getPatient', {})
})

const choosePatient = (item) => {
  Taro.eventCenter.trigger('getPatientName', item);
  Taro.navigateBack({delta: 1});
}
const jumpToAddClient = () => {
  Taro.navigateTo({
    url: '/subPackages/pages/add-patient/index'
  })
}
const isIphoneX = Taro.getStorageSync('isIphoneX');
</script>

<style lang="scss">
@import "../../../mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  padding-top: 10PX;
}

.list-row-client {
  display: flex;
  flex-direction: column;
  height: 103PX;
  margin-bottom: 10PX;
  margin-left: 16PX;
  margin-right: 16PX;
  padding-left: 8PX;
  padding-right: 8PX;
  justify-content: center;
  background: #FFFFFF;
  border-radius: 5PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left-wrap {
      display: flex;
      flex-direction: column;

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;

        .name {
          @include commonFontStyle(16PX, 500, #333, PingFangSC-Medium)
        }

        .gender {
          margin-left: 19PX;
        }

        .separator {
          margin-left: 4PX;
          margin-right: 4PX;
        }

        .gender, .separator, .age {
          @include commonFontStyle(14PX, 400, #333)
        }
      }

      .center {
        margin-top: 8PX;
        display: flex;
        flex-direction: row;
        align-items: center;
        @include commonFontStyle(13PX, 400, #666);

        .phone-label {

        }

        .phone-value {
          margin-left: 15PX;
        }
      }

      .bottom {
        margin-top: 7PX;
        display: flex;
        flex-direction: row;
        align-items: center;
        @include commonFontStyle(13PX, 400, #666);

        .idcard-label {

        }

        .idcard-value {
          margin-left: 28PX;
        }

      }
    }

    .right-wrap {
      width: 43PX;
      height: 18PX;
      @include all(#06B48D, 9PX);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      @include commonFontStyle(12PX, 400, #06B48D)
    }
  }
}
</style>
