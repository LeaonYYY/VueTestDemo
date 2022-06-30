// export const barrageList = state => state.barrageList
export function getRecordById (state) {
  return (id) => {
    return state.recordArr.find(val => id === val.id)
  }
}
