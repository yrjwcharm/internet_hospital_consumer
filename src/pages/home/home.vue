<template>
  <view>
    <swiper
      class='swiper'
      indicator-color='#DFDFDF'
      indicator-active-color='#fff'
      :vertical="false"
      :duration="500"
      :easingFunction="'linear'"
      :circular="true"
      :indicator-dots="true"
      :autoplay="true"
    >
      <template v-for="(item,index) in bannerList">
        <swiper-item>
          <image :mode="'aspectFill'" :src="isExistImg(item.photoUrl)?item.photoUrl:require('@assets/home/banner1.png')" class="banner"/>
        </swiper-item>
      </template>
    </swiper>
    <view class="list-row">
      <view class="list-row-wrap">
        <view class="search-input">
          <image :src="require('@assets/home/search.png')" class="search-img"/>
          <input placeholder="输入科室/医生进行搜索" class="input" :placeholder-class="'placeholder-class'"/>
        </view>
      </view>
    </view>
    <view class="list-row-notice">
      <view class="list-row-wrap">
        <view class="left">
          <image :mode="'aspectFill'" :src="require('@assets/home/news.png')" class="img"/>
          <swiper class="swiper-vertical" :autoplay="true" :indicator-dots="false" :vertical="true" :circular="true" >
            <template v-for="item in noticeList">
              <swiper-item class="swiper-item" @tap="jumpToNoticeDetail(item)">
                <text class="notice">{{ item.title }}</text>
              </swiper-item>
            </template>
          </swiper>
        </view>
        <image :mode="'aspectFill'" :src="require('@assets/home/more.png')" class="forward"/>
      </view>
    </view>
    <view class="list-row-online-topic">
      <view class="list-row-bottom">
        <view class="left" @tap="jumpToHealthConsult">
          <text class="title">健康咨询</text>
          <text class="sub-title">名医在线 轻松复诊</text>
          <image :mode="'aspectFill'" :src="require('@assets/home/consult.png')" class="img"/>
        </view>
        <view class="right" @tap="jumpToSubRequestVisit">
          <text class="title">复诊开药</text>
          <text class="sub-title">专业医生 在线解答</text>
          <image :mode="'aspectFill'" :src="require('@assets/home/medicine.png')" class="img"/>
        </view>
      </view>
    </view>
    <view class="list-row-hospital-service">
      <view class="list-row-top">
        <text class="title">院内服务</text>
      </view>
      <view class="list-row-bottom">
        <view class="list-row-1">
          <template v-for="(item,index) in listItems" :key="index">
            <view class="list-item-1" @tap="jumpToUrl(item)">
              <image :src="item.url" class="img"/>
              <text class="title">{{ item.title }}</text>
            </view>
          </template>
        </view>
      </view>
    </view>
    <view class="list-row-recommend">
      <view class="list-row-wrapper">
        <view class="list-row-top-1">
          <view class="list-row-wrap-1">
            <text>名医推荐</text>
            <view class="right" @tap="jumpToHealthConsult">
              <text class="detail">查看更多</text>
              <image class="img" :src="require('@assets/home/forward.png')"/>
            </view>
          </view>
        </view>
      </view>
      <template v-for="item in doctorList">
        <view class="list-row-container" @tap="jumpToDoctorProfile(item)">
          <view class="list-row-2">
            <image class="img" :src="isExistImg(item.photoUrl)?item.photoUrl:require('@assets/home/avatar.png')"/>
            <view class="list-item-wrap">
              <view class="top">
                <text class="name">{{ item.realName }}</text>
                <text class="profession">{{ item.protitleName }}</text>
                <text class="major">{{ item.deptName }}</text>
              </view >
              <text class="hospital">{{ item.orgName }}</text>
              <text class="major-2">擅长：{{ item.expertIn }}</text>
            </view>
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<script>
import {toRefs, reactive, onActivated, onMounted} from 'vue';
import Taro from '@tarojs/taro'
import {baseUrl} from '@config/Api';
import {isExistImg} from "../../utils/RegUtil";
import {callBannerApi, callDoctorListApi, callNoticeList} from "../../services/SyncRequest";
export default {
  name: "home",
  component: {},
  setup() {
    onMounted( ()=>{
       initData();
    })
    const initData=async ()=>{
      const res = await Promise.all([callBannerApi(1),callNoticeList(1),callDoctorListApi()]);
      if(res[0].code==200){
        state.bannerList = res[0].data;
      }
      if(res[1].code==200){
        state.noticeList = res[1].data;
      }
      if(res[2].code==200){
        state.doctorList = res[2].data;
        // state.doctorList = res[2].data;
      }
    }
    const listItems = [
      {
        url: require('@assets/home/guide.png'),
        // title: '智能导诊',
        title: '智能导诊',
        navigateUrl:`/pages/smart-leading-examining/index`,
      },
      {
        url: require('@assets/home/register.png'),
        title: '预约挂号',
        navigateUrl: baseUrl+'/ancigzh/#/selectDept/AppointmentRegistration'
      },
      {
        url: require('@assets/home/today.png'),
        // title: '今日挂号',
        title: '门诊缴费',
        navigateUrl: baseUrl+'/ancigzh/#/patients/payment'
      },
      {
        url: require('@assets/home/money.png'),
        // title: '在线缴费',
        title: '候诊查询',
        navigateUrl:baseUrl+'/ancigzh/#/Inquiry'
      },
      {
        url: require('@assets/home/inquire.png'),
        title: '流调登记',
        navigateUrl: baseUrl+'/ancigzh/#/flowModulation'
      },
      {
        url: require('@assets/home/hospital-list.png'),
        title: '电子发票',
        navigateUrl: baseUrl+'/ancigzh/#/patients/reportQuery'
      },
      {
        url: require('@assets/home/pay.png'),
        title: '核酸预约',
        navigateUrl: 'http://www.sinowis.com/ancigzh/#/nucleicAppointment'
      },
      {
        url: require('@assets/home/nurse.png'),
        title: '核酸报告',
        navigateUrl: 'http://www.sinowis.com/ancigzh/#/patients/NucleicAcidReport'
      }
    ]
    const state = reactive({
      autoplay: true,
      swiperCurrent: 0,
      doctorList: [
      ],
      noticeList: [
      ],
      bannerList: [

      ]
    })
    const jumpToDoctorProfile=(item)=>{
      Taro.navigateTo({
        url:`/subPackages/pages/doctor-profile/index?item=${JSON.stringify(item)}`
      })
    }
    const onChange = () => {

    }
    const jumpToHealthConsult = () => {
      Taro.navigateTo({
        url: `/subPackages/pages/health-consult/index`
      })
    }
    const jumpToUrl =(item)=>{
      Taro.navigateTo({
        url:item.navigateUrl
      })
    }
    const jumpToSubRequestVisit = () => {
      Taro.navigateTo({
        url: `/subPackages/pages/health-consult/index`
      })
    }
    const jumpToNoticeDetail=(item)=>{
      Taro.navigateTo({url:`/subPackages/pages/notice-detail/index?content=${item.content}`})
    }
    return {
      ...toRefs(state),
      onChange,
      jumpToDoctorProfile,
      jumpToUrl,
      jumpToHealthConsult,
      jumpToSubRequestVisit,
      jumpToNoticeDetail,
      listItems,
      isExistImg
    }
  }

}
</script>

