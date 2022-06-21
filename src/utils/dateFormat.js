import moment from 'moment'

export function timeFormat (value) {
  return moment(value).format('YYYY-MM-DD')
}
