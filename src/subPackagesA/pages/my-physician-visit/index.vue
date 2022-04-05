<template>
  <view class="container">
    <view class='panel__content'>
      <AtTabs
        class="atTabs"
        :current="current"
        scroll
        @click="handleClick"
        :tabList="tabList"/>
      <view class="panel-container">
        <at-virtual-scroll
          bench="10"
          v-if="interrogationList.length!==0"
          :height="Taro.getSystemInfoSync().windowHeight-40"
          :items="interrogationList"
          :item-height="itemHeight"
        >
          <template #default="{ index, item }">
            <view
              class='index'
              @tap="jumpToPrescribeDetailDiagnosis(item)"
            >
              <view class='cnt_col'>
                <view class='cnt'>
                  <view class='cnt1'>
                    <view class='icon_wrap'>
                      <image
                        :src="isExistImg(item.drPhotoUrl)?item.drPhotoUrl:require('@assets/user/avatar.png')"
                        class='icon'
                      />
                    </view>
                    <view class='cnt_col1'>
                      <view class='cnt2'>
                        <text class='txt'>{{ item.drName }}</text>
                        <text class='txt1'>{{ item.protitleName }} | {{ item.practisingScopeName }}</text>
                      </view>
                      <text class='txt2'>{{ item.treatType==0||item.trateType==1?'复诊开药':'' }} {{item.treatType==0? '图文':item.treatType==1?'视频':'健康咨询' }}</text>
                    </view>
                  </view>
                  <view class='cnt_col2'>
                    <text class='txt3'>{{ item.rcStatus==9?'待支付':item.rcStatus==0?'待问诊':item.rcStatus==1?'问诊中':item.rcStatus==2?'已完成' :'已取消'}}</text>
                    <view class='price_wrap'>
                      <text class='yuan'>¥</text>
                      <text class='price'>{{item.pafeeall}}</text>
                    </view>
                  </view>
                </view>
                <text class='tit' v-if="item.treatType==0||item.treatType==2">
                  病情描述：{{item.pridepict}}
                </text>
                <text class='tit' v-if="item.treatType==1">
                  预约时间：{{item.ctstamp}}
                </text>
                <text class='tit' v-if="item.rcStatus==2">
                  诊断：{{item.pridepict}}
                </text>
                <image
                  :src='require("@assets/svg/bottom_line.svg")'
                  class='img'
                />
                <view class='cnt3'>
                  <text class='tit1'>{{item.ctstamp}}</text>
                  <view class='cnt4'>
                    <view class='txt_wrap'>
                      <text class='txt4'>{{item.rcStatus==1?'继续沟通':(item.rcStatus==9||item.rcStatus==0)?'取消订单':item.rcStatus==2?'待评价':'删除'}}</text>
                    </view>
                    <view class='txt_wrap1' v-if="item.rcStatus==9">
                      <text class='txt5'>立即支付</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </template>
        </at-virtual-scroll>
        <empty v-if="interrogationList.length==0" :empty-img="require('@assets/empty.png')" :empty-text="'暂无数据哦～'"/>
      </view>
    </view>
  </view>
</template>

<script setup>
import {computed, onMounted,onBeforeUnmount, reactive, ref} from "vue";
import Taro from '@tarojs/taro';
import store from "../../../store";
import empty from '@components/empty/index'
import {isExistImg} from "../../../utils/RegUtil";
const jumpToPrescribeDetailDiagnosis = (item) => {
  Taro.navigateTo({
    url: `/subPackagesB/pages/diagnosis-prescribe-detail/index?registerId=${item.registerId}`
  })
}
const interrogationList = computed(() => store.getters.getInterrogationList);
const itemHeight = ref(0);
let timer = null;
onMounted(() => {
  store.dispatch('getInterrogationList', {rcStatus: status.value}).then(()=>{
    timer=setTimeout(()=>{
      const query = Taro.createSelectorQuery()
      query.select('.panel-container .index').boundingClientRect( rec => {
        console.log(rec,'11111')
        itemHeight .value = rec.height+8;
      }).exec()
    },200)
  })
})
onBeforeUnmount(()=>{
  timer&&clearTimeout(timer);
})
const tabList = reactive([
  {
    title: '待支付',
  },
  {
    title: '待问诊',
  },
  {
    title: '问诊中'
  },
  {title: '已完成'},
  {title: '已取消'},
])
const current = ref(0);
const status = ref(9);
const handleClick = (value) => {
  current.value = value;
  if (value == 0) status.value = 9;
  else if (value == 1) status.value = 0;
  else if (value == 2) status.value = 1;
  else if (value == 3) status.value = 2;
  else status.value = 8;
  store.dispatch('getInterrogationList', {rcStatus: status.value})
  // drName: "依依"
  // drPhotoUrl: "/yiyi/photo"
  // pafeeall: "10.0"
  // practisingScopeName: "内科专业"
  // pridepict: "都短发的的的"
  // protitleName: "主任医师"
  // rcStatus: "9"
  // registerId: "427680260163764224"
  // treatType: "复诊开药"
}
</script>

