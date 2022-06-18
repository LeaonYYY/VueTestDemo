import request from '@/utils/request.js'

export async function login (body) {
  return request({
    url: '/api/login',
    method: 'POST',
    params: {
      username: '04b5d82723bebc1b7db1f6ef3aaf79701dd3c800665a71e710f4ac08de1bea9c8407bb0abe2104eea8e27408c20533de66d43e2481a0f92931cd41fccaf24477736aefaeaeaad2117802b1f281dc0c461b84100badc5902f7f52fdff12f5d28cc47bbadb8d4fb2',
      password: '042fcb67c51c75fe29064bff7175527aae873b0b3a847ca3639d26b5cb2904c3379b8de65f6df9e36a37d55e2a66577d8bb62bfe22d95eec4d2a14b8f16afbdb8c1fde29f5a90a44141f9b514cd447f026f3e4839f003c849811f3676878232fb39b8fe4b17455'
    }
  })
}
