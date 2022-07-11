import request from '../utils/request.js'
export async function refreshToken (token) {
  return request({
    url: '/api/token/refresh',
    method: 'POST',
    params: {
      refreshToken: token
    }
  })
}
