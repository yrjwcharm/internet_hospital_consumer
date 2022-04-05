<template>
  <view class="container">
    <view class="form">
      <view class="list-row-input is_bottom_line">
        <view class="list-row-wrap">
          <text class="label">收货人</text>
          <input type="text" class="input" :value="name" :onInput="handleNameInput" placeholder="收货人姓名"
                 placeholderClass="placeholder-class">
        </view>
      </view>
      <view class="list-row-input is_bottom_line">
        <view class="list-row-wrap">
          <text class="label">手机号</text>
          <input type="number" class="input" :value="phone" :onInput="handlePhoneInput" placeholder="收货人手机号"
                 placeholderClass="placeholder-class">
        </view>
      </view>
      <picker :value='picker_key' mode="multiSelector" :onChange='cityChangePicker'
              :onColumnchange='cityColumnChangePicker' :range='multiArray'>
        <view class="list-row-input is_bottom_line">
          <view class="list-row-wrap">
            <text class="label">地区</text>
            <input type="text" disabled class="input" :value="address" placeholder="点击选择"
                   placeholderClass="placeholder-class">
            <image :src="require('@assets/home/arrow-right.png')" class="forward"/>
          </view>
        </view>
      </picker>
      <view class="list-row-input">
        <view class="list-row-wrap">
          <text class="label">详细地址</text>
          <input type="text" disabled class="input" :onInput="detailAddressInput" :value="detailAddress"
                 placeholder="如街道、门牌号、小区、乡镇、村等" placeholderClass="placeholder-class">
          <image :src="null" class="location"/>
        </view>
      </view>
    </view>
    <view class="list-row-default">
      <view class="list-row-wrap">
        <text class="label">设为默认地址</text>
        <AtSwitch style="transform: scale(0.5)" :onChange="onChange" color="#06B48D"  :checked="isDefaultValue"/>
      </view>
    </view>
    <view class="list-row-save" @tap="saveShippingAddr">
      <text>保存</text>
    </view>
  </view>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {isEmpty, isMobile} from "../../../utils/RegUtil";
import store from "../../../store";
import  Taro from '@tarojs/taro'
import {
  callAddShippingAddrApi,
  callQueryAddrByAddrIdApi,
  callUpdateAddrByAddrIdApi
} from "../../../services/SyncRequest";
const cityRange = require('@assets/region.json');
const multiArray = ref([]);
const provinceId = ref('');
const cityId = ref('');
const districtId = ref('');
const name = ref('');
const picker_key = ref([]);
const phone = ref('');
const address = ref('');
const detailAddress = ref('');
const isDefaultValue = ref(true);
const {addrId} = Taro.getCurrentInstance().router.params;
onMounted(() => {
  if(!isEmpty(addrId)){
    Taro.setNavigationBarTitle({
      title:'修改收货地址'
    })
  }else{
    Taro.setNavigationBarTitle({
      title:'添加收货地址'
    })
  }
  initData();
})
const initData =async () => {
  const res = await callQueryAddrByAddrIdApi(addrId);
  console.log(333,res);
  if(res.code ==200){
    const {addrDetail,addrData,contactName,contactMobile,isDefault}=res.data;
    isDefaultValue.value = isDefault==1?true:false;
    name.value = contactName;
    phone.value = contactMobile;
    address.value =addrData;
    detailAddress.value = addrDetail;
  }

  getPickerCity([0, 0, 0]);

}
const onChange=(bool)=>{
  isDefaultValue.value = bool;
}
const getPickerCity = (key) => {

  let province = [];//省
  let city = [];//市
  let county = [];//区

  //省
  cityRange.forEach(provinces => {
    province.push(provinces['text'])
  });

  //市
  if (cityRange[key[0]]['children'] && cityRange[key[0]]['children'].length > 0) {
    cityRange[key[0]]['children'].forEach(citys => {
      city.push(citys['text'])
    })
  }
  //区县
  cityRange[key[0]]['children'][key[1]]['children'].forEach(countys => {
    county.push(countys['text'])
  });
  let alls = [];
  alls.push(province)
  alls.push(city)
  alls.push(county)
  multiArray.value = alls;
  // setMultiArray(alls);
  // setPickerKey(key);
  picker_key.value = key;
}
const cityColumnChangePicker = (e) => {
  let {column, value} = e.detail
  switch (column) {
    case 0:
      getPickerCity([value, 0, 0])
      break;
    case 1:
      getPickerCity([picker_key.value[0], value, 0])
      break;
    case 2:
      getPickerCity([picker_key.value[0], picker_key.value[1], value])
      break;
    default:
      break;
  }
}
const cityChangePicker = (e) => {
  let value = e.detail.value;
  if (cityRange.length > 0) {
    let province = cityRange[value[0]];
    let city = cityRange[value[0]].children[value[1]];
    let district = cityRange[value[0]].children[value[1]].children[value[2]];
    // setArea(province.text + " " + city.text + " " + address.text);
    address.value = province.text + " " + city.text + " " + district.text;
    provinceId.value = province.value;
    cityId.value = city.value;
    districtId.value = district.value;
    // setProvinceId(province.value);
    // setCityId(city.value);
    // setaddressId(address.value);
    // console.log(2222, province.value, city.value, address.value);
    // let id = cityRange[value[0]].children[value[1]].children[value[2]].value
  }
}

