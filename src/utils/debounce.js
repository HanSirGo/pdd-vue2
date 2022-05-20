let debounce = (fn,wait) => {
  //业务函数
  let timer = null;
  return function(){
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, wait);
  }
}
export default debounce