<template>
  <view class="container">
    <view class="header">
      <view class="list-header">
        <view class="list-row-wrap">
          <text class="name">张可可</text>
          <view class="id-card">
            <text>居民身份证</text>
            <text class="value">3714**********7514</text>
          </view>
        </view>
      </view>
    </view>
    <view class="list-row-card">
      <view class="list-row-wrap">
        <view class="left">
          <text class="required">*</text>
          <text class="label">医保卡号码</text>
        </view>
        <input type="text" placeholder="请输入医保卡号码"  class="input" placeholder-class="placeholder-class">
        <image :src="require('@assets/user/scanner.png')" class="scanner"/>
      </view>
    </view>
    <view class="list-row-case">
    <text>图例</text>
    </view>
    <view class="list-case-img">
      <image :src="require('@assets/user/case.png')" class="case"/>
    </view>
    <view class="footer" style="bottom:17PX">
      <view class="btn-submit-view">
        <text class="btn-submit-text">
          确认并绑定
        </text>
      </view>
    </view>
  </view>
</template>
<script setup>

</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #fff;
  overflow-y: scroll;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 103PX;
  background: rgba(6, 180, 141, 0.1);

  .list-header {
    margin-left: 16PX;
    margin-right: 16PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 71PX;
    padding-left: 16PX;
    background: #FFFFFF;
    border-radius: 5PX;
    @include bottom_line();

    .list-row-wrap {
      display: flex;
      flex-direction: column;

      .name {
        @include commonFontStyle(16PX, 500, #333, PingFangSC-Medium)
      }

      .id-card {
        margin-top: 4PX;
        @include commonFontStyle(14PX, 400, #999999);

        .value {
          margin-left: 8PX;
        }
      }
    }
  }

}
  .list-row-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 47PX;
    margin-left: 16PX;
    @include bottom_line();
    margin-right: 16PX;
      .list-row-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
         .left{
           display: flex;
           flex-direction: row;
           //align-items: center;
            .required{
              @include commonFontStyle(14PX,600,#EF7079,PingFangSC-Semibold)
            }
            .label{
              margin-left: 4PX;
              @include commonFontStyle(14PX,400,#666);
            }
         }
        .input{
          flex: 1;
          margin-left: 18PX;
          text-align: left;
          font-size: 14PX;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          caret-color: #666;
        }
        .placeholder-class{
          color: #999;
        }
        .scanner{
          width: 16PX;
          height: 17PX;
        }
      }
  }
  .list-row-case{
    display: flex;
    flex-direction: column;
    height: 56PX;
    justify-content: center;
    align-items: center;
    @include commonFontStyle(14PX,400,#999);
  }
  .list-case-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    .case{
      width: 260PX;
      height: 189PX;
    }
  }
</style>
