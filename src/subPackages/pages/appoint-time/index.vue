<template>
  <view class="container">
    <scroll-view
      class='scrollView'
      :scrollX="isScroll"
      scrollWithAnimation
      :scrollTop="scrollTop"
      :lowerThreshold="threshold"
      :upperThreshold="threshold"
    >
      <template v-for="(item,index) in dateArr">
        <view class='wrap' @tap="selAppointDate(item)">
          <view class='wrap_content'
                :style="item.checked ? 'background: #08B78C;' : 'background:transparent'">
            <text class='wrap_content_week'
                  :style="item.checked ? 'color:#fff' : item.surplus > 0 ? 'color: #333;' : 'color:#999'">{{
                item.week
              }}
            </text>
            <text class='wrap_content_date'
                  :style="item.checked ? 'color:#fff' : item.surplus > 0 ? 'color:#333' : 'color:#999'">{{ moment(item.date).format('MM-DD') }}
            </text>
            <text class='wrap_content_status'
                  :style="item.checked ? 'color: #fff' : item.surplus > 0 ? 'color: #06B48D' : 'color:#999'">
              {{ item.surplus > 0 ? '有号' : '无号' }}
            </text>
          </view>
        </view>
      </template>
    </scroll-view>
    <view class='source-title'>
      <view class='source-clock'>
        <image :src="require('@assets/home/time.png')" class='img'/>
        <text class='clock'>全天号源</text>
      </view>
    </view>
    <view class='list-row-source'>
      <view class='list-row-wrap'>
        <view class='source-view' :key="index" @tap="_confirmAppoint()">
          <text class='time'>{{'9:00'}}~{{ '22:00' }}</text>
          <view class='surplus-view'>
            <text class='surplus-txt'>剩余：</text>
            <text class='surplus-num'>{{ 20 }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import moment from "moment";
import {onMounted, reactive, ref} from "vue";
import Taro from '@tarojs/taro'
let max = 31;
const isScroll = true;
const scrollTop = 0;
const threshold = 20;
const dateArr = ref([]);
const selAppointDate = () => {

}
const _confirmAppoint =()=>{
  Taro.navigateTo({
    url:'/subPackagesB/pages/physician-visit-detail/index'
  })
}
onMounted(() => {
  initData();
})
const _getWeek = (date) => {
  let week = moment(date).day()
  switch (week) {
    case 0:
      return '周日';
    case 1:
      return '周一';
    case 2:
      return '周二';
    case 3:
      return '周三';
    case 4:
      return '周四';
    case 5:
      return '周五';
    case 6:
      return '周六'
  }
}
const initData = () => {
  for (let i = 0; i <= max; i++) {
    let date = moment().add('days', i).format('YYYY-MM-DD');
    let week = _getWeek(date);
    if (i === 0) {

      dateArr.value.push({
        id: i,
        date,
        checked: true,
        week: '今天',
        surplus: 0
      })
    } else {
      dateArr.value.push({
        id: i,
        date,
        week,
        surplus: 0
      })
    }
  }
  console.log(333, dateArr);
}

</script>
<style lang="scss">
@import "../../../mixin";
.container {
  height: 100%;
  background: #f9f9f9;
  padding-top: 10PX;
  overflow-y: scroll;
}
.scrollView {
  white-space: nowrap;
  background: #fff;
  padding-left: 16PX;
  padding-right: 16PX;
  padding-top: 9PX;
  padding-bottom: 8PX;
}

.wrap {
  display: inline-block;

  &_content {
    margin-right: 10PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50PX;
    height: 76PX;
    border-radius: 5PX;
    font-size: 13PX;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    &_week{

    }
    &_date{
      margin-top: 7PX;
    }
    &_status{
      margin-top: 3PX;
    }
  }
}


.source-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40PX;
  padding-left: 16PX;

  .source-clock {
    display: flex;
    flex-direction: row;
    align-items: center;

    .img {
      width: 18PX;
      height: 18PX;
    }

    .clock {
      font-size: 14PX;
      margin-left: 9PX;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
  }
}
.list-row-source {
  display: flex;
  flex-direction: column;
  height: 84PX;
  background: #fff;
  padding-left: 16PX;
  padding-right: 16PX;
  justify-content: center;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    //justify-content: space-between;
    .source-view {
      @include all(#06B48D,6PX);
      width: 109PX;
      height: 60PX;
      display: flex;
      margin-right: 10PX;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      //opacity: 0.25;
      .time {
        font-size: 14PX;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #06B48D;
      }

      .surplus-view {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 13PX;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #06B48D;
      }
    }
  }
}

</style>
