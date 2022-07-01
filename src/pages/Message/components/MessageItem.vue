<template>
  <div>
    <div
      v-if="isFold"
      class="message-item__container--fold"
      @click="handleRead"
    >
      <div>过期提醒</div>
      <div class="message-item__layout-right">
        <div>{{ status }}</div>
        <div>{{ $props.msg.createDate }}</div>
      </div>
    </div>
    <div
      v-if="!isFold"
      class="message-item__container--unfold"
      @click="handleRead"
    >
      <div>
        <span>过期提醒</span>
        <span>{{ $props.msg.createDate }}</span>
      </div>
      <p>{{ $props.msg.message }}</p>
      <div>
        收起
      </div>
    </div>
  </div>
</template>
<script>
import { changeMsgState } from '../../../api/message.js'
export default {
  name: 'MessageItem',
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isFold: true
    }
  },
  computed: {
    status () {
      return this.$props.msg.mark === '1' ? '已读' : '未读'
    }
  },
  methods: {
    handleRead: async function () {
      this.isFold = !this.isFold
      if (this.$props.msg.mark === '0') {
        await changeMsgState(this.$props.msg.id)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.message-item__container--fold {
  display: flex;
  justify-content: space-between;
  height: 13vw;
  padding: 4vw;
  margin: 5vw 4vw 0 4vw;
  font-size: 4vw;
  font-weight: 550;
  background-color: #fff;
  border-radius: 2vw;

  .message-item__layout-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 3vw;
    font-weight: 400;
    color: #868686;
  }
}

.message-item__container--unfold {
  display: flex;
  flex-direction: column;
  height: 30vw;
  padding: 4vw 4vw 0 4vw;
  margin: 5vw 4vw 0 4vw;
  font-size: 3vw;
  font-weight: 400;
  background-color: #fff;
  border-radius: 2vw;

  :nth-child(1) {
    display: flex;
    justify-content: space-between;
    height: 30%;
    color: #868686;

    :nth-child(1) {
      font-size: 4vw;
      font-weight: 550;
      color: black;
    }
  }

  :nth-child(2) {
    height: 40%;
    overflow: auto;
    line-height: 4vw;
    text-indent: 2rem;
  }

  :nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    color: #868686;
    border-top: solid 0.5px #868686;
  }
}
</style>
