import Taro from "@tarojs/taro";

export const request=(url, postData, method, type, hideLoading)=> {
  //接口请求
  if (!hideLoading) {
    Taro.showLoading({
      title: '请稍候...',
      mask: true
    })
  }
  console.log(333,url);
  return new Promise(async (resolve, reject) => {
    Taro.request({
      url,
      data: postData,
      header: {
        'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
        'token': Taro.getStorageSync('token')
      },
      method: method, //'GET','POST'
      dataType: 'json',
      success: async (res) => {
        !hideLoading && Taro.hideLoading()
        // if (res.data.code == 50014) {
        //
        // } else if (code == 50000) {
        //
        // } else {
        //   resolve(res.data);
        // }
        resolve(res.data);
      },
      fail: (res) => {
        !hideLoading && Taro.showToast({icon:'none',title:'网络不给力，请稍后再试~'})
        //wx.hideLoading()
        reject(res)
      }
    })
  })
}
export const uploadFile=(src)=> {
  wx.showLoading({
    title: '请稍候...',
    mask: true
  })
  return new Promise((resolve, reject) => {
    const uploadTask = wx.uploadFile({
      url: 'http://39.108.124.252:8081/fileServce/file/ ', //测试地址,暂不使用
      filePath: src,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: {},
      success: function (res) {
        wx.hideLoading()
        let d = JSON.parse(res.data)
        if (d.code === 1) {
          let fileObj = JSON.parse(d.data)[0];
          //文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
          resolve(fileObj)
        }
      },
      fail: function (res) {
        reject(res)
        wx.hideLoading();
      }
    })
  })
}
