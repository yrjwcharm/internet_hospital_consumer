<template>
  <view class="container">
    <view class="write-info">
      <view class="list-row-input">
        <view class="list-row-wrap">
          <text class="label">姓名</text>
          <input type="text" :value="name"  :onInput="handleNameInput" class="input" placeholderClass="placeholder-class" placeholder="请输入姓名">
        </view>
      </view>
<!--      <picker-->
<!--        mode='selector'-->
<!--        :range="cardTypeList"-->
<!--        :rangeKey="'detailName'"-->
<!--        :value="cardType"-->
<!--        @change="handleCardTypeChange"-->
<!--        @cancel="handleCardTypeCancel"-->
<!--      >-->
<!--        <view class="list-row-input">-->
<!--          <view class="list-row-wrap">-->
<!--            <text class="label">证件类型</text>-->
<!--            <input type="text" :value="cardType" :disabled="true" class="input" placeholderClass="placeholder-class"-->
<!--                   placeholder="请选择证件类型">-->
<!--            <image :src="require('@assets/home/forward.png')" class="forward"/>-->
<!--          </view>-->
<!--        </view>-->
<!--      </picker>-->
      <view class="list-row-input">
        <view class="list-row-wrap">
          <text class="label">证件类型</text>
          <input type="text" :value="cardType" :disabled="true" class="input" placeholderClass="placeholder-class"
                 placeholder="身份证">
<!--          <image :src="require('@assets/home/forward.png')" class="forward"/>-->
        </view>
      </view>
      <view class="list-row-input">
        <view class="list-row-wrap">

          <text class="label">身份证号</text>
          <input type="cardNum" :disabled="!isEmpty(patientId)?true:false" :value="cardNum" :onInput="handleCardNumInput" class="input" placeholderClass="placeholder-class"
                 placeholder="请输入证件号码">
        </view>
      </view>
      <view class="list-row-input">
        <view class="list-row-wrap">

          <text class="label">手机号码</text>
          <input type="number" :value="phone" :onInput="handlePhoneInput" class="input" placeholderClass="placeholder-class" placeholder="请输入手机号码">
        </view>
      </view>
      <picker
        mode='selector'
        :range="memberRelationList"
        :value="memberRelation"
        @change="handleMemberRelationChange"
        @cancel="handleMemberRelationCancel"
      >
        <view class="list-row-input">
          <view class="list-row-wrap">
            <text class="label">成员关系</text>
            <input type="text" :value="memberRelation" :disabled="true" class="input"
                   placeholderClass="placeholder-class"
                   placeholder="请选择">
            <image :src="require('@assets/home/forward.png')" class="forward"/>
          </view>
        </view>
      </picker>
      <picker :value='picker_key' mode="multiSelector" :onChange='cityChangePicker'
              :onColumnchange='cityColumnChangePicker' :range='multiArray'>
      <view class="list-row-input">
        <view class="list-row-wrap">
          <text class="label">选择地区</text>
          <input type="text" :value="address" :disabled="true" class="input" placeholderClass="placeholder-class"
                 placeholder="请选择">
          <image :src="require('@assets/home/forward.png')" class="forward"/>
        </view>
      </view>
      </picker>
      <view class="list-row-input">
        <view class="list-row-wrap">
          <text class="label">详细地址</text>
          <input type="text" :value="detailAddress" :onInput="handleDetailAddressInput" class="input" placeholderClass="placeholder-class"
                 placeholder="请输入街道门牌信息">
        </view>
      </view>
    </view>
    <view class="list-row-switch">
      <view class="list-row-wrap">
        <text class="label1">设置默认就诊人</text>
        <switch style="transform: scale(0.7)" :onChange="onChange" :checked="isDefault" color="#06B48D"/>
      </view>
    </view>
    <view class="bind-card">
      <view class="list-row-bind" @tap="bindEletricCard">
        <view class="list-row-wrap">
          <text class="label">电子健康卡</text>
          <text class="value">绑定</text>
        </view>
      </view>
      <view class="list-row-bind" @tap="bindMedicalCard">
        <view class="list-row-wrap">
          <text class="label">医保卡</text>
          <text class="value">绑定</text>
        </view>
      </view>
    </view>
    <view class="footer" style="bottom:17PX" @tap="savePatient">
      <view class="btn-submit-view">
        <text class="btn-submit-text">保存</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Taro from '@tarojs/taro'
