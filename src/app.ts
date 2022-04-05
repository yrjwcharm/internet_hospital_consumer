import { createApp } from 'vue'
import Taro from '@tarojs/taro'
import store from './store' //使用vueX 这个没有Pinia 好用 现在vue 状态管理Pinia吃香
// import '@utils/mtj-wx-sdk'; //小程序 接入百度统计平台 账号目前是我自己的 详情请查看Taro官网
import { createUI } from 'taro-ui-vue3'
// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'
import './app.scss'
import {callGetOpenIdApi} from "./services/SyncRequest";
function _getSystemInfo() {
  if(process.env.TARO_ENV==='weapp') {
    Taro.getSystemInfo({
      success: function (res) {
//model中包含着设备信息
        console.log(res.model)
        var model = res.model
        if (model.search('iPhone X') != -1 || model.search('iPhone 11') != -1 || model.search('iPhone 12') != -1) {
          Taro.setStorageSync('isIphoneX', true);
        } else {
          Taro.setStorageSync('isIphoneX', false);
        }
      }
    })
  }
}
function getOpenId(){
  Taro.login({
     success:async  result =>{
       const res = await callGetOpenIdApi({code:result.code,appid:'wxb81e079d8b461f7f'});
       if(res.code ==200){
         const {openId,tokenValue}=res.data;
         console.log(333,res.data);
          Taro.setStorageSync('openId',openId);
          Taro.setStorageSync('token',tokenValue);
       }
     }
  })
}
// function loadFont(){
//   Taro.loadFontFace({
//     family: 'ShouShuti',
//     global:true,
//     source: 'url("https://interhospital.youjiankang.net/snowy/ShouShuti_Regular.ttf")',
//     success: function (){
//       console.log('加载成功');
//     },
//     fail:function (){
//       console.log(333,'加载失败');
//     }
//   })
// }
function update() {
  if(process.env.TARO_ENV==='weapp') {
    const updateManager = Taro.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log('是否有更新的版本', res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      Taro.showModal({
        title: '更新提示',
        showCancel: false,
        confirmColor: '#3991FA',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })
  }
}
const App = createApp({
  onShow (options) {
    update();
    _getSystemInfo();
    getOpenId();
    // loadFont();

    Taro.showModal({
      content:'小程序需要订阅以下模板获取通知消息',
      // showCancel:false,
      confirmColor:'#06B48D',
      success : function(res) {
        //trial  developer formal
        Taro.requestSubscribeMessage({
          tmplIds: ['GoxgXS7MJx41biXrWo93NiP7fSN4-ImJ_s19jfQv9kg','waHbyRrssDEfl0l_eizw4I7UKUliznf-7Cf9_N4JkgU'],
          success: function (res) {
            console.log(333,'授权成功');
          },
          fail : function(res) {
            console.log(333,'授权失败');

          }
        })
      }
    })
  },
  onLaunch : function(res) {
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
const tuv3 = createUI()
App.use(store).use(tuv3)
export default App
