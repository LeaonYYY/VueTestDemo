import request from '@/utils/request.js'

export async function fetchDictionary (type) {
  return request({
    url: '/api/system/dictionary',
    method: 'GET',
    params: {
      type,
      pageNo: 1,
      pageSize: 1000
    }
  })
}
