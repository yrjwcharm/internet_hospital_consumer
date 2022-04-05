<template>
  <view class="container">
    <view
      class='header'
    >
      <view class='cnt_col'>
        <view class='cnt_col1'>
<!--          <image-->
<!--            src='//img20.360buyimg.com/img/jfs/t1/223884/19/8875/1093/62480ed3Ebc3fe371/4e0f65915934e1fa.png'-->
<!--            class='icon'-->
<!--          ></image>-->
          <view class='cnt_col2'>
            <text class='txt'>通海县人民医院电子处方</text>
            <text class='txt1'>医疗机构编码：346987654321123H</text>
          </view>
          <view class='icon_wrap'>
            <image
              :src="require('@assets/svg/pass.svg')"
              class='icon1'
            ></image>
          </view>
          <view class='cnt'>
            <view class='cnt_col3'>
              <text class='desc_txt'>姓名：</text>
              <text class='tit'>王建国</text>
            </view>
            <view class='cnt_col4'>
              <text class='desc_txt'>性别：</text>
              <text class='tit'>男</text>
            </view>
            <view class='cnt_col5'>
              <text class='desc_txt'>年龄：</text>
              <text class='tit'>38岁</text>
            </view>
          </view>
          <view class='cnt1'>
            <view class='cnt2'>
              <text class='desc_txt1'>费用：</text>
              <text class='tit1'>自费</text>
            </view>
            <view class='cnt_col6'>
              <text class='desc_txt'>科别：</text>
              <text class='tit'>全科</text>
            </view>
          </view>
          <image
            :src="require('@assets/svg/bottom_line.svg')"
            class='img'
          ></image>
        </view>
        <view class='cnt_col7'>
          <view class='cnt3'>
            <view class='cnt4'>
              <text class='desc_txt2'>NO：</text>
              <text class='tit2'>9899008766</text>
            </view>
            <view class='cnt_col8'>
              <text class='desc_txt'>开方：</text>
              <text class='tit3'>2021-07-29 10:56</text>
            </view>
          </view>
          <image
            :src="require('@assets/svg/bottom_line.svg')"
            class='img1'
          ></image>
        </view>
        <view class='cnt_col9'>
          <text class='desc_txt3'>诊断：</text>
          <text class='tit4'>幽门螺旋杆菌感染</text>
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
              <text class="bottom">口服：{{ item.drugUsage}}</text>
            </view>
            <view class="right-wrap">
              <text>{{item.count}}</text>
            </view>
          </view>
        </view>

      </template>
    </view>
    <view
      class='rp-sign'
    >
      <view class='cnt_col'>
        <view class='cnt'>
          <text class='txt'>处方医师</text>
          <text class='txt1'>张望国</text>
        </view>
        <view class='cnt1'>
         <image :src="require('@assets/user/sign.png')" class="icon"/>
        </view>
        <view class='cnt2'>
          <text class='txt'>审方医师</text>
          <text class='txt1'>苏山寒</text>
        </view>
      </view>
    </view>
    <view class="remark">
      <text class="remark-txt">备注：</text>
      <text class="remark-valid">1、处方有效期为7天。</text>
      <text class="remark-valid">2、该处方不支持线下药房购药。</text>
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
      drugName:'胶体果胶铋胶囊',
      drugSku:'50mgx12粒x2板',
      drugUsage:'一次3粒，4次/天',
      count:'x8'
    },
    {
      drugName:'克拉霉素胶囊',
      drugSku:'50mgx12粒x2板',
      drugUsage:'一次3粒，4次/天',
      count:'x8'
    },
    {
      drugName:'奥美拉唑肠溶胶囊',
      drugSku:'50mgx12粒x2板',
      drugUsage:'一次3粒，4次/天',
      count:'x8'
    },
    {
      drugName:'阿莫西林胶囊',
      drugSku:'50mgx12粒x2板',
      drugUsage:'一次3粒，4次/天',
      count:'x8'
    },
  ])
