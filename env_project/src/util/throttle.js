// export default function throttle (func, time = 200) {
//   /**
//    * 
//    * 每个一段时间自动执行，但是在此时间内，不会触发函数
//    * 
//    */

//   let flag = true;// 判断是否可以执行
//   let timer = null;

//   return function () {
//     if (flag) {
//       clearTimeout(timer)
//       flag = true
//     }
//     timer = setTimeout(() => {
//       func.call(this)
//       flag = false
//     }, time)
//   }
// }


// 节流
// 2、节流函数体
function throttle (fn, delay = 1000) {
  // 4、通过闭包保存一个标记
  let canRun = true;
  return function () {
    // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
    if (!canRun) {
      return;
    }
    // 6、将 canRun 设置为 false，防止执行之前再被执行
    canRun = false;
    // 7、定时器
    setTimeout(() => {
      fn.apply(this, arguments);
      // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
      canRun = true;
    }, delay);
  };
}

export default throttle