/**
 * api接口的统一封装
 */
import request from '@/utils/http'
import Qs from 'qs'

export function login (query) {
    return request({
        url: '/tokerInf/form/projectOrder/editOrder',
        method: 'post',
        data: query
    })
}

export function CheckInvitationCode (query) {
    return request({
        url: '/shop/goods/category/all?' + Qs.stringify(query),
        method: 'get'
    })
}
