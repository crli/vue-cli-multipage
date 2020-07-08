/*
 * @Author: crli
 * @Date: 2020-02-01 20:52:48
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 14:11:20
 * @Description: file content
 */
import request from './request'

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
