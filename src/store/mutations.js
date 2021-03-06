// import * as types from './mutation-types'
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
  updateRecordArr (state, payload) {
    state.recordArr = payload
  }
}

export default mutations
