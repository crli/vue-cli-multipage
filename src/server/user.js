/*
 * @Author: crli
 * @Date: 2020-02-01 20:52:48
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 15:34:32
 * @Description: file content
 */
import request from './request'
const SUB_xxx_URL = '/asdfd'
export function login (data) {
  return request({
    url: `${SUB_xxx_URL}/a/b/login`,
    method: 'post',
    data
  })
}
export function xxxxxx(data, { pageNum, pageSize }) {
  return request({
    url: `${SUB_xxx_URL}a/b/xxxxxx`,
    method: 'post',
    data: {
      entity: data,
      pageNum,
      pageSize
    }
  })
}
