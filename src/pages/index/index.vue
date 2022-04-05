<template>
  <view class="container">
    <HomePage v-if="active==0"/>
    <InfoPage v-if="active==1"/>
<!--    <MsgPage v-if="active==2"/>-->
    <UserPage v-if="active==2"/>
    <AtTabBar
      fixed
      color="#999"
      :iconSize="24"
      selectedColor="#06B48D"
      :tabList="tabList"
      :onClick="handleClick"
      :current="active"
    />
  </view>
</template>

<script setup>
import Taro, {useShareAppMessage,useShareTimeline} from '@tarojs/taro'
import {ref, onMounted} from 'vue'
import HomeActive from '@assets/tab-bar/home-active.png';
import Home from '@assets/tab-bar/home.png';
import NewsActive from '@assets/tab-bar/news-active.png'
import News from '@assets/tab-bar/news.png'
import MsgActive from '@assets/tab-bar/msg-active.png'
import Msg from '@assets/tab-bar/msg.png'
import UserActive from '@assets/tab-bar/user-active.png';
import User from '@assets/tab-bar/user.png';
import HomePage from '../home/home';
import UserPage from '../user/user'
import InfoPage from '../info/info'
import MsgPage from '../msg/msg'
//转发朋友
useShareAppMessage(res => {
  if (res.from === 'button') {
    // 来自页面内转发按钮
    console.log(res.target)
  }
  return {
    title: '自定义转发标题',
    path: '/page/index/index'
  }
})
//分享朋友圈
useShareTimeline(() => {
  console.log('onShareTimeline')
})
const active = ref(0);
onMounted(() => {
  //改变状态栏颜色
  Taro.setNavigationBarColor({
    frontColor:'#ffffff',
    backgroundColor:'#00000000'
  })
})
const tabList = [
  {title: '首页', image: Home, selectedImage: HomeActive},
  {title: '资讯', image: News, selectedImage: NewsActive,},
  // {title: '消息', image: Msg, selectedImage: MsgActive,text:'8'},
  {title: '我的', image: User, selectedImage: UserActive},
]
const handleClick = (value) => {
  active.value = value;
  if(value==0)
    Taro.setNavigationBarColor({
      frontColor:'#ffffff',
      backgroundColor:'#00000000'
    })
  else if (value ==1|| value ==2)
    Taro.setNavigationBarColor({
      frontColor:'#000000',
      backgroundColor:'#00000000'
    })



}
</script>

<style  lang="scss">
.container {
  height: 100%;
  overflow-y: scroll;
  background: #f9f9f9;
  padding-bottom: 67PX;
}
</style>
