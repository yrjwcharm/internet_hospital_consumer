<template>
  <view class="container">
    <view class="list-row-header">
        <view class="left-wrap">
          <view class="left">
            <picker :value="state.picker_key" mode="multiSelector" :onChange="cityChangePicker"
                    :onColumnchange="cityColumnChangePicker" :range="state.multiArray">
            <text class="clinic">{{ isEmpty(state.deptId)?'科室':state.deptName }}</text>
            <image :src="require('@assets/home/off.png')" class="drop-down"/>
            </picker>
          </view>

        </view>
      <view class="right-wrap">
        <view class="right">
          <picker
            mode='selector'
            :range="state.jobList"
            :rangeKey="'detailName'"
            :value="state.jobName"
            @change="handleJobChange"
            @cancel="handleJobCancel"
          >
          <text class="profession">{{ isEmpty(state.protitle)?'职称':state.jobName }}</text>
            <image :src="require('@assets/home/off.png')" class="drop-down"/>
          </picker>

        </view>
      </view>
    </view>
    <at-virtual-scroll
      bench="5"
      :height="Taro.getSystemInfoSync().windowHeight-40"
      :items="state.regDocList"
      :item-height="108.0"
    >
      <template #default="{index,item}">
        <view class="list-doctor-list" @tap="jumpToDoctorProfile(item)">
          <view class="list-row-wrap">
            <view class="avatar">
              <image class="img" :src="isExistImg(item.photoUrl)?item.photoUrl:require('@assets/home/avatar.png')"/>
              <image :src="require('@assets/home/online.png')"
                     class="is-online"/>
            </view>
            <view class="list-item">
              <view class="top">
                <text class="name">{{ item.realName }}</text>
                <text class="profession">{{ item.protitleName }}</text>
              </view>
              <view class="major">
                <text class="hospital">{{ item.orgName }}</text>
                <text class="_major">{{ item.deptName }}</text>
              </view>
              <text class="major1">擅长：{{ item.expertIn }}</text>
            </view>
          </view>
        </view>
      </template>
    </at-virtual-scroll>
  </view>
</template>

<script setup>
import {onActivated, onMounted, reactive, ref, toRaw} from "vue";
import {isExistImg} from "../../../utils/RegUtil";
import Taro, {useReachBottom} from '@tarojs/taro';
import {isEmpty} from "../../../utils/RegUtil";
import {callClinicListApi, callJobListApi, callRegDocListApi} from "../../../services/SyncRequest";
  onMounted(()=>{
    initData();
  })
