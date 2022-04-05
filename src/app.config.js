export default {
  pages: [
    'pages/index/index',
    'pages/base/index',
    'pages/chat/chat',
    'pages/webview/index',
    'pages/test/index',
    'pages/smart-leading-examining/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    onReachBottomDistance: 40
  },

  //为了使主包体积不大于2M 便于发布版使用分包加载机制。其他更多页面装载到子包中
  // 超过2M后使用分包机制 目前小程序最大支持20M 每个包体积不超过2M
  "subpackages": [
    {
      "root": "subPackages",
      pages: [
        'pages/health-consult/index',
        'pages/notice-detail/index',
        'pages/doctor-profile/index',
        'pages/doctor-brief/index',
        'pages/hospital-brief/index',
        'pages/choose-client/index',
        'pages/add-patient/index',
        'pages/my-attention/index',
        'pages/address-manage/index',
        'pages/appoint-time/index',
        'pages/prescription-detail/index',
      ]
    },
    {
      "root": "subPackagesA",
      pages: [
        'pages/sample/index',
        'pages/improve-inquiry/index',
        'pages/my-drug-order/index',
        'pages/my-physician-visit/index',
        'pages/order-detail/index',
        'pages/patient-evaluate/index',
        'pages/publish-comment/index',
        'pages/patient-manage/index',
        'pages/pay-fail/index',
        'pages/pay-success/index',
        'pages/rp-list/index',
        'pages/my-evaluate/index',
        'pages/my-rp/index',
        'pages/prescription-detail/index',
        'pages/drug-order-detail/index'
      ]
    },
    {
      "root": "subPackagesB",
      pages: [
        'pages/medicare-card/index',
        'pages/electronic-health-card/index',
        'pages/diagnosis-prescribe-detail/index',
        'pages/person-seeking-ms/index',
        'pages/add-shipping-address/index',
        'pages/physician-visit-detail/index',
        'pages/submit-inquiry-success/index',
        'pages/wx-pay/index',
        'pages/order-pay/index',
        'pages/self-fetch-status/index',
        'pages/self-fetch-payResult/index'
      ]
    }
  ],
  //分包后，实际我们没进入详情页时，对应的代码包是没有加载的，
  // 这个时候用户首次从主页跳到详情页，则会出现加载等待界面，
  // 也是体验不够友
  // 好，实际上我们可以利用微信小程序提供的分包预加载配置功能
  preloadRule: {
    'pages/index/index': {
      network: 'all',
      packages: ['subPackagesA']
    },
  },
  "permission": {
    "scope.userLocation": {
      "desc": "是否允许?"
    },

  },
}