<style lang="scss">
@mixin commonFontStyle($fontSize,$fontWeight,$color,$fontFamily:PingFangSC-Regular) {
  font-size: $fontSize;
  font-family: $fontFamily, PingFang SC;
  font-weight: $fontWeight;
  color: $color;
}

@mixin title {
  font-size: 15PX;
  font-family: myFirstFont;
  //font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #28333B;
}

@mixin sub-title {
  font-size: 13PX;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #485669;
}

@mixin online() {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 84PX;
  padding-top: 13PX;
  padding-left: 10PX;
  border-radius: 5PX;
}

@mixin imgStyle {
  position: absolute;
  bottom: 7PX;
  right: 10PX;
}

@mixin list-row-top($fontFamily:PingFangSC-Regular,$fontWeight:400) {
  padding-left: 10PX;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 44PX;
  position: relative;

  .title {
    font-size: 15PX;
    font-family: $fontFamily, PingFang SC;
    font-weight: $fontWeight;
    color: #333333;
  }

  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    border-top: 1px solid rgba(204, 204, 204, 0.3);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

@mixin pic-txt-mixin {

}

.list-row {
  margin-top: 10PX;
  display: flex;
  padding-left: 16PX;
  padding-right: 16PX;
  flex-direction: column;
  justify-content: center;

  .search-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #F0F0F0;
    border-radius: 17PX;
    height: 34PX;
    padding-left: 11PX;

    .search-img {
      width: 16PX;
      height: 16PX;
    }

    .input {
      padding-left: 6PX;
      font-size: 12PX;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      caret-color: #666;
    }

    .placeholder-class {
      color: #999;
    }
  }
}

