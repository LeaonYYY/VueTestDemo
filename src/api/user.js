import request from '../utils/request.js'
export async function refreshToken () {
  return request({
    url: '/api/token/refresh',
    method: 'POST',
    params: {
      refreshToken: localStorage.getItem('refreshToken') || ''
    }
  })
}
