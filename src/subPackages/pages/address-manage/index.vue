<template>
  <view class="container">
    <at-virtual-scroll
      bench="10"
      v-if="shippingAddrList.length!=0"
      :height="Taro.getSystemInfoSync().windowHeight-10"
      :items="shippingAddrList"
      :item-height="113.0"
    >
      <template #default="{ index, item }">
        <view class="list-row-address">
          <view class="list-row-wrap">
            <view class="left-wrap">
              <view class="top">
                <text class="name">{{item.contactName}}</text>
                <text class="phone">{{ desensitizationMobile(item.contactMobile) }}</text>
                <text v-if="item.isDefault==1" class="default-value">默认</text>
              </view>
              <text class="address">{{ item.addrData+item.addrDetail }}</text>
              <view class="radio-wrap" @tap="setDefaultAddr(item.addrId)">
                <radio style="transform: scale(0.7);" color="#06B48D"  :checked="item.isDefault==1?true:false"/>
                <text class="radio">设置默认</text>
              </view>
            </view>
            <image :src="require('@assets/user/address_edit.png')" class="right-edit" @tap="()=>Taro.navigateTo({
              url:`/subPackagesB/pages/add-shipping-address/index?addrId=${item.addrId}`
            })"/>
          </view>
        </view>
      </template>
    </at-virtual-scroll>
    <empty v-if="shippingAddrList.length==0"  :empty-img="require('@assets/no_address.png')" :empty-text="'暂无收货地址'"/>
    <view class="footer" style="bottom:17PX" @tap="addReceiveGoodsAddress">
      <view class="btn-submit-view">
        <text class="btn-submit-text">添加收货地址</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from '@tarojs/taro'
import {computed, onMounted} from "vue";
import store from "../../../store";
import {desensitizationMobile} from "../../../utils/common";
import {desensitizationIdCard} from "../../../utils/common";
import empty from "../../../components/empty";
import {callUpdateAddrByAddrIdApi} from "../../../services/SyncRequest";
const shippingAddrList = computed(() => store.getters.getShippingAddrList)
onMounted(() => {
  store.dispatch('getShippingAddrList', {});
})
const addReceiveGoodsAddress = () => {
  Taro.navigateTo({
    url: '/subPackagesB/pages/add-shipping-address/index'
  })
}
const setDefaultAddr=async (addrId)=>{
  const res = await  callUpdateAddrByAddrIdApi({
     addrId,
     isDefault:1
  })
  if(res.code==200){
    await store.dispatch('getShippingAddrList', {});
  }
}
</script>
<style lang="scss">
@import '../../../mixin';

.container {
  height: 100%;
  background: #f9f9f9;
  @include top_line();
}

.list-row-address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 108PX;
  background: #fff;
  margin-bottom: 10PX;
  padding-left: 16PX;
  padding-right: 16PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left-wrap {
      display: flex;
      flex-direction: column;

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;

        .name {
          @include commonFontStyle(14PX, 400, #333)
        }

        .phone {
          margin-left: 10PX;
          @include commonFontStyle(14PX, 400, #888)
        }

        .default-value {
          margin-left: 9PX;
          width: 43PX;
          text-align: center;
          height: 18PX;
          line-height: 18PX;
          @include commonFontStyle(12PX, 400, #06B48D);
          @include all(#06B48D, 9PX)
        }

      }

      .address {
        margin-top: 4PX;
        @include commonFontStyle(14PX, 400, #333);
      }

      .radio-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 22PX;

        .radio {
          @include commonFontStyle(14PX, 400, #999)
        }
      }
    }

    .right-edit {
      width: 19PX;
      height: 18PX;

    }
  }

}
.empty_data{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35%;
  .img{
    width: 200PX !important;
    height: 128PX !important;
  }
  .empty_text{
    margin-top: 23PX !important;
    @include commonFontStyle(16PX,400,#999999,)
  }

}
</style>