const handleNameInput = (e) => {
   name.value = e.detail.value;
}
const handlePhoneInput = (e) => {
   phone.value = e.detail.value;
}
const detailAddressInput = (e) => {
   detailAddress.value = e.detail.value;
}
const saveShippingAddr=async ()=>{
  if(isEmpty(name.value)){
    Taro.showToast({
      title:'收货人姓名不能为空',
      icon:'none',
      duration:3500
    })
    return;
  }
  if(!isMobile(phone.value)){
    Taro.showToast({
      title:'手机号格式不正确',
      icon:'none',
      duration:3500
    })
    return;
  }
  if(isEmpty(address.value)){
    Taro.showToast({
      title:'请选择地区',
      icon:'none',
      duration:3500
    })
    return;
  }
  if(isEmpty(detailAddress.value)){
    Taro.showToast({
      title:'详细地址不能为空',
      icon:'none',
      duration:3500
    })
    return;
  }
  let params ={
    contactName:name.value,
    contactMobile:phone.value,
    province:provinceId.value,
    city:cityId.value,
    areaId:districtId.value,
    addrDetail:detailAddress.value,
    isDefault:isDefaultValue.value?1:0
  };
  if(!isEmpty(addrId)){
     params.addrId = addrId;
  }
  console.log(333,addrId);
  const res = isEmpty(addrId)? await  callAddShippingAddrApi(params) : await  callUpdateAddrByAddrIdApi(params);
  if(res.code==200){
    store.dispatch('getShippingAddrList',{});
    Taro.navigateBack({
      delta:1
    })
  }
}
</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
  @include top_line();
}

.form {
  display: flex;
  background: #fff;
  flex-direction: column;

  .is_bottom_line {
    @include bottom_line();
  }

  .list-row-input {
    display: flex;
    padding-left: 16PX;
    padding-right: 16PX;
    flex-direction: column;
    height: 44PX;
    justify-content: center;

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;

      .label {
        width: 72PX;
        text-align: left;
        @include commonFontStyle(14PX, 400, #333);
      }

      .input {
        caret-color: #666;
        flex: 1;
        font-size: 14PX;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }

      .placeholder-class {
        color: #999;
      }

      .forward {
        width: 8PX;
        height: 14PX;
      }

      .location {
        width: 12PX;
        height: 16PX;
      }
    }
  }
}

.list-row-default {
  display: flex;
  margin-top: 10PX;
  background: #fff;
  padding-left: 16PX;
  padding-right: 16PX;
  flex-direction: column;
  height: 44PX;
  justify-content: center;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .label {
      text-align: left;
      @include commonFontStyle(14PX, 400, #333);
    }
  }
}

.list-row-save {
  background: #06B48D;
  border-radius: 25PX;
  margin-top: 118PX;
  height: 40PX;
  justify-content: center;
  display: flex;
  margin-left: 16PX;
  margin-right: 16PX;
  flex-direction: row;
  align-items: center;
  @include commonFontStyle(16PX, 500, #fff, PingFangSC-Medium)
}
</style>
