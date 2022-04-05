// /**
//  * 节流
//  * @param action
//  * @param delay
//  * @returns {Function}
//  */
import Taro from '@tarojs/taro'
export function throttle(fun, delay) {
  let last, deferTimer
  return function (args) {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}


/**
 * 防抖
 */
export function debounce(fn, delay = 300) {
  let timer = null;
  return function (...rest) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, rest);
      timer = null;
    }, delay);
  }
}

export function desensitizationMobile(str) {
  if (null != str && str != undefined) {
    let pat = /(\d{3})\d*(\d{4})/;
    return str.replace(pat, '$1****$2');
  } else {
    return "";
  }
}

export function desensitizationIdCard(str) {
  if (null != str && str != undefined) {
    let pat = /(\w{2})\w*(\w{2})/;
    return str.replace(pat, '$1**************$2');
  } else {
    return "";
  }
}

export function convertObj(data) {
  let _result = [];
  for (let key in data) {
    let value = data[key];
    if (value.constructor == Array) {
      value.forEach(function (_value) {
        _result.push(key + "=" + _value);
      });
    } else {
      _result.push(key + '=' + value);
    }
  }
  return _result.join('&');
}
export function recursiveTraversalTree(treeNodes) {
  if (!treeNodes || !treeNodes.length) return;

  for (let i = 0, len = treeNodes.length; i < len; i++) {

    let childs = treeNodes[i].children;

    console.log(treeNodes[i].id);

    if (childs && childs.length > 0) {
      recursiveTraversalTree(childs);
    }
  }
};

console.log('------------- 递归实现 ------------------');
// parseTreeJson(treeNodes);

export const uniqueArr = (arr) => Array.from(new Set(arr)) //[1,2,3,4]
export const unique = (arr) => [...new Set([1, 2, 3, 3, 4, 4])] //[1,2,3,4]
//[1,2,3,4]
/*类数组转化数组形式*/
// Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)
// Array.prototype.slice.apply(arguments)
// Array.from(arguments)
//   [...arguments]
/**
 * （对称）四舍五入
 * @param  {[type]} number  [待处理数字]
 * @param  {[type]} decimal [需要保留的小数位]
 * @return {[type]}         []
 */
export function symmetryRound(number, decimal) {
  let sign = (number < 0) ? -1 : 1;
  let pow = Math.pow(10, decimal);
  number = sign * number;
  return sign * Math.round(number * pow) / pow;
}