</script>
<style lang="scss">
@import "src/mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
  @include top_line();
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
  .is-bottom-line{
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
  .rp-doctor{
    margin-top: 10PX;
    display: flex;
    background: #fff;
    padding-left: 16PX;
    flex-direction: column;
    justify-content: center;
    height: 44PX;
      &-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
          .label{
            @include commonFontStyle(14PX,400,#333)
          }
          .value{
            @include commonFontStyle(18PX,400,#666,ShouShuti)
          }
      }
  }
  .exam-doctor{
    padding-left: 16PX;
    display: flex;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    height: 44PX;
    &-wrap{
      display: flex;
      flex-direction: row;
      align-items: center;
      .label{
        @include commonFontStyle(14PX,400,#333)
      }
      .value{
        @include commonFontStyle(18PX,400,#666,ShouShuti)
      }
    }
  }
  .remark{
    margin-top: 14PX;
    padding-left: 16PX;
    display: flex;
    flex-direction: column;
    @include commonFontStyle(13PX,400,#666);
    margin-bottom: 74PX;
    &-text{
      }
      &-valid{
        margin-top: 7PX;
      }
  }
.header {
  font-family: PingFang SC;
  font-size: 14PX;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 219PX;
  .cnt_col {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    width:100%;
    height: 219PX;
  }
  .cnt_col1 {
    display: flex;
    flex-direction: column;

    position: relative;
    width: 100%;
    height: 140PX;
    z-index: 0;
  }
  .icon {
    position: absolute;
    top: 21PX;
    left: 318PX;
    width: 37PX;
    height: 37PX;
    z-index: 2;
  }
  .cnt_col2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40PX;
    margin-top: 21.5PX;
  }
  .txt {
    color: rgb(51, 51, 51);
    font-weight: bold;
    font-size: 18PX;
    line-height: 1.39;

    height: 25PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 198PX;
    overflow: hidden;
  }
  .txt1 {
    color: rgb(136, 136, 136);
    font-size: 12PX;
    line-height: 1.42;

    height: 17PX;
    margin-top: 4PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 197PX;
    overflow: hidden;
  }
  .section_wrap {
    display: flex;
    position: absolute;
    top: 22PX;
    left: 313PX;
    width: 46PX;
    height: 35PX;
    z-index: 3;
    background: url(//img13.360buyimg.com/img/jfs/t1/200857/36/20675/1936/62480ed3E4c8dafb4/98fcce1942c88287.png)
    no-repeat;
  }
  .section {
    transform: rotate(-30deg);
    color: rgb(6, 180, 141);
    font-size: 9PX;
    line-height: 1.44;
    align-self: center;
    height: 13PX;
    margin-left: 5PX;
  }
  .icon_wrap {
    display: flex;
    position: absolute;
    top: 23PX;
    //left: 320PX;
    right: 16PX;
    z-index: 1;
  }
  .icon1 {
    width: 46PX;
    height: 37PX;
    //margin-top: 7PX;
  }
  .icon2 {
    position: absolute;
    top: 24PX;
    left: 339PX;
    width: 13PX;
    height: 21PX;
    z-index: 0;
  }
  .cnt {
    display: flex;
    align-items: center;
    align-self: center;
    //width: 344PX;
    width: 100%;
    padding-left: 16PX;
    padding-right: 16PX;
    height: 14PX;
    margin-top: 23.5PX;
    font-size: 14PX;
  }
  .cnt_col3 {
    display: flex;
    flex-direction: column;
    width: 83PX;
    height: 14PX;
  }
  .desc_txt {
    color: rgb(51, 51, 51);
    line-height: 1.43;

    height: 20PX;
    margin-top: -3PX;
  }
  .tit {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    align-self: flex-end;

    height: 20PX;
    margin-top: -20PX;
  }
  .cnt_col4 {
    display: flex;
    flex-direction: column;
    width: 55PX;
    height: 14PX;
    margin-left: 61PX;
  }
  .cnt_col5 {
    display: flex;
    flex-direction: column;
    width: 72PX;
    height: 14PX;
    margin-left: 73PX;
  }
  .cnt1 {
    display: flex;
    align-items: center;
    width: 213PX;
    height: 20PX;
    font-size: 14PX;
    margin: 13PX 0 0 17PX;
  }
  .cnt2 {
    //width: 144PX;
    display: inline-flex;
    width: 136PX;
    height: 20PX;
  }
  .desc_txt1 {
    color: rgb(51, 51, 51);
    line-height: 1.43;
    height: 14PX;
  }
  .tit1 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    height: 14PX;
  }
  .cnt_col6 {
    display: flex;
    flex-direction: column;
    width: 69PX;
    height: 14PX;
  }
  .img {
    width: 100%;
    height: 1PX;
    margin-top: 7PX;
  }
  .cnt_col7 {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 40PX;
  }
  .cnt3 {
    display: flex;
    align-items: center;
    width: 305PX;
    height: 14PX;
    margin: 12PX 0 0 17PX;
  }
  .cnt4 {
    display: flex;
    align-items: center;
    width: 144PX;
    height: 14PX;
  }
  .desc_txt2 {
    color: rgb(51, 51, 51);
    line-height: 1.43;

    height: 20PX;
  }
  .tit2 {
    color: rgb(102, 102, 102);
    line-height: 1.43;

    height: 20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 109PX;
    overflow: hidden;
  }
  .cnt_col8 {
    display: flex;
    flex-direction: column;
    width: 161PX;
    height: 14PX;
  }
  .tit3 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    align-self: flex-end;

    height: 20PX;
    margin-top: -20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 121PX;
    overflow: hidden;
  }
  .img1 {
    width: 100%;
    height: 1PX;
    margin-top: 13PX;
  }
  .cnt_col9 {
    display: flex;
    flex-direction: column;

    width: 153PX;
    height: 39PX;
    margin-left: 16PX;
  }
  .desc_txt3 {
    color: rgb(51, 51, 51);
    line-height: 1.43;
    height: 20PX;
    margin-top: 9PX;
  }
  .tit4 {
    color: rgb(102, 102, 102);
    line-height: 1.43;
    align-self: flex-end;
    height: 20PX;
    margin-top: -20PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 113PX;
    overflow: hidden;
  }

}




.rp-sign {
  margin-top: 10PX;
  font-family: PingFang SC;
  display: flex;
  justify-content: center;
  width:100%;
  height: 88PX;
  .cnt_col {
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    position: relative;
    width:100%;
    height: 88PX;
    z-index: 0;
  }
  .cnt {
    display: flex;
    align-items: center;
    position: absolute;
    top: 15PX;
    left: 16PX;
    width: 320PX;
    height: 21PX;
    z-index: 0;
  }
  .txt {
    color: rgb(51, 51, 51);
    font-size: 14PX;
    line-height: 1.43;
    height: 20PX;
  }
  .txt1 {
    color: rgb(102, 102, 102);
    font-weight: 400;
    font-family: ShouShuti;
    font-size: 18PX;
    line-height: 1.39;
    //height: 18PX;
    margin-left: 15PX;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 234PX;
    //overflow: hidden;
  }
  .cnt1 {
    border-radius: 50%;
    position: absolute;
    top: 17PX;
    //left: 292PX;
    right: 29PX;
    width: 54PX;
    height: 54PX;
    z-index: 2;
    box-sizing: border-box;
  }
  .icon {
    width: 54PX;
    height: 54PX;
  }
  .cnt2 {
    display: flex;
    align-items: center;
    position: absolute;
    top: 53PX;
    left: 16PX;
    width: 320PX;
    height: 20PX;
    z-index: 1;
  }

}

</style>