const state= reactive({
  page:1,
  size:10,
  clinicList:[],
  jobList:[],
  deptName:'',
  deptId:'',
  protitle:'',
  jobName:'',
  hasMore:true,
  multiArray:[],
  picker_key:[],
  regDocList:[]
})
const initData=async ()=>{
  const $res = await Promise.all([ callClinicListApi({orgId:'416798656289701888'}),callJobListApi({})]);
  if($res[0].code==200){
    state.clinicList=$res[0].data;
    getPickerCity([0, 0, 0]);
  }
  if($res[1].code==200){
    state.jobList = $res[1].data;
  }
  initRegList();
}
const initRegList=async ()=>{
  const res = await  callRegDocListApi({
    orgId:'',
    deptId:state.deptId,
    protitle:state.protitle,
  })
  console.log(333,res);
  if(res.code==200){
    if(res.data.length>0&&Array.isArray(res.data)) {
        state.regDocList=res.data;
        state.isEmpty = false;
      } else {
        state.regDocList =[];
        state.isEmpty = true;
    }
  }
}
const getPickerCity = (key) => {

  let province = [];//省
  let city = [];//市
  // let county = [];//区
  console.log(333,state.clinicList);
  //省
  state.clinicList.forEach(provinces => {
    province.push(provinces['deptName'])
  });
  console.log(3333,state.clinicList[key[0]]);
  //市
  if (state.clinicList[key[0]]['childDepartments'] && state.clinicList[key[0]]['childDepartments'].length > 0) {
    state.clinicList[key[0]]['childDepartments'].forEach(citys => {
      city.push(citys['deptName'])
    })
  }
  // //区县
  // clinicList[key[0]]['children'][key[1]]['children'].forEach(countys => {
  //   county.push(countys['text'])
  // });
  let alls = [];
  alls.push(province)
  alls.push(city)
  state.multiArray = alls;
  state.picker_key=key;
}
const cityColumnChangePicker = (e) => {
  let {column, value} = e.detail
  switch (column) {
    case 0:
      getPickerCity([value, 0, 0])
      break;
    case 1:
      getPickerCity([state.picker_key[0], value, 0])
      break;
    // case 2:
    //   getPickerCity([picker_key[0], picker_key[1], value])
    //   break;
    default:
      break;
  }
}
const cityChangePicker = (e) => {
  let value = e.detail.value;
  if (state.clinicList.length > 0) {
    let province = state.clinicList[value[0]];
    let city = state.clinicList[value[0]].children?.[value[1]];
    // let district = clinicList[value[0]].children[value[1]].children[value[2]];
    // setProvinceId(province.value);
    state.deptName = (city?.deptName)??province.deptName;
    state.deptId = (city?.deptId)??province.deptId;
    initRegList();
    // setClinicDept(city.deptName);
    // setClinicDeptId(city.deptId)

  }
}
useReachBottom(()=> {
  if (!state.hasMore) {
    Taro.showToast({
      title: '没有更多数据',
      icon: 'none',
      duration: 3500,
      mask: true
    })
  }
})
const handleJobChange=(e)=>{
  state.protitle=state.jobList[e.detail.value].valueId;
  state.jobName = state.jobList[e.detail.value].detailName;
  initRegList();
}
const handleJobCancel=()=>{

}
const jumpToDoctorProfile = (item) => {
  Taro.navigateTo({
    url: `/subPackages/pages/doctor-profile/index?item=${JSON.stringify(item)}`
  })
}
</script>

<style lang="scss">
@import "../../../mixin";

@mixin commonFontStyle($fontSize,$fontWeight,$color,$fontFamily:PingFangSC-Regular) {
  font-size: $fontSize;
  font-family: $fontFamily, PingFang SC;
  font-weight: $fontWeight;
  color: $color;
}

.container {
  height: 100%;
  background: #f9f9f9;
  position: relative;
  @include top_line();

}

.list-doctor-list {
  margin-bottom: 10PX;
  display: flex;
  padding-left: 10PX;
  flex-direction: column;
  justify-content: center;
  height: 100PX;
  background: #fff;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;

    .avatar {
      position: relative;

      .img {
        width: 69PX;
        height: 69PX;
      }

      .is-online {
        width: 16PX;
        height: 16PX;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }

    .list-item {
      line-height: 1;
      margin-left: 15PX;
      display: flex;
      flex-direction: column;

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;

        .name {
          @include commonFontStyle(16PX, 500, #333)
        }

        .profession {
          margin-left: 6PX;
          @include commonFontStyle(14PX, 400, #888)

        }
      }

      .major {
        display: flex;
        flex-direction: row;
        margin-top: 11PX;
        align-items: center;

        .hospital {
          @include commonFontStyle(13PX, 400, #333)
        }

        ._major {
          margin-left: 6PX;
          @include commonFontStyle(14PX, 400, #333)
        }
      }

      .major1 {
        margin-top: 9PX;
        @include commonFontStyle(13PX, 400, #888)

      }
    }
  }
}

.list-row-header {
  display: flex;
  background: #fff;
  flex-direction: row;
  align-items: center;
  @include commonFontStyle(14PX, 400, #999);

  .left-wrap {
    display: flex;
    flex: 1;
    height: 40PX;

    .left {
      margin: auto;
      display: flex;
      flex-direction: row;
      align-items: center;

      .drop-down {
        margin-left: 4PX;
        width: 8PX;
        height: 8PX;
      }
    }
  }

  .right-wrap {
    height: 40PX;
    display: flex;
    flex: 1;

    .right {
      margin: auto;
      display: flex;
      flex-direction: row;
      align-items: center;

      .drop-down {
        margin-left: 4PX;
        width: 8PX;
        height: 8PX;
      }
    }
  }

}
</style>
