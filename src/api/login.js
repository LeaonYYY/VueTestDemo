import request from '@/utils/request.js'
import { encrypt } from '@/utils/sm2Encrypt.js'

export async function login (body) {
  return request({
    url: '/api/login',
    method: 'POST',
    params: {
      username: encrypt(body.username),
      password: encrypt(body.password)
    }
  })
}
export async function loginLic (token) {
  return request({
    url: '/api/lics/loginLic/loginLic',
    method: 'POST',
    params: {
      token
    }
  })
}
