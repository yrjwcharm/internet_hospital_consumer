const formatNumber = (n) => {
  const m = n.toString ();
  return m[1] ? m : '0' + m
};


// @ts-ignore
Date.prototype.format = function(fmt) {
  let o = {
          'M+': this.getMonth () + 1,                 //月份
          'd+': this.getDate (),                    //日
          'h+': this.getHours (),                   //小时
          'm+': this.getMinutes (),                 //分
          's+': this.getSeconds (),                 //秒
          'q+': Math.floor ((this.getMonth () + 3) / 3), //季度
          'S': this.getMilliseconds ()             //毫秒
  };
  if (/(y+)/.test (fmt)) {
          fmt = fmt.replace (RegExp.$1, (this.getFullYear () + '').substr (4 - RegExp.$1.length));
  }
  for (let k in o) {
          if (new RegExp ('(' + k + ')').test (fmt)) {
                  // @ts-ignore
                  fmt = fmt.replace (RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr (('' + o[k]).length)));
          }
  }
  return fmt;
}

function add0(m) {
  return m < 10 ? '0' + m : m
}


export const formatTime = (date) => {
  const year = date.getFullYear ();
  const month = date.getMonth () + 1;
  const day = date.getDate ();
  const hour = date.getHours ();
  const minute = date.getMinutes ();
  const second = date.getSeconds ();

  return [year, month, day].map (formatNumber).join ('/') + ' ' + [hour, minute, second].map (formatNumber).join (':')
};

export const format = (timestamp) => {
  let time = new Date (timestamp);
  let h = time.getHours ();
  let mm = time.getMinutes ();
  let s = time.getSeconds ();
  return add0 (h) + ':' + add0 (mm) + ':' + add0 (s);
};

export function sharePage(param) {

  let paramArr = [];
  if (param && typeof param == 'object') {
          for (let key in param) {
                  paramArr.push (key + '=' + param[key])
          }
  }


  return {
          title: '即构音视频云',
          path: getCurrentPages ().pop ().route + '?' + paramArr.join ('&'),
          imageUrl: '/resource/share.png'
  }
}
export function symmetryRound(number, decimal) {
    let sign = (number < 0) ? -1 : 1;
    let pow = Math.pow(10, decimal);
    number = sign * number;
    return sign * Math.round(number * pow) / pow;
}
