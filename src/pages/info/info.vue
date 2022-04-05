<template>
  <view class="info-container">
    <view class="nav-header" :style="'padding-top:'+statusBarHeight+'PX'">
      <view :class="platform=='android'?'header android':'header ios'">
        <text>资讯</text>
      </view>
    </view>
    <view class='panel__content'>
      <AtTabs
        :current="current"
        scroll
        @click="handleClick"
        :tabList="tabList"/>
      <template v-for="(item,index) in tabList[current]?.paneList" :index="index">
        <view class='list-row-info' @tap="goToInfoDetail">
          <view class='list-row-wrap'>
            <view class='left'>
              <image mode='aspectFill' :src="item.imgUrl" class='img'/>
            </view>
            <view class='right'>
              <text class='title'>{{ item.title }}
              </text>
              <view class='bottom'>
                <view class='sub-wrap'>
                  <text class='title'>
                    {{ item.source }}
                  </text>
                  <view class='eye-view'>
                    <image :src="require('@assets/info/eye.png')" class='eye-img'/>
                    <text class='eye-num'>{{ item.readSum }}</text>
                  </view>
                  <text class='date'>{{ "2021-02-18" }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<script setup>
import {reactive, ref} from "vue";
import Taro from '@tarojs/taro'
import moment from 'moment'

const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight;
const platform = Taro.getSystemInfoSync().platform;

const tabList = ref([
  {
    title: '热点资讯',
    paneList: [
      {
        imgUrl: require('@assets/info/img-1.png'),
        title: '北京启动12-17岁人群新冠疫苗接种工作，预计九月后进行',
        source: '人民日报',
        readSum: '20',
        releaseTime: '2021-09-21',
      },
      {
        imgUrl: require('@assets/info/img-1.png'),
        title: '北京启动12-17岁',
        source: '人民日报',
        readSum: '20',
        releaseTime: '2021-09-21',
      },
    ]
  },
  {
    title: '养生保健',
    // paneList: [
    //   {
    //     imgUrl: require('@assets/info/img-1.png'),
    //     title: '北京启动12-17岁人群新冠疫苗接种工作，预计九月后进行',
    //     source: '人民日报',
    //     readSum: '20',
    //     releaseTime: '2021-09-21',
    //   },
    //   {
    //     imgUrl: require('@assets/info/img-1.png'),
    //     title: '北京启动12-17岁',
    //     source: '人民日报',
    //     readSum: '20',
    //     releaseTime: '2021-09-21',
    //   },
    // ]
  },
  {title: '饮食推荐'},
  {title: '减肥瘦身'},
])
const current = ref(0);

const handleClick = (value) => {
  current.value = value;
}
const goToInfoDetail = () => {

}
</script>

<style  lang="scss">
@import "../../mixin";

$component: '.at-tabs';
#{$component}__item {
  color: #333;
  width: 25%;

  &-underline {
    background-color: #06B48D;
  }
}

#{$component}__header {
  background-color: rgba(8, 183, 140, 0.04);
}

#{$component}__item--active {
  color: #06B48D;
}
.info-container {
  height: 100%;
  position: relative;

  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    content: '';
    border-top: 1px solid rgba(204, 204, 204, 0.4);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.panel-container {
  height: 100%;
}

.nav-header {
  background: #fff;

  .android {
    align-items: flex-start;
    padding-left: 12PX;
  }

  .ios {
    align-items: center;
  }

  .header {
    display: flex;
    height: 44PX;
    flex-direction: column;
    justify-content: center;
    @include commonFontStyle(14PX, 400, #000);
  }
}

.list-row-info {
  background: #FFFFFF;
  display: flex;
  box-shadow: 0 0 6PX 0 rgba(167, 192, 255, 0.12);
  padding-left: 16PX;
  padding-right: 16PX;
  flex-direction: column;
  justify-content: center;
  height: 100PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;

    .left {
      height: 80PX;

      .img {
        border-radius: 4PX;
        width: 108PX;
        height: 80PX;
      }
    }

    .right {
      margin-left: 10PX;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 14PX;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }

      .bottom {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-end;

        .sub-wrap {
          //margin-top: 22PX;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .title {
            font-size: 12PX;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
          }

          .eye-view {
            display: flex;
            flex-direction: row;
            align-items: center;

            .eye-img {
              width: 13PX;
              height: 9PX;
            }

            .eye-num {
              margin-left: 4PX;
              font-size: 12PX;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #999999;
            }
          }

          .date {
            font-size: 12PX;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999;
          }
        }

      }
    }
  }
}
</style>
