<template>
  <view class="container">
    <view class="list-row-header">
      <view class="list-row-wrap">
        <image :src="require('@assets/home/hospital.png')" class="img"/>
        <view class="right-wrap">
          <text class="title">北京朝阳医院</text>
          <view class="hospital-level">
            <text>三级甲等</text>
          </view>
          <view class="clinic">
            <image :src="require('@assets/home/clinic.png')" class="img"/>
            <text class="clinic-count">40个科室</text>
          </view>
        </view>
      </view>
      <text class="address">北京市朝阳区医东大桥路32号</text>
    </view>
    <view class="list-row-brief">
      <image :src="require('@assets/home/introduce.png')" class="img"/>
      <text class="hospital-brief">医院简介</text>
    </view>
    <view class="list-hospital-brief">
      <text>
        通海县人民医院位于通海县秀山镇富善街34号，始建于1952年7月，医院占地面积34亩，建筑面积35000平方米。是一所集医疗、教学、科研、预防保健、计划生育技术指导、康复与急救于一体的二级甲等综合性医院；是通海县医共体牵头医院，职工医保居民医保、工伤保险定点医院，省、市多家三甲医院联盟医院；是昆明医科大学教学医院，玉溪卫校实习医院。昆明医科大学继续教育学院、大理大学继续教育学院联合办学点。先后荣获云南省先进基层党组织、玉溪市文明单位、通海县“三八”红旗集体等荣誉称号。
      </text>
    </view>
  </view>
</template>
<script>

</script>
<style lang="scss">
@mixin commonFontStyle($fontSize,$fontWeight,$color,$fontFamily:PingFangSC-Regular) {
  font-size: $fontSize;
  font-family: $fontFamily, PingFang SC;
  font-weight: $fontWeight;
  color: $color;
}

.container {
  height: 100%;
  background: #fff;
  position: relative;
  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    content: '';
    border-top: 1px solid #EEEEEE;
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.list-row-header {
  display: flex;
  flex-direction: column;
  padding: 16PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .img {
      width: 109PX;
      height: 87PX;
    }

    .right-wrap {
      margin-left: 16PX;
      display: flex;
      flex-direction: column;

      .title {
        @include commonFontStyle(16PX, 400, #333)
      }

      .hospital-level {
        margin-top: 9PX;
        background: rgba(9, 187, 143, 0.07);
        border-radius: 10PX;
        opacity: 0.8;
        width: 77PX;
        height: 20PX;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(9, 187, 143, 0.78);
        @include commonFontStyle(13PX, 400, #09BB8F)
      }

      .clinic {
        margin-top: 9PX;
        display: flex;
        flex-direction: row;
        align-items: center;

        .img {
          width: 12PX;
          height: 14PX;
        }

        .clinic-count {
          margin-left: 3PX;
          font-size: 14PX;
          @include commonFontStyle(14PX, 400, #666)
        }
      }

    }
  }

  .address {
    margin-top: 11PX;
    @include commonFontStyle(14PX, 400, #777)
  }
}

.list-row-brief {
  display: flex;
  padding-left: 16PX;
  flex-direction: row;
  align-items: center;

  .img {
    width: 16PX;
    height: 16PX;
  }

  .hospital-brief {
    margin-left: 11PX;
    @include commonFontStyle(16PX, 400, #333)
  }
}

.list-hospital-brief {
  padding-left: 16PX;
  padding-right: 16PX;
  margin-top: 12PX;
  line-height: 28PX;
  text-indent: 2em;
  text-align: justify;
  text-justify: inter-ideograph;
  @include commonFontStyle(14PX, 400, #444)

}
</style>
