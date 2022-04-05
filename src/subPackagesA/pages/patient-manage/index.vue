<template>
  <view class="container">
    <at-virtual-scroll
      bench="10"
      v-if="patientList.length!==0"
      :height="Taro.getSystemInfoSync().windowHeight-10"
      :items="patientList"
      :item-height="113.0"
    >
      <template #default="{ index, item }">
        <AtSwipeAction
          style="height:103PX"
          :key="item.patientId"
          :onOpened="handleSingle"
          :isOpened="false"
          @click="onDeletePatient(item.patientId)"
          :options="[{
          text: '删除',
          style: {
          color:'#fff',
          backgroundColor: 'red'}}
          ]"
        >
          <view class="list-row-medicine">
            <view class="list-row-wrap">
              <view class="left-wrap">
                <view class="top">
                  <text class="name">{{ item.patientName }}</text>
                  <view class="default" v-if="item.isDefault==1">
                    <text>默认</text>
                  </view>
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
              <image :src="require('@assets/user/edit.png')" class="edit" @tap="()=>Taro.navigateTo({
            url:`/subPackages/pages/add-patient/index?patientId=${item.patientId}`
          })"/>
            </view>
          </view>
        </AtSwipeAction>
      </template>
    </at-virtual-scroll>
    <empty v-if="patientList.length==0" :empty-img="require('@assets/empty.png')" :empty-text="'暂无就诊人，请点击添加'"/>
    <view class="footer" style="bottom:17PX" @tap="addMedicineVisit">
      <view class="btn-submit-view">
        <text class="btn-submit-text">添加就诊人</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from '@tarojs/taro'
import {desensitizationMobile, desensitizationIdCard} from "../../../utils/common";
import {computed, onMounted, ref, toRaw} from "vue";
import store from "../../../store";
import {callDeletePatientApi} from "../../../services/SyncRequest";
import empty from '@components/empty/index'
import Empty from "../../../components/empty";
const patientList = computed(() => store.getters.getPatientList);
onMounted(() => {
  store.dispatch('getPatient', {})
})

const handleSingle = () => {

}
const onDeletePatient = async (patientId) => {
  const res = await callDeletePatientApi(patientId);
  if (res.code == 200) {
    Taro.showToast({
      title: '删除成功',
      icon: 'none',
      duration: 3500
    })
    store.dispatch('getPatient', {});
  }
}
const addMedicineVisit = (patientId) => {
  Taro.navigateTo({
    url: `/subPackages/pages/add-patient/index`
  })

}
</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
  padding-top: 10PX;
  position: relative;
}

.list-row-medicine {
  display: flex;
  border-radius: 5PX;
  flex-direction: column;
  justify-content: center;
  height: 103PX;
  margin: 0 16PX 10PX 16PX;
  background: #fff;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10PX 0 10PX;
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

        .default {
          margin-left: 15PX;
          width: 43PX;
          height: 18PX;
          line-height: 18PX;
          text-align: center;
          @include all(#06B48D, 9PX);
          @include commonFontStyle(12PX, 400, #06B48D)
        }
      }

      .center {
        display: flex;
        margin-top: 13PX;
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
        margin-top: 8PX;
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

    .edit {
      width: 16PX;
      height: 16PX;
    }
  }
}

</style>
