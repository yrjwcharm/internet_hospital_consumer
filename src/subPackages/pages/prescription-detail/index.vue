<template>
  <view class="container">
    <view class="header">
      <text class="title">通海县人民医院电子处方</text>
      <text class="sub-title">处方笺</text>
      <view class="top">
        <text class="id-num">NO：9899008766</text>
        <text class="date">2021-07-29 10:56</text>
      </view>
      <view class="middle">
        <view class="name">
          <text class="name-label">姓名：</text>
          <text class="name-value">王建国</text>
        </view>
        <view class="gender">
          <text class="gender-label">性别：</text>
          <text class="gender-value">男</text>
        </view>
        <view class="age">
          <text class="age-label">年龄：</text>
          <text class="age-value">38岁</text>
        </view>
      </view>
      <view class="bottom">
        <view class="fee">
          <text class="fee-label">费用：</text>
          <text class="fee-value">自费</text>
        </view>
        <view class="category">
          <text class="category-label">科别</text>
          <text class="category-value">全科</text>
        </view>
        <view/>
      </view>
      <view class="diagnosis">
        <view class="wrap">
          <text class="label">诊断：</text>
          <text class="value">幽门螺旋杆菌感染</text>
        </view>
      </view>
    </view>
    <view class="rp">
      <view class="rp-header">
        <text>Rp</text>
      </view>
      <template v-for="(item,index) in listItems" :key="index">
        <view :class="index===listItems.length-1?'rp-list-row':'rp-list-row is-bottom-line'">
          <view class="list-row-wrap">
            <view class="left-wrap">
              <text class="top">{{ item.drugName }}</text>
              <text class="middle">规格：{{ item.drugSku }}</text>
              <text class="bottom">口服：{{ item.drugUsage }}</text>
            </view>
            <view class="right-wrap">
              <text>{{ item.count }}</text>
            </view>
          </view>
        </view>

      </template>
    </view>
    <view class="rp-doctor">
      <view class="rp-doctor-wrap">
        <text class="label">处方医师：</text>
        <text class="value">张望国</text>
      </view>
    </view>
    <view class="exam-doctor">
      <view class="exam-doctor-wrap">
        <text class="label">审方药师：</text>
        <text class="value">苏山寒</text>
      </view>
    </view>
    <view class="remark">
      <text class="remark-txt">备注：</text>
      <text class="remark-valid">处方有效期为7天。</text>
    </view>
    <view class="footer" style="bottom:17PX">
      <view class="btn-submit-view">
        <text class="btn-submit-text">在线支付</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import {ref} from "vue";

const listItems = ref([
  {
    drugName: '胶体果胶铋胶囊',
    drugSku: '50mgx12粒x2板',
    drugUsage: '一次3粒，4次/天',
    count: 'x8'
  },
  {
    drugName: '克拉霉素胶囊',
    drugSku: '50mgx12粒x2板',
    drugUsage: '一次3粒，4次/天',
    count: 'x8'
  },
  {
    drugName: '奥美拉唑肠溶胶囊',
    drugSku: '50mgx12粒x2板',
    drugUsage: '一次3粒，4次/天',
    count: 'x8'
  },
  {
    drugName: '阿莫西林胶囊',
    drugSku: '50mgx12粒x2板',
    drugUsage: '一次3粒，4次/天',
    count: 'x8'
  },
])
</script>
<style lang="scss">
@import "../../../mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
  @include top_line();
}

.header {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 16PX 16PX 0 16PX;

  .title {
    text-align: center;
    @include commonFontStyle(18PX, 500, #333, PingFangSC-Medium)
  }

  .sub-title {
    text-align: center;
    margin-top: 7PX;
    @include commonFontStyle(16PX, 400, #333);
  }

  .top {
    margin-top: 8PX;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .id-num {
      @include commonFontStyle(15PX, 400, #06B48D)
    }

    .date {
      @include commonFontStyle(14PX, 400, #333)
    }
  }

  .middle {
    margin-top: 13PX;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .name {
      display: flex;
      align-items: center;

      .name-label {
        @include commonFontStyle(14PX, 400, #333)
      }

      .name-value {
        @include commonFontStyle(14PX, 400, #666)
      }
    }

    .gender {
      display: flex;
      align-items: center;

      .gender-label {
        @include commonFontStyle(14PX, 400, #333)

      }

      .gender-value {
        @include commonFontStyle(14PX, 400, #666)

      }
    }

    .age {
      display: flex;
      align-items: center;

      .age-label {
        @include commonFontStyle(14PX, 400, #333)

      }

      .age-value {
        @include commonFontStyle(14PX, 400, #666)

      }
    }
  }

  .bottom {
    margin-top: 9PX;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .fee {
      display: flex;
      align-items: center;

      .fee-label {
        @include commonFontStyle(14PX, 400, #333)

      }

      .fee-value {
        @include commonFontStyle(14PX, 400, #666)

      }
    }

    .category {
      display: flex;
      align-items: center;

      .category-label {
        @include commonFontStyle(14PX, 400, #333)
      }

      .category-value {
        @include commonFontStyle(14PX, 400, #666)

      }
    }
  }

  .diagnosis {
    margin-top: 13PX;
    display: flex;
    flex-direction: column;
    height: 43PX;
    @include top_line();
    justify-content: center;

    .wrap {
      display: flex;
      flex-direction: row;
      align-items: center;

      .label {
        @include commonFontStyle(14PX, 400, #333)

      }

      .value {
        @include commonFontStyle(14PX, 400, #666)

      }
    }
  }
}

.rp {
  margin-top: 12PX;
  background: #fff;

  &-header {
    padding-left: 16PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 44PX;
    @include bottom_line();
    @include commonFontStyle(16PX, 400, #333)
  }

  .is-bottom-line {
    @include bottom_line();
  }

  &-list-row {
    margin-top: 8PX;
    margin-left: 16PX;
    margin-right: 16PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 82PX;

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .left-wrap {
        display: flex;
        flex-direction: column;

        .top {
          @include commonFontStyle(14PX, 400, #333)
        }

        .middle {
          margin-top: 7PX;
          display: flex;
          flex-direction: row;
          align-items: center;
          @include commonFontStyle(12PX, 400, #666)
        }

        .bottom {
          margin-top: 4PX;
          display: flex;
          flex-direction: row;
          align-items: center;
          @include commonFontStyle(12PX, 400, #666)
        }
      }

      .right-wrap {
        @include commonFontStyle(14PX, 400, #666)
      }
    }
  }
}

.rp-doctor {
  margin-top: 10PX;
  display: flex;
  background: #fff;
  padding-left: 16PX;
  flex-direction: column;
  justify-content: center;
  height: 44PX;

  &-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;

    .label {
      @include commonFontStyle(14PX, 400, #333)
    }

    .value {
      @include commonFontStyle(18PX, 400, #666, ShouShuti)
    }
  }
}

.exam-doctor {
  padding-left: 16PX;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  height: 44PX;

  &-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;

    .label {
      @include commonFontStyle(14PX, 400, #333)
    }

    .value {
      @include commonFontStyle(18PX, 400, #666, ShouShuti)
    }
  }
}

.remark {
  margin-top: 14PX;
  padding-left: 16PX;
  display: flex;
  flex-direction: column;
  @include commonFontStyle(13PX, 400, #666);
  margin-bottom: 74PX;

  &-text {
  }

  &-valid {
    margin-top: 7PX;
  }
}
</style>