<style lang="scss">
@import "src/mixin";

.at-tabs__header {
  @include top_line();
  @include bottom_line();
}

.at-tabs__item--active {
  color: #06B48D;
}

.at-tabs__item {
  height: 40PX;
  width: 20%;
}

.at-tabs__item-underline {
  height: 0;
}

.container {
  height: 100%;
  overflow-y: scroll;
  background: #F9F9F9;
}

.panel-container {
  height: 100%;

  index {
    font-family: PingFang SC;
    font-size: 14PX;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 172PX;
    overflow: hidden;
  }

  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    //height: 172PX;
  }

  .cnt {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    padding-left: 16PX;
    height: 49PX;
    margin-top: 10PX;
  }

  .cnt1 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48PX;
  }

  .icon_wrap {
    border-radius: 50%;
    background-color: rgb(216, 216, 216);
    display: flex;
    justify-content: center;
    width: 48PX;
    height: 48PX;
    overflow: hidden;
    box-sizing: border-box;
    //border: 1PX solid rgb(151, 151, 151);
  }

  .icon {
    width: 49PX;
    height: 57PX;
    margin-top: -3PX;
  }

  .cnt_col1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 44.266666%;
    height: 42PX;
    margin-left: 16PX;
  }

  .cnt2 {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 44.266666%;
    height: 16PX;
  }

  .txt {
    color: rgb(51, 51, 51);
    font-weight: bold;
    font-size: 16PX;
    flex-shrink: 0;
    height: 22PX;
  }

  .txt1 {
    color: rgb(102, 102, 102);
    flex-shrink: 0;
    height: 20PX;
    margin-left: 7PX;
    display: inline-block;
    //text-overflow: ellipsis;
    //white-space: nowrap;
    //max-width: 111PX;
    //overflow: hidden;
  }

  .txt2 {
    color: rgb(51, 51, 51);
    flex-shrink: 0;
    height: 20PX;
    margin-top: 9PX;
    display: inline-block;
    //text-overflow: ellipsis;
    //white-space: nowrap;
    //max-width: 44.266666%;
    //overflow: hidden;
  }

  .cnt_col2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 30.4%;
    height: 45PX;
  }

  .txt3 {
    margin-right: 16PX;
    color: rgb(255, 0, 32);
    flex-shrink: 0;
    height: 20PX;
  }

  .price_wrap {
    flex-shrink: 0;
    width: 50PX;
    height: 16PX;
    margin-top: 9.5PX;
    color: rgb(51, 51, 51);
  }

  .yuan {
    font-size: 12PX;
    letter-spacing: 2PX;
    height: 16PX;
  }

  .price {
    font-weight: 400;
    font-family: PingFangSC-Regular;
    font-size: 15PX;
    height: 15PX;
  }

  .tit {
    color: rgb(51, 51, 51);
    flex-shrink: 0;
    width: 91.466666%;
    //height: 45PX;
    margin-top: 14PX;
    webkit-line-clamp: 2;
    webkit-box-orient: vertical;
    display: -webkit-box;
    word-break: break-word;
    overflow: hidden;
  }

  .img {
    flex-shrink: 0;
    width: 100%;
    height: 2PX;
    margin-top: 14PX;
  }

  .cnt3 {
    display: flex;
    align-items: center;
    //flex-shrink: 0;
    //width: 344PX;
    width: 100%;
    margin-top: 12PX;
    margin-bottom: 12PX;
    height: 24PX;
    padding: 0 16PX 0 16PX;
    flex-direction: row;
    justify-content: space-between;
    //margin-top: 8PX;
  }

  .tit1 {
    color: rgb(102, 102, 102);
    height: 20PX;
    display: inline-block;
    //text-overflow: ellipsis;
    //white-space: nowrap;
    //max-width: 200PX;
    //overflow: hidden;
  }

  .cnt4 {
    display: flex;
    align-items: center;
    //width: 144PX;
    height: 24PX;
    //margin-left: 68PX;
    font-size: 13PX;
  }

  .txt_wrap {
    border-radius: 12PX;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 68PX;
    height: 24PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(7, 173, 132);
  }

  .txt4 {
    color: rgb(51, 51, 51);
    height: 18PX;
  }

  .txt_wrap1 {
    border-radius: 12PX;
    display: flex;
    width: 68PX;
    height: 24PX;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 8PX;
    box-sizing: border-box;
    border: 0.5PX solid rgb(255, 0, 32);
  }

  .txt5 {
    color: rgb(255, 0, 32);
    height: 18PX;
  }

}
</style>
