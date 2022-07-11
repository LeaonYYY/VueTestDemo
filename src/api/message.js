import request from '../utils/request'
export async function fetchMsgList () {
  return request({
    url: '/api/lic/message/v1.0/list',
    method: 'GET',
    params: {
      pageNo: 1,
      pageSize: 20
    }
  })
}
export async function changeMsgState (id) {
  return request({
    url: '/api/lic/message/v1.0/getMessage/' + id,
    method: 'GET'
  })
}

export async function fetchMsgCount () {
  return request({
    url: '/api/lic/message/v1.0/getCount',
    method: 'GET'
  })
}
