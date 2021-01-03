//窗口加载完毕|窗口大小变化时,  根据窗口当前大小，设定body的字体大小

let docEl = document.documentElement;
let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
let recalc = function() {
  let clientWidth = docEl.clientWidth;
  if (clientWidth >= 640) {
    clientWidth = 640;
  };
  if (!clientWidth) return;
  docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
};
// if (!document.addEventListener) return;
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);//DOMContentLoaded == $(document).ready(fn)|$(fn)