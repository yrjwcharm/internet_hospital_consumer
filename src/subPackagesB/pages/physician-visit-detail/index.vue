<template>
  <view class="container">
    <view class="list-row-patient" @tap="jumpToChooseClient">
      <view class="list-row-wrap">
        <text class="name">
          就诊人
        </text>
        <view class="right-forward">
          <text :class="isEmpty(patientName)?'choice-patient':'active-choice-patient'">{{isEmpty(patientName)?'请选择就诊人':patientName}}</text>
          <image :src="require('@assets/home/forward-img.png')" class="forward"/>
        </view>
      </view>
    </view>
    <view class="body">
      <text class="label">
        请描述你的病情
      </text>
      <AtTextarea
        placeholder-class="placeholder"
        class="textarea"
        :value="caseDetail"
        @change="handleChange"
        :maxLength="200"
        placeholder='请描述您的症状、就诊信息等信息，方便医生诊断。'
      />
      <text class="label top">
        本次患病多久了
      </text>
      <view class="list-row-long">
        <template v-for="(item,index) in listItems" :key="index">
          <view :class="item.checked?'list-item active':'list-item normal'" @tap="onListItemTap(item,listItems)">
            <text>{{ item.title }}</text>
          </view>
        </template>
      </view>
      <text class="label go-hospital">
        此病情是否去医院就诊过
      </text>
      <view class="list-row-long fl-box">
        <template v-for="(item,index) in boolOptions" :key="index">
          <view :class="item.checked?'list-item list-item-margin active':'list-item list-item-margin normal'"
                @tap="onListItemTap(item,boolOptions)">
            <text>{{ item.label }}</text>
          </view>
        </template>
      </view>
      <text class="label uplocad-case">
        上传病例资料
      </text>
      <view class="upload">
        <view class="image-upload">
          <AtImagePicker
            multiple
            :length="6"
            mode="aspectFit"
            :files="filesList"
            @change="onChange"
            @fail="onFail"
            @image-click="onImageClick"
          />
          <view class="upload-desc">
            <text class="at-most">上传疾病描述相关病例资料 (最多上传6张)</text>
            <text class="self-see">[照片仅医生及自己可见]</text>
          </view>
        </view>
        <view class="upload-notice">
          <text>1、可上传检查/检验资料、处方资料、患处照片或其他疾病描述相关资料，文件格式jpeg、png、jpg、bmg；
          </text>
          <text>2、每张图片不得超过2M。</text>
        </view>
      </view>
    </view>
    <view class="agree-protocol" @tap="checked=!checked">
      <image class="img" :src="checked?require('@assets/svg/checked.svg'):require('@assets/svg/un_checked.svg')"/>
<!--      <checkbox color='#06B48D'  style="transform:scale(0.8,0.8)" :checked="checked"/>-->
      <text class='txt-agree'>我已阅读相关协议及隐私政策</text>
    </view>
    <view id="_footer" style="bottom:17PX;" @tap="jumpToPay">
      <view class="btn-submit-view">
        <text class="btn-submit-text">提交</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import {computed, onMounted, ref, toRaw,} from "vue";
import Taro from '@tarojs/taro'
import {isEmpty} from "../../../utils/RegUtil";
import {useStore} from "vuex";
import {uuid} from "taro-ui-vue3/lib/utils/common";
import {callCreateOrderApi} from "../../../services/SyncRequest";
const store = useStore();
const caseDetail = ref('');
const checked = ref(false);
const patientName = ref('');
const patientId = ref('');
const isIphoneX = Taro.getStorageSync('isIphoneX');

const boolOptions = ref([
  {
    label: '是',
    value:2,
    checked: false,
  },
  {
    label: '否',
    value:1,
    checked: false,
  }
])
onMounted(() => {
  Taro.eventCenter.on('getPatientName',res=>{
    patientName.value = res.patientName;
    patientId.value = res.patientId;
  })
})
const handleChange = (value) => {
    caseDetail.value = value;
}

