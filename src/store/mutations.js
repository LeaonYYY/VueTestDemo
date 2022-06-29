// import * as types from './mutation-types'
import { refreshToken } from '../api/user'
const mutations = {
  // [types.SET_BARRAGE_LIST] (state, barrageList) {
  //   state.barrageList = barrageList
  // }
  login (state, payload) {
    localStorage.setItem('userInfo', JSON.stringify(payload))
  },
  logout (state) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('userInfo')
    history.push('/login')
  },
  refreshToken: async function () {
    const res = await refreshToken()
    console.log(res)
  }
}

export default mutations
