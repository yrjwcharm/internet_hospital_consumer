<template>
  <view class="user-container">
    <view class="nav-header" :style="'padding-top:'+statusBarHeight+'PX'">
      <view :class="platform=='android'?'header android':'header ios'">
        <text>我的</text>
      </view>
    </view>
    <view class='user-list' @tap="getUserProfile">
      <view class='user-list-wrap'>
         <image :src="isEmpty(userAvatar)?require('@assets/svg/default_avatar.svg'):userAvatar" class="wx-avatar"/>
        <text class="wx-username">{{isEmpty(userNickName)?'获取头像昵称':userNickName}}</text>
<!--        <open-data type="userAvatarUrl" class="wx-avatar"></open-data>-->
<!--        <open-data type='userNickName' class="wx-username"></open-data>-->
      </view>
    </view>
    <template v-for="(item,index) in state.listItems" :key="index">
      <view :class="(index==4||index==6)?'list-item list-style':'list-item'" @tap="jumpToPage(item,index)">
        <view class="list-row-wrap">
          <view class="left-wrap">
            <image :src="item.img" class="img"/>
            <text class="title">{{ item.title }}</text>
          </view>
          <image :src="require('@assets/user/arrow_right.png')" class="forward"/>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup>
import {onMounted, reactive, ref, toRefs} from "vue";
import  Taro from '@tarojs/taro'
const userAvatar = ref('');
const userNickName = ref('');
const statusBarHeight = Taro.getSystemInfoSync().statusBarHeight;
const platform = Taro.getSystemInfoSync().platform;
import {isEmpty} from "../../utils/RegUtil";
onMounted(()=>{
  const avatar = Taro.getStorageSync('userAvatar');
  const nickName = Taro.getStorageSync('userNickName');
  userAvatar.value = avatar;
  userNickName.value = nickName;
})
const getUserProfile =()=>{
  Taro.getUserProfile({
    desc: '用于获取用户头像和昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      const {avatarUrl,nickName} = res.userInfo;
      userAvatar.value = avatarUrl;
      userNickName.value = nickName;
      // localStorage
      Taro.setStorageSync('userAvatar',avatarUrl);
      Taro.setStorageSync('userNickName',nickName);
    }
  })
}
const state = reactive({
  listItems: [
    {
      img: require('@assets/user/my-order.png'),
      title: '我的预约',
      // url: '/subPackagesB/pages/order-pay/index'
      // url: '/subPackagesB/pages/self-fetch-status/index'
      url: '/subPackagesB/pages/self-fetch-payResult/index'
    },
    {
      img: require('@assets/user/my-topic.png'),
      title: '我的问诊',
      url: '/subPackagesA/pages/my-physician-visit/index'
    },
    {
      img: require('@assets/user/drug-order.png'),
      title: '药品订单',
      url: '/subPackagesA/pages/my-drug-order/index'
    },
    {
      img: require('@assets/user/my_rp.png'),
      title: '我的处方',
      url: '/subPackagesA/pages/my-rp/index'
    },
    {
      img: require('@assets/user/my_evaluate.png'),
      title: '我的评价',
      url: '/subPackagesA/pages/my-evaluate/index'
    },
    {
      img: require('@assets/user/my-focus.png'),
      title: '我的关注',
      url: '/subPackages/pages/my-attention/index'
    },
    {
      img: require('@assets/user/people.png'),
      title: '就诊人管理',
      url: '/subPackagesA/pages/patient-manage/index'
    },
    {
      img: require('@assets/user/address.png'),
      title: '收货地址管理',
      url: '/subPackages/pages/address-manage/index',
    },
    {
      img: require('@assets/user/service.png'),
      title: '在线客服',
      url: '/subPackages/pages/address-manage/index',
    },
    {
      img: require('@assets/user/hospital.png'),
      title: '医院信息',
      url: '/subPackages/pages/address-manage/index',
    },
    {
      img: require('@assets/user/hospital.png'),
      title: '测试页面',
      url: '/pages/webview/index',
    }

  ]
})
const jumpToPage = (item,index) => {
  const {url}=item;
  Taro.navigateTo({
    url
  })
}
</script>

<style lang="scss">
@import "../../mixin";
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
    border-top: 1px dashed rgba(204, 204, 204, 0.6);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }

}

.user-container {
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
.nav-header {
  background: #fff;
  @include bottom_line();
  .android{
    align-items: flex-start;
    padding-left: 12PX;
  }
  .ios{
    align-items: center;
  }
  .header {
    display: flex;
    height: 44PX;
    flex-direction: column;
    justify-content: center;
    @include commonFontStyle(14PX,400,#000);
  }
}
.user-list {
  height: 90PX;
  display: flex;
  margin-bottom: 10PX;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding-left: 20PX;

  .user-list-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;

    .wx-avatar {
      width: 50PX;
      height: 50PX;
      border-radius: 50PX;
      overflow: hidden;
    }

    .wx-username {
      font-size: 16PX;
      font-family: PingFangSC-Regular;
      color: #333;
      margin-left: 14PX;
    }
  }
}

.list-style {
  margin-bottom: 10PX;
}
.list-item {
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 48PX;
  padding-left: 16PX;
  padding-right: 16PX;
  position: relative;
  justify-content: center;

  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    border-top: 1px solid #EEE;
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        width: 16PX;
        height: 16PX;
      }

      .title {
        margin-left: 10PX;
        @include commonFontStyle(14PX, 400, #333);
        font-family: ShouShuti;

      }
    }

    .forward {
      width: 16PX;
      height: 16PX;
    }
  }
}
</style>
