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
    // 2.发送真正的网络请求
    return instance(config) 
}