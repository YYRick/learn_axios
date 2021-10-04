import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// let baseURL = "http://152.136.185.210:7878/api/hy66";
/* axios的使用 */
// axios({
//   //请求地址
//   url: baseURL+"/home/data?type=sell&page=2",
//   //不写默认是get请求
//   //method: 'post'
//   method: 'get'
// }).then(res =>{
//   console.log(res);
// })


// /* url后续参数还可以这样写 */
// axios({
//   url: baseURL + "/home/data",
//   params:{
//       type: 'pop',
//       page: 1
//   },
//   method:'get'
// }).then(res =>{
//   console.log(res);
// })

//3.全局配置axios的默认值
// axios.defaults.baseURL = "http://152.136.185.210:7878/api/hy66";
// //设置超时时间 单位是ms
// axios.defaults.timeout = 5000;

// //2.axios发送并发请求
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   /* 
//     axios.spread：可以将返回的数组类型的数据进行展开
//   */
//   console.log(res1);
//   console.log(res2);
// }))


// axios({
//   url: '/category'
// }).then(res => {
//   console.log(res);
// })


//4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: "http://152.136.185.210:7878/api/hy66",
//   timeout: 5000
// })


// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res =>{
//   console.log(res);
// })

//5.封装request模块
import { request } from './metwork/request'

//方法1
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })


//方法2
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function(res){
//     console.log(res);
//   },
//   failure: function(err){
//     console.log(err);
//   }
// })


//方法3
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})