<template>
  <view class="container">
    <template v-for="(item,index) in evaluateList" :key="index">
      <view class="list-row-container">
        <view :class="index==evaluateList.length-1?'list-row-bottom':'list-row-bottom active'">
          <view class="top">
            <view class="left">
              <image :src="isExistImg(item.photoUrl)?item.photoUrl:require('@assets/home/header.png')" class="img"/>
              <view class="right-wrap">
                <text class="name">{{ item.userName }}</text>
                <at-rate class="rate" :value="item.commentLevel" size="10"/>
              </view>
            </view>
            <text class="date">{{item.commentTime}}</text>
          </view>
          <text class="bottom">{{item.comment}}</text>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup>
import {computed, reactive, toRefs} from "vue";
import store from "../../../store";
import {isExistImg} from "../../../utils/RegUtil";
const evaluateList = computed(()=>store.getters.getEvaluateList);
</script>

<style lang="scss">
@mixin commonFontStyle($fontSize,$fontWeight,$color,$fontFamily:PingFangSC-Regular) {
  font-size: $fontSize;
  font-family: $fontFamily, PingFang SC;
  font-weight: $fontWeight;
  color: $color;
}
.active {
  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    border-top: 1px solid rgba(204,204,204,0.4);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.container {
  height: 100%;
  background: #f9f9f9;
  position: relative;

  &:after {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    content: '';
    border-top: 1px solid rgba(204,204,204,0.4);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.list-row-container {
  background: #fff;
  padding-left: 16PX;
  padding-right: 16PX;

  .list-row-bottom {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    height: 114PX;
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: row;
        align-items: center;

        .img {
          width: 34PX;
          height: 34PX;
        }

        .right-wrap {
          margin-left: 8PX;
          display: flex;
          flex-direction: column;

          .name {
            @include commonFontStyle(14PX, 400, #333)
          }

          .rate {
            margin-top: 5PX;
          }

        }
      }

      .date {
        @include commonFontStyle(13PX, 400, #999)
      }
    }

    .bottom {
      margin-top: 13PX;
      @include commonFontStyle(13PX, 400, #666)
    }
  }
}
</style>
