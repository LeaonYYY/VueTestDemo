const selfInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
export const SELF_INFO_ARR = [
  {
    id: 0,
    title: '基础信息',
    info: [
      {
        id: 0,
        label: '姓名',
        value: selfInfo.xm || '-'
      },
      {
        id: 1,
        label: '性别',
        value: selfInfo.xbm === '0' ? '男' : '女' || '-'
      },
      {
        id: 2,
        label: '出生日期',
        value: selfInfo.csrq || '-'
      },
      {
        id: 3,
        label: '国籍',
        value: selfInfo.gjm || '-'
      },
      {
        id: 4,
        label: '联系电话',
        value: selfInfo.phone || '-'
      }
    ]
  },
  {
    id: 1,
    title: '常用信息',
    info: [
      {
        id: 0,
        label: '籍贯',
        value: selfInfo.jgm || '-'
      },
      {
        id: 1,
        label: '民族',
        value: selfInfo.mzm || '-'
      },
      {
        id: 2,
        label: '政治面貌',
        value: selfInfo.zzmmm || '-'
      },
      {
        id: 3,
        label: '身份证号',
        value: selfInfo.zjhm || '-'
      },
      {
        id: 4,
        label: '文化程度',
        value: selfInfo.xwm || '-'
      },
      {
        id: 5,
        label: '工作部门',
        value: selfInfo.ssdwm || '-'
      },
      {
        id: 6,
        label: '职务',
        value: selfInfo.przyjszwm || '-'
      },
      {
        id: 7,
        label: '家庭住址',
        value: selfInfo.jtzz || '-'
      },
      {
        id: 8,
        label: '应急联系人',
        value: selfInfo.yjlxr || '-'
      },
      {
        id: 9,
        label: '应急联系人电话',
        value: selfInfo.yjlxrdh || '-'
      }
    ]
  }
]
