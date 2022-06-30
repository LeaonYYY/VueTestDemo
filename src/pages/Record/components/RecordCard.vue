<template>
  <div
    class="record-card__container"
    @click="handleClick"
  >
    <div class="record-card__layout--left">
      <div class="record-card__header--left">
        {{ title }}
      </div>
      <div class="record-card__body--left">
        <div>借出时间：{{ $props.recordData.startTime }}</div>
        <div>归还时间：{{ $props.recordData.returnTime }}</div>
        <div>借出类型：{{ lendType }}</div>
        <div>地点：{{ $props.recordData.destination }}</div>
        <div>事由：{{ $props.recordData.reason }}</div>
      </div>
      <div class="record-card__footer--left">
        <van-tag>{{ tagName }}</van-tag>
        <span>
          由 {{ $props.recordData.leader }} 提交
        </span>
      </div>
    </div>
    <div class="record-card__layout--right">
      {{ $props.recordData.certificateId }}
    </div>
  </div>
</template>
<script>
import { LEND_TYPE } from '../constant'
export default {
  name: 'RecordCard',
  props: {
    recordData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      lendTypeArr: [...LEND_TYPE]
    }
  },
  computed: {
    title () {
      return this.$props.recordData.leader + '的' + this.$props.recordData.certificate
    },
    lendType () {
      return this.lendTypeArr.find(val => {
        return val.type === this.$props.recordData.lendType
      }).name
    },
    tagName () {
      return (this.$props.recordData.leader + '').charAt(0)
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
.record-card__container {
  display: flex;
  justify-content: space-between;
  height: 52vw;
  padding: 4vw;
  margin: 5vw 4vw;
  background-color: #fff;
  border-radius: 4vw;
}

.record-card__layout--left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 51vw;
  font-size: 4vw;
}

.record-card__body--left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 65%;
  font-size: 3.5vw;
  color: #868686;
}

.record-card__layout--right {
  font-size: 3.5vw;
  color: #868686;
}

.record-card__footer--left {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 15%;

  :first-child {
    color: #fff;
    background-color: rgb(177, 58, 61);
  }
}
</style>
