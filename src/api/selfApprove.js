import request from '../utils/request'

export async function fetchApproveList (params) {
  return request({
    url: '/api/lic/process/v1.0/list',
    method: 'GET',
    params
  })
}
