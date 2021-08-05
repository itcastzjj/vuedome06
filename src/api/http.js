import Axios from 'axios'
// import Vue from 'vue'
import router from '../router/index.js'
import {
    Notify
} from 'vant';
let axios = Axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 1000 * 12,
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

// /** 
//  * 提示函数 
//  * 显示一秒后关闭
//  */
// const tip = msg => {
//     Vue.$toast({
//         message: msg,
//         duration: '1000'
//     });
// }

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    switch (status) {
        case 401:
            // console.log('账号或密码不正确');
            Notify('账号或密码不正确');
            break;
        case 403:
            Notify('登录过期，请重新登录');
            // console.log('登录过期，请重新登录');
            // 清除token
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        case 404:
            // console.log('网络请求不存在');
            Notify('网络请求不存在');

            break;
        default:
            console.log(other);
    }
}

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么(后期在这里加上token)
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);  
        // Vue.$indicator.open(); 
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    // 请求成功
    (response) => {
       // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 请求失败
    error => {
        const {
            response
        } = error;
        // console.log(error.response)
        if (response) {
            // 请求已发出，但是不在200的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
        }
    }
)

export default axios;