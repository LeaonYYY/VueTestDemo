import { SELF_INFO_ARR } from '../../SelfInfo/constant/constant'
export const TABS = [
  {
    id: 0,
    title: '等待审批',
    type: 5
  },
  {
    id: 1,
    title: '通过',
    type: 0
  },
  {
    id: 2,
    title: '拒绝',
    type: 1
  },
  {
    id: 3,
    title: '全部',
    type: -1
  }
]

export const STATUS_MAP = {
  0: '通过',
  1: '拒绝',
  2: '转发',
  3: '结束',
  4: '撤回',
  5: '等待审批'
}

export const SELF_DETAIL = SELF_INFO_ARR[0].info.concat(SELF_INFO_ARR[1].info)