.swiper {
  height: 208PX;
}

.banner {
  width: 100%;
  height: 208PX;
}


.list-row-notice {
  margin-top: 10PX;
  display: flex;
  flex-direction: column;
  border-radius: 5PX;
  height: 48PX;
  margin-left: 16PX;
  margin-right: 16PX;
  background: #fff;
  padding-left: 8PX;
  padding-right: 8PX;
  justify-content: center;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        width: 13PX;
        height: 15PX;
      }

      .notice {
        margin-left: 11PX;
        font-size: 14PX;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
    }

    .forward {
      width: 8PX;
      height: 14PX;
    }
  }
}
.swiper-vertical {
  flex: 1;
  height: 48PX;
}
.swiper-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.list-row-online-topic {
  margin-left: 16PX;
  margin-right: 16PX;

  .list-row-top {
    @include list-row-top;
  }

  .list-row-bottom {
    display: flex;
    margin-top: 10PX;
    flex-direction: row;
    justify-content: space-between;

    .left {
      @include online;
      position: relative;
      background: #FBE3DB linear-gradient(180deg, #FBE3DB 0%, #FFDFD4 100%);
      margin-right: 5PX;

      .title {
        @include title();
      }

      .sub-title {
        margin-top: 4PX;
        @include sub-title()
      }

      .img {
        width: 32PX;
        height: 30PX;
        @include imgStyle;
      }
    }

    .right {
      @include online;
      position: relative;
      margin-left: 5PX;
      background: #CDECFD linear-gradient(180deg, #DDF3FF 0%, #CDECFD 100%);

      .title {
        @include title();
      }

      .sub-title {
        margin-top: 4PX;
        @include sub-title();
      }

      .img {
        width: 25PX;
        height: 32PX;
        @include imgStyle;
      }
    }
  }
}

.list-row-hospital-service {
  margin-top: 10PX;
  margin-left: 16PX;
  margin-right: 16PX;
  background: #fff;
  border-radius: 5PX;

  .list-row-top {
    @include list-row-top(PingFangSC-Medium, 500);
  }

  .list-row-bottom {
    padding-top: 16PX;

    .list-row-1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;

      .list-item-1 {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 13PX;

        .img {
          width: 40PX;
          height: 40PX;
        }

        .title {
          margin-top: 7PX;
          font-size: 14PX;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333;
        }
      }
    }
  }
}

.list-row-recommend {
  background: #fff;
  margin-top: 10PX;
  margin-left: 16PX;
  margin-right: 16PX;
  border-radius: 5PX;

  .list-row-top-1 {
    padding-left: 10PX;
    padding-right: 10PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 44PX;
    position: relative;

    &:after {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      content: '';
      border-top: 1px solid rgba(204, 204, 204, 0.3);
      -webkit-transform: scale(0.5);
      transform: scaleY(0.5);
    }

    .list-row-wrap-1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .title {
        @include commonFontStyle(15PX, 500, #333, PingFangSC-Medium)
      }

      .right {
        display: flex;
        flex-direction: row;
        align-items: center;

        .detail {
          margin-right: 9PX;
          @include commonFontStyle(14PX, 400, #999)
        }

        .img {
          width: 8PX;
          height: 14PX;
        }
      }
    }
  }

  .list-row-container {
    display: flex;
    margin-left: 10PX;
    margin-right: 10PX;
    flex-direction: column;
    justify-content: center;
    height: 100PX;
    position: relative;

    &:after {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      content: '';
      border-top: 1px dashed rgba(204, 204, 204, 0.6);
      -webkit-transform: scale(0.5);
      transform: scaleY(0.5);
    }

    .list-row-2 {
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        width: 69PX;
        height: 69PX;
      }

      .list-item-wrap {
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

          .major {
            margin-left: 6PX;
            @include commonFontStyle(14PX, 400, #888)
          }
        }

        .hospital {
          margin-top: 11PX;
          @include commonFontStyle(13PX, 400, #888)
        }

        .major-2 {
          margin-top: 9PX;
          @include commonFontStyle(13PX, 400, #888)

        }
      }
    }
  }
}
</style>
