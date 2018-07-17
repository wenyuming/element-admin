import axios from 'axios'
// import store from '@/store'
// import webconfig from '@/config'
// function getQueryString(name) {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//   var r = window.location.search.substr(1).match(reg);
//   if (r != null)
//     return unescape(r[2]);
//   return null;
// }
let v = this
console.log(v, 'v')
axios.defaults.timeout = 5000
axios.interceptors.request.use(config => {
  // if (localStorage.getItem("id") && localStorage.getItem("login_time") && localStorage.getItem("access_token"))
  // {
  //   config.headers.common['id'] = localStorage.getItem("id")
  //   config.headers.common['login_time'] = localStorage.getItem("login_time")
  //   config.headers.common['access_token'] = localStorage.getItem("access_token")
  // }

  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading
  // if (res.data.code === 302) {
  //   let url = webconfig.baseURI + '/#/login'
  //   window.location.href = url
  // } 
  // else {
  //   localStorage.setItem("isLogin", true)
  // }
  return res
}, error => {
  if (error.message === 'Network Error') {
    return Promise.reject(error)
  }
})

export default axios

