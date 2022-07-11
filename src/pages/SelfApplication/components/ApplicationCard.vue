<template>
  <div
    class="appli-card__container"
    @click="handleClick"
  >
    <div class="appli-card__header">
      <div>
        {{ title }}
      </div>
      <div>
        {{ $props.appliData.createDate }}
      </div>
    </div>
    <div class="appli-card__body">
      <div>联系电话：{{ $props.appliData.tellphone || '-' }}</div>
      <div>工作部门：{{ $props.appliData.department || '-' }}</div>
      <div>当前审批节点：{{ currentNode }}</div>
    </div>
    <div class="appli-card__footer">
      <div>
        <van-tag
          type="primary"
        >
          {{ nameTag }}
        </van-tag>
        <span>
          由{{ $props.appliData.leader || '-' }}提交
        </span>
      </div>
      <div>
        <van-tag
          plain
          :type="tagType"
        >
          {{ status }}
        </van-tag>
      </div>
    </div>
  </div>
</template>
<script>
import { STATUS_MAP } from '../constant'
export default {
  name: 'ApplicationCard',
  props: {
    appliData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  computed: {
    title () {
      return (this.$props.appliData.leader || '-') + '提交的用证申请' || '-'
    },
    // 名字首字符
    nameTag () {
      return (this.$props.appliData.leader + '').charAt(0)
    },
    // 当前节点
    currentNode () {
      const { approvalProcessList = [] } = this.$props.appliData
      const arr = [...(approvalProcessList || [])]
      const temp = arr.pop()
      return temp ? (temp.currentOrganization + ' ' + temp.approval) : '-'
    },
    // 证照状态
    status () {
      return STATUS_MAP[this.$props.appliData.status]
    },
    tagType () {
      const typeMap = {
        0: 'success',
        1: 'danger',
        2: 'default',
        3: 'default',
        4: 'default',
        5: 'primary'
      }
      return typeMap[this.$props.appliData.status]
    }
  },
  methods: {
    handleClick: function () {
      this.$emit('transfer', '')
    }
  }
}
</script>
<style lang="scss" scoped>
.appli-card__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52vw;
  padding: 4vw 5vw;
  margin: 5vw 2vw;
  background-color: #fff;
  border-radius: 4vw;
}

.appli-card__header {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  :nth-child(2) {
    font-size: 3.5vw;
    color: #868686;
  }
}

.appli-card__body {
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-around;
  font-size: 3.5vw;
  color: #868686;
}

.appli-card__footer {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    :nth-child(2) {
      margin-left: 2vw;
    }
  }
}
</style>