const onListItemTap = (item, arr) => {
  arr.map($item => {
    $item.checked = false;
    if (Object.is(item, $item)) {
      $item.checked = true;
    }
  })
}
const jumpToPay =async () => {
  const {item,regDoc,treatType}=Taro.getCurrentInstance().router.params;
  const {resourceId,registerFee}=JSON.parse(item);
  const {userId,realName,deptCode,orgId}=JSON.parse(regDoc);
  const arr = listItems.value.filter(item=>item.checked==true);
  const $arr= boolOptions.value.filter(item=>item.checked==true);
  if(isEmpty(patientId.value)){
    Taro.showToast({
      title:'请选择就诊人',
      icon:'none',
      duration:3500
    })
    return;
  }
  if(isEmpty(caseDetail.value)){
    Taro.showToast({
      title:'请填写病情描述',
      icon:'none',
      duration:3500
    })
    return;
  }
  if(arr.length==0){
    Taro.showToast({
      title:'请选择患病时长',
      icon:'none',
      duration:3500
    })
    return;
  }
  if($arr.length==0){
    Taro.showToast({
      title:'请选择是否就诊过',
      icon:'none',
      duration:3500
    })
    return;
  }

  // if(filesList.value.length==0){
  //   Taro.showToast({
  //     title:'请上传症状图片',
  //     icon:'none',
  //     duration:3500
  //   })
  //   return;
  // }
  if(!checked.value){
     Taro.showToast({
       title:'请先阅读相关协议',
       icon:'none',
       duration:3500,
     })
    return;
  }
  const res = await callCreateOrderApi({
    "resourceId": resourceId, //号源id
    "patientid": patientId.value, //患者id
    "feeall": registerFee, //总金额
    "pafeeall": registerFee, //优惠后金额
    "regDoctorid": userId, //指定挂号医生id
    "regDoctorname": realName, //指定挂号医生姓名
    "deptcode": deptCode, //部门编码
    // "regUserid": "10014", //挂号操作人id
    "orgid": orgId, //机构id
    "caseType": arr[0].value, //初诊复诊(1-初诊2-复诊)
    "pridepict": caseDetail.value, //病情描述
    "illTime": $arr[0].value //患病时间(1-一周内2-一月内3-半年内4-大于半年)
  })
  if(res.code ==200){
    Taro.navigateTo({
      url: `/subPackagesB/pages/wx-pay/index?totalFee=${registerFee}&realName=${realName}&treatType=${treatType}&orderId=${res.data}`
    })
  }else{

  }

}
const listItems = ref([
  {
    title: '一周内',
    checked: false,
    value:'1',
  },
  {
    title: '一月内',
    checked: false,
    value:'2'
  },
  {
    title: '半年内',
    checked: false,
    value:'3',

  },
  {
    title: '大雨半年',
    checked: false,
    value:'4',
  }
])
const filesList = ref([]);
const onFail =(mes) =>{
}
const onImageClick =(index, file)=> {
}
const jumpToPersonSeekMedicineService = () => {
  Taro.navigateTo({
    url: '/subPackagesB/pages/person-seeking-ms/index'
  })
}
const jumpToChooseClient = () => {
  Taro.navigateTo({
    url: '/subPackages/pages/choose-client/index'
  })
}
function onChange({ files, operationType }) {
  const oldLen = filesList.value.length
  const currentFiles = filesList.value

  if (operationType === 'add') {
    files.slice(oldLen).forEach((file, index) => {
      const id = uuid()
      currentFiles.push({ ...file, id })

      setStatus(currentFiles[index + oldLen], 'uploading')
      // Use Taro.uploadFile instead
      uploadFileMock(file.url)
        .then(() => {
          const target = currentFiles.find(({ id: _id }) => _id === id)
          target && setStatus(target, 'done')
        }).catch(() => {
        const target = currentFiles.find(({ id: _id }) => _id === id)
        target && setStatus(target, 'failed')
      })
    })
  } else if (operationType === 'remove') {
    filesList.value = files
  }
}

