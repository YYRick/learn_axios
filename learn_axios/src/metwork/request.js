import axios from 'axios'
//---------------方法1----------------
// export function request(config, success, failure){
//    //1.创建axios的实例
//    const instance = axios.create({
//         baseURL: "http://152.136.185.210:7878/api/hy66",
//         timeout: 5000
//    })

//    //2.发送真正的网络请求
//    instance(config)
//       .then(res => {
//         //   console.log(res);
//           success(res);
//       })
//       .catch(err => {
//         //   console.log(err);
//           failure(err);
//       })

   
// }

//-------------------方法2
// export function request(config){
// //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: "http://152.136.185.210:7878/api/hy66",
//         timeout: 5000
//     })

//     instance(config.baseConfig)
//     .then(res => {
//         config.success(res);
//     })
//     .catch(err => {
//         config.failure(err);
//     })
// }


//方法三
// export function request(config){
//   return new Promise((resolve, reject) =>{
//      //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: "http://152.136.185.210:7878/api/hy66",
//         timeout: 5000
//     })

//     instance(config)
//     .then(res => {
//         resolve(res);
//     })
//     .catch(err => {
//         reject(err);
//     })
//   })
    
// }


export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000
    })
    
    //2.axios的拦截器
    instance.interceptors.request.use(config => {
       console.log(config);
       /* 
         1.请求拦截：我们在这会做的事情
         //1.比如config中的一些信息不符合服务器的要求

         //比如请求图标(转圆圈)
 

         //比如网络请求登录(token),必须要携带一些特殊的信息

       */
       return config
    },err =>{
    //    console.log(err);
    })


    //2.2 响应拦截
    instance.interceptors.response.use(res =>{
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config) 
}