import store from "../../../store";
import {
  isDriverLicense,
  isEmpty,
  isHongKongMacaoPass,
  isIdCard,
  isMobile,
  isOfficerCard,
  isPassport,
  isResidenceBooklet, isTaiWanPass
} from "../../../utils/RegUtil";
import {
  callAddPatientApi,
  callGetDataDicApi,
  callQueryPatientByPatientId,
  callUpdatePatient
} from "../../../services/SyncRequest";
const cityRange = require('@assets/region.json');
const cardTypeList = ref([]);
const multiArray = ref([]);
const medicalCard = ref('');
const healthCard = ref('');
const picker_key = ref([]);
const name = ref('');
const cardTypeId = ref('25');
const cardNum = ref('');
const phone = ref('');
const address = ref('');
const provinceId=ref('');
const cityId = ref('');
const districtId = ref('');
const isDefault = ref(true);
const memberRelationList = ref([
  "本人",
  "父亲",
  '母亲',
  "爷爷",
  '奶奶',
  '丈夫',
  '妻子',
  '儿子',
  '女儿',
  '其他亲属',
  '非亲属',
]);
const memberRelation = ref('');
const detailAddress = ref('');
const handleNameInput = (e) => {
  name.value = e.detail.value;
}
const handleCardNumInput=(e)=>{
  cardNum.value = e.detail.value;
}
const handlePhoneInput=(e)=>{
  phone.value = e.detail.value;
}
const handleDetailAddressInput=(e)=>{
  detailAddress.value = e.detail.value;
}
const onChange=(e)=>{
  isDefault.value = e.detail.value;
}
const {patientId}=Taro.getCurrentInstance().router.params;
onMounted(async () => {
  if(!isEmpty(patientId)){
    Taro.setNavigationBarTitle({
      title:'修改就诊人'
    })
  }else {
    Taro.setNavigationBarTitle({
      title:'添加就诊人'
    })
  }

  const res = await Promise.all([callGetDataDicApi({dictId: 12}),callQueryPatientByPatientId(patientId)])
  if (res[0].code == 200) {
    cardTypeList.value = res[0].data;
  }
  if(res[1].code ==200){
    const {addrHome,birthday,cardno,addrData,provinceid,cityid,districtid,extend1,
      extend2,healthCardNo,miCardno,mobile,patientname,sex,useflag,}=res[1].data;
      name.value = patientname;
      cardNum.value = cardno;
      phone.value = mobile;
      provinceId.value = provinceid;
      cityId.value = cityid;
      districtId .value = districtid;
      address.value = addrData;
      memberRelation.value = extend1;
      detailAddress.value = addrHome;
      isDefault.value = extend2==1?true:false

  }
  getPickerCity([0, 0, 0]);
})
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
    // setArea(province.text + " " + city.text + " " + district.text);
    address.value = province.text + " " + city.text + " " + district.text;
    provinceId.value = province.value;
    cityId.value = city.value;
    districtId.value = district.value;
    // setProvinceId(province.value);
    // setCityId(city.value);
    // setDistrictId(district.value);
    // console.log(2222, province.value, city.value, district.value);
    // let id = cityRange[value[0]].children[value[1]].children[value[2]].value
  }
}
const bindEletricCard = () => {
  Taro.navigateTo({
    url: '/subPackagesB/pages/electronic-health-card/index'
  })
}
const bindMedicalCard = () => {
  Taro.navigateTo({
    url: '/subPackagesB/pages/medicare-card/index'
  })
}
const handleCardTypeChange = (e) => {
  cardType.value = cardTypeList.value[e.detail.value].detailName;
  cardTypeId.value = cardTypeList.value[e.detail.value].valueId;
}
const handleCardTypeCancel = () => {
}
const handleMemberRelationChange = (e) => {
   memberRelation.value = memberRelationList.value[ e.detail.value];
}
const handleMemberRelationCancel = () => {

}
const savePatient = async () => {
  if (isEmpty(name.value)) {
    Taro.showToast({
      title: '请输入姓名',
      icon: 'none',
      duration: 3500
    })
    return;
  }
  // if (isEmpty(cardTypeId.value)) {
  //   Taro.showToast({
  //     title: '请选择证件类型',
  //     icon: 'none',
  //     duration: 3500
  //   })
  //   return;
  // }
  // if (cardTypeId.value == 25) {
  //   if (isIdCard(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 26) {
  //   if (isResidenceBooklet(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 27) {
  //   if (isPassport(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 28) {
  //   if (isOfficerCard(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 29) {
  //   if (isDriverLicense(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 30) {
  //   if (isHongKongMacaoPass(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 31) {
  //   if (isTaiWanPass(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
  // if (cardTypeId.value == 25) {
  //   if (isIdCard(cardNum.value)) {
  //     Taro.showToast({
  //       title: '请输入有效证件号',
  //       icon: 'none',
  //       duration: 3500
  //     })
  //     return;
  //   }
  // }
    if (!isIdCard(cardNum.value)) {
      Taro.showToast({
        title: '请输入身份证号',
        icon: 'none',
        duration: 3500
      })
      return;
    }
  if (!isMobile(phone.value)) {
    Taro.showToast({
      title: '请输入有效手机号码',
      icon: 'none',
      duration: 3500
    })
    return;
  }
  if (isEmpty(memberRelation.value)) {
    Taro.showToast({
      title: '请选择成员关系',
      icon: 'none',
      duration: 3500
    })
    return;
  }
  if (isEmpty(address.value)) {
    Taro.showToast({
      title: '请选择地区',
      icon: 'none',
      duration: 3500
    })
    return;
  }
  if (isEmpty(detailAddress.value)) {
    Taro.showToast({
      title: '请速入详细地址',
      icon: 'none',
      duration: 3500
    })
    return;
  }
  let org_birthday = cardNum.value.substring(6, 14);
  let org_gender = cardNum.value.substring(16, 17);
  let gender = org_gender % 2 == 1 ? "1" : "2";
  let birthday = org_birthday.substring(0, 4) + "-" + org_birthday.substring(4, 6) + "-" + org_birthday.substring(6, 8);
  let birthdays = new Date(birthday.replace(/-/g, "/"));
  let d = new Date();
  let age = d.getFullYear() - birthdays.getFullYear() - (d.getMonth() < birthdays.getMonth() || (d.getMonth() == birthdays.getMonth() && d.getDate() < birthdays.getDate()) ? 1 : 0);
  let params= {
    "patientname": name.value, //就诊人姓名
    "birthday": birthday, //就诊人生日
    "sex": gender, //就诊人性别
    "cardtype": cardTypeId.value, //证件类别
    "cardno": cardNum.value, //证件号
    "mobile": phone.value, //手机号码
    "extend1": memberRelation.value, //就诊人与当前登录用户的关系
    "provinceid": provinceId.value, //省
    "cityid":cityId.value, //市
    "districtid": districtId.value, //区县
    "addrHome":detailAddress.value, //详细地址
    "extend2": isDefault.value?1:0, //是否设置为默认就诊人(0-否1-是)
    "healthCardNo": healthCard.value, //健康卡
    "miCardno": medicalCard .value//医保卡
  }
  if(!isEmpty(patientId)) params.patientId=patientId;
  const res = isEmpty(patientId)? await callAddPatientApi(params) : await callUpdatePatient(params)
  if(res.code==200){
    store.dispatch('getPatient',{})
    Taro.navigateBack({delta:1})

  }
}
</script>

<style lang="scss">
@import "../../../mixin";

.container {
  padding: 16PX;
  height: 100%;
  background: #f9f9f9;
}

.write-info {
  background: #fff;
  border-radius: 5PX;

  .list-row-input {
    display: flex;
    height: 44PX;
    padding-left: 8PX;
    padding-right: 8PX;
    @include bottom_line();

    .list-row-wrap {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .forward {
        width: 7PX;
        margin-left: 8PX;
        height: 13PX;
      }

      .label {
        display: inline-block;
        width: 56PX;
        font-size: 14PX;
        text-align: left;
      }

      .input {
        flex: 1;
        text-align: right;
        caret-color: #666;
        font-size: 14PX;
      }

      .placeholder-class {
        color: #999;
      }
    }
  }
}

.list-row-switch {
  display: flex;
  height: 44PX;
  margin-top: 10PX;
  background: #fff;
  border-radius: 5PX;
  flex-direction: column;
  justify-content: center;
  padding-left: 8PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .label {
      display: inline-block;
      width: 56PX;
      font-size: 14PX;
      text-align: left;
    }

    .label1 {
      display: inline-block;
      font-size: 14PX;
      text-align: left;
    }
  }

}

.bind-card {
  background: #FFFFFF;
  border-radius: 5PX;
  margin-top: 8PX;

  .list-row-bind {
    display: flex;
    flex-direction: column;
    padding-left: 8PX;
    padding-right: 8PX;
    justify-content: center;
    height: 44PX;
    @include bottom_line();

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .label {
        @include commonFontStyle(14PX, 400, #333)
      }

      .value {
        @include commonFontStyle(14PX, 400, #06B48D)
      }
    }
  }
}

</style>
