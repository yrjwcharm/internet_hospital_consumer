import Taro from "@tarojs/taro";

export function isMobile(mobile) {
  let regExp = /^1(?:3[0-9]|4[5-9]|5[0-9]|6[12456]|7[0-8]|8[0-9]|9[0-9])[0-9]{8}$/
  if (!regExp.test(mobile)) {
    return false
  } else {
    return true
  }

}
export function isEmpty(str){
  if(str===null||str===undefined||str===''){
    return true;
  }
  return false;
}
export function isTel(tel) {
  let regExp = /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/;
  if (!regExp.test(tel)) {
    return false;
  }
  return true;

}

export function isChineseName(name) {
  let reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  if (!reg.test(name)) {
    return false;
  }
  return true;
}

export const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
/* */
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());


export const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// Result: 272
/*查找给定日期的哪一天。 找出一年中的哪一天*/

/*Javascript 没有内置的大写函数，因此我们可以使用以下代码。 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
// capitalize("follow for more")// Result: Follow for more
/*找出两日期之间的天数*/
export const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
// dayDif(new Date("2020-10-21"), new Date("2021-10-22"))// Result: 366


/*生成随机十六进制*/
export const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
//Result: #92b008

/*从 URL 获取查询参数*/
export const getParameters = (URL) => {
  URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\"').replace(/&/g, '","').replace(
    /=/g, '":"') + '"}');
  return JSON.stringify(URL);
};
/*将 RGB 转换为十六进制*/
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(0, 51, 255); // Result: #0033ff

/*逗号运算符 ,*/
function sum(arr) {
  return ([arr[0], arr[1]] = [arr[1], arr[0]]), arr[0] + arr[1];
}

const list = [1, 2];
console.log(sum(list));// 返回 3，此时 list 为[2, 1]


export function isResidenceBooklet(booklet) {
  let reg = /^[a-zA-Z0-9]{3,21}$/;
  if (!reg.test(booklet)) {
    return false;
  }
  return true;

}

// 护照验证
export function isPassport(passport) {
  let reg = /^[a-zA-Z]{5,17}$ | [a-zA-Z0-9]{5,17}$/;
  if (!reg.test(passport)) {
    return false;
  }
  return true;
}

export function isOfficerCard(officerCard) {
  let reg = /^[\u4E00-\u9FA5]{1,2}(字第)([0-9a-zA-Z]{4,8})(号?)$/;
  if (!reg.test(officerCard)) {
    return false;
  }
  return true;
}

export function isDriverLicense(driverLicense) {
  let reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x|X)$/;
  if (!reg.test(driverLicense)) {
    return false;
  }
  return true;
}

//港澳居民来往内地通行证
export function isHongKongMacaoPass(pass) {
  let reg = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
  if (!reg.test(pass)) {
    return false;
  }
  return true;
}

//台湾居民来往内地通行证
export function isTaiWanPass(pass) {
  let reg = /^([0-9]{8}|[0-9]{10})$/;
  if (!reg.test(pass)) {
    return false;
  }
  return true;

}

/**
 * @method 身份证号码校验入口方法
 * @param {String} val 身份证号
 * @returns {Boolean}
 */
export function isIdCard(val) {
  val += ''
  if (checkCode(val)) {
    let date = val.substring(6, 14)
    if (checkDate(date)) {
      if (checkProv(val.substring(0, 2))) {
        return true
      }
    }
  }
  return false
}

/**
 * @method 校验码校验
 * @param {String} val 身份证号
 * @returns {Boolean}
 */
let checkCode = function (val) {
  let p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  let code = val.substring(17)
  if (p.test(val)) {
    let sum = 0
    for (let i = 0; i < 17; i++) {
      sum += val[i] * factor[i]
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true
    }
  }
  return false
}

/**
 * @method 出生日期校验
 * @param {String} val 身份证号
 * @returns {Boolean}
 */
let checkDate = function (val) {
  let pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
  if (pattern.test(val)) {
    let year = val.substring(0, 4)
    let month = val.substring(4, 6)
    let date = val.substring(6, 8)
    let date2 = new Date(year + '-' + month + '-' + date)
    if (date2 && date2.getMonth() == (parseInt(month) - 1)) {
      return true
    }
  }
  return false
}
/**
 * @method 所在城市校验
 * @param {String} val 身份证号
 * @returns {Boolean}
 */
let checkProv = function (val) {
  let pattern = /^[1-9][0-9]/
  let provs = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门'
  }
  if (pattern.test(val)) {
    if (provs[val]) {
      return true
    }
  }
  return false
}


/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
  let sum = 0; // 声明加权求和变量
  if (a_idCard[17].toLowerCase() == 'x') {
    a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
  }
  for (let i = 0; i < 17; i++) {
    sum += Wi[i] * a_idCard[i]; // 加权求和
  }
  let valCodePosition = sum % 11; // 得到验证码所位置
  if (a_idCard[17] == ValidateCode[valCodePosition]) {
    return true;
  } else {
    return false;
  }
}

/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位书身份证字符串
 * @return
 */
function isValidityBirthBy18IdCard(idCard18) {
  let year = idCard18.substring(6, 10);
  let month = idCard18.substring(10, 12);
  let day = idCard18.substring(12, 14);
  let temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
  // 这里用getFullYear()获取年份，避免千年虫问题
  if (temp_date.getFullYear() != parseFloat(year) ||
    temp_date.getMonth() != parseFloat(month) - 1 ||
    temp_date.getDate() != parseFloat(day)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位书身份证字符串
 * @return
 */
function isValidityBirthBy15IdCard(idCard15) {
  let year = idCard15.substring(6, 8);
  let month = idCard15.substring(8, 10);
  let day = idCard15.substring(10, 12);
  let temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
  // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
  if (temp_date.getYear() != parseFloat(year) ||
    temp_date.getMonth() != parseFloat(month) - 1 ||
    temp_date.getDate() != parseFloat(day)) {
    return false;
  } else {
    return true;
  }
}

//去掉字符串头尾空格
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function isEmojiCharacter(substring) {
  for (let i = 0; i < substring.length; i++) {
    const hs = substring.charCodeAt(i)
    if (hs >= 0xd800 && hs <= 0xdbff) {
      if (substring.length > 1) {
        const ls = substring.charCodeAt(i + 1)
        let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000
        if (uc >= 0x1d000 && uc <= 0x1f77f) {
          return true
        }
      }
    } else if (substring.length > 1) {
      const ls = substring.charCodeAt(i + 1)
      if (ls === 0x20e3) {
        return true
      }
    } else {
      if (hs >= 0x2100 && hs <= 0x27ff) {
        return true
      } else if (hs >= 0x2B05 && hs <= 0x2b07) {
        return true
      } else if (hs >= 0x2934 && hs <= 0x2935) {
        return true
      } else if (hs >= 0x3297 && hs <= 0x3299) {
        return true
      } else if (hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030 ||
        hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b || hs === 0x2b50) {
        return true
      }
    }
  }
}

//校验车架号
export function isVehicle(val) {
  let patrn = /^[A-HJ-NP-Za-hj-np-z0-9]+$/
  if (!patrn.test(val) || val === '') {
    return false
  } else {
    return true
  }
}

export function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

export function testMobileType() {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'android'
  } else if (isiOS) {
    return 'ios'
  } else {
    return 'pc'
  }
}
export function isExistImg(ext) {
    return [
      'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'svg',].indexOf(ext?.toLowerCase()??'') !== -1;
}
