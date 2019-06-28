import request from '@/utils/request'

export function infoData() {
  return request({
    url: '/user/centerUserWxKey/list',
    method: 'get'
  })
}

export function delData(id) {
  return request({
    url: '/user/centerUserWxKey/del',
    method: 'post',
    data: { id }
  })
}

export function saveData(data) {
  return request({
    url: '/user/centerUserWxKey/save',
    method: 'post',
    data: { ...data }
  })
}

export function qrcode(data) {
  return request({
    url: '/user/centerUserWxKey/qrcode',
    method: 'post',
    data: { ...data }
  })
}