function uploadFileMock(url) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   Math.random() > .5 ? resolve(url) : reject('err')
    // }, 2000)
  })
}

function setStatus(item, type) {
  switch (type) {
    case 'uploading':
      item.status = 'uploading'
      item.message = '正在上传'
      break
    case 'failed':
      item.status = 'failed'
      item.message = '上传失败'
      break
    case 'done':
      item.status = 'done'
      break
  }
  return item
}
</script>
<style lang="scss">
@import "src/mixin";

$component: '.at-textarea';

#{$component} {
  border:0;
  @include all(#cccccc);


  &__textarea {
    font-size: 13PX;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    border-radius: 5PX;
    border-color: #ccc;
  }

  &__counter {
    color: #999;
  }
}
.placeholder{
  color: #999999;
}

.container {
  height: 100%;
  background: #f9f9f9;
  position: relative;
  overflow-y: scroll;
  @include top_line();
}

.list-row-patient {
  display: flex;
  flex-direction: column;
  height: 50PX;
  justify-content: center;
  padding-left: 16PX;
  padding-right: 16PX;
  background: #fff;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .name {
      font-size: 14PX;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }

    .right-forward {
      display: flex;
      flex-direction: row;
      align-items: center;

      .active-choice-patient {
        font-size: 14PX;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .choice-patient {
        font-size: 14PX;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
      }

      .forward {
        margin-left: 8PX;
        width: 7PX;
        height: 13PX;
      }
    }
  }
}

.body {
  margin-top: 10PX;
  padding: 16PX;
  display: flex;
  background: #fff;
  flex-direction: column;

  .label {

    @include commonFontStyle(14PX, 500, #333, PingFangSC-Medium)
  }

  .top {
    margin-top: 18PX;
  }

  .go-hospital {
    margin-top: 22PX;
  }

  .uplocad-case {
    margin-top: 21PX;
  }

  .textarea {
    margin-top: 13PX;
  }

  .list-row-long {
    margin-top: 14PX;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .list-item {
      width: 79PX;
      height: 34PX;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      @include commonFontStyle(14PX, 400, #333)
    }

    .list-item-margin {
      margin-right: 8PX;
    }

    .active {
      @include all(#06B48D)
    }

    .normal {
      @include all(#ccc)
    }
  }

  .fl-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}

.upload {
  margin-top: 14PX;
  display: flex;
  flex-direction: column;

  .image-upload {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .upload-desc {
      margin-left: 8PX;
      display: flex;
      flex-direction: column;

      .at-most {
        @include commonFontStyle(14PX, 400, #666)
      }

      .self-see {
        margin-top: 5PX;
        @include commonFontStyle(13PX, 400, #999)
      }

    }

  }

  .upload-notice {
    margin-top: 16PX;
    display: flex;
    flex-direction: column;
    line-height: 18PX;
    @include commonFontStyle(13PX, 400, #999)

  }
}

.agree-protocol {
  padding-left: 16PX;
  margin-top: 27PX;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 67PX;
  .img{
    width: 16PX;
    height: 16PX;
  }
  .txt-agree {
    margin-left: 6PX;
    @include commonFontStyle(13PX, 400, #666)
  }

}

.at-image-picker__choose-btn {
  border-top: 1PX #ccc dashed;
  border-bottom: 1PX #ccc dashed;
  border-right: 1PX #ccc dashed;
  border-left: 1PX #ccc dashed;
}

.at-image-picker__item {
  border-radius: 0;
}

.at-image-picker__choose-btn .add-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 22PX;
  height: 2PX;
  border-radius: 1px;
  border: 1px solid #979797;
  background: #CCC;
}

#_footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 16PX;
  right: 16PX;

  .btn-submit-view {
    height: 40PX;
    background: #06B48D;
    border-radius: 25PX;
  }
}
</style>
