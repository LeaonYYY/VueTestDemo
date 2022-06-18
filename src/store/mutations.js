// import * as types from './mutation-types'

const mutations = {
  // [types.SET_BARRAGE_LIST] (state, barrageList) {
  //   state.barrageList = barrageList
  // }
  login (state, payload) {
    state.userInfo = payload
  },
  logout (state) {
    state.userInfo = {}
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
}

export default mutations
