import request from '../utils/request'
export async function fetchRecordList (params) {
  return request({
    url: '/api/lic/record/v1.0/list',
    method: 'GET',
    params
  })
}

export async function fetchReacordDetail (id) {
  return request({
    url: '/api/lic/record/v1.0/export/' + id,
    method: 'POST'
  })
}
