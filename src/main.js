import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// js异常捕获：vue组件周期
app.config.errorHandler = function(err, vm, info) {
  console.log('errorHandler11:', err, info)
  /**
   * TODO: 1. 通过动态创建img 的方式上传错误信息
   * eg: new Image().src = 'http://localhost:7001/monitor/error'+ '?info=xxxxxx'
   * TODO: 2. Ajax 上报
   * : 和普通业务请求一样，但是参数需要做序列化处理
   * /// 参数处理
   * : 1) 将异常数据从属性中解构出来，存入一个JSON对象
   * : 2) 将JSON对象转换为字符串
   * : 3) 将字符串转换为Base64
   * eg: window.btoa(JSON.stringify(objct))
   */
}

// js异常捕获：同步、异步(settimeout)、资源加载
window.addEventListener('unhandledrejection', (e) => {
  throw e.reason
})

// js异常捕获: 异步(promise | asnyc/await)
window.addEventListener('error', (args) => {
  console.log('error event: ', args)
})

app.mount('#app')
