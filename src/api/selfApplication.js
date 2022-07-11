import request from '../utils/request'
export async function fetchAppliList (params) {
  return request({
    url: '/api/lic/approval/v1.0/list',
    method: 'GET',
    params
  })
}
export async function fetchAppliDetail (id) {
  return request({
    url: '/api/lic/approval/v1.0/getProcess/' + id,
    method: 'GET'
  })
}
export async function deleteApplication (id, reason) {
  return request({
    url: '/api/lic/approval/v1.0/delete/' + id,
    method: 'DELETE',
    data: {
      reason
    }
  })
}
