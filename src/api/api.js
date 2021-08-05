/** 
 * api接口的统一封装
 */
import request from './http';
// import Qs from 'qs';

// 发送验证码
export function SendVerify(query) {
    return request({
        url: '/api/index',
        method: 'get',
        params: query
    })
}
// 邀请码校验
export function CheckInvitationCode(query) {
    return request({
        url: 'User/CheckInvitationCode',
        method: 'post',
        data: query
    })
}
// 获取首页数据
export function getHomeData() {
    return request({
        url: '/api/index',
        method: 'get',

    })
}
// 获取选项卡数据
export function getxuanxiangData(query) {
    return request({
        url: '/api/index',
        method: 'get',
        params: query
    })
}
// 获取详情数据
export function getxiangqingData(query) {
    // console.log(query.good)
    return request({
        url: 'api/goods/' + query.good,
        method: 'GET',
        // params:query
    })
}
// 注册
export function register(query) {
    return request({
        url: '/api/auth/register',
        method: 'post',
        data: query
    })
}
// 登录
export function login(query) {
    return request({
        url: '/api/auth/login',
        method: 'post',
        data: query
    })
}