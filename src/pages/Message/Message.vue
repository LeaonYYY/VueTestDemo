<template>
  <div>
    <van-nav-bar
      class="message__nav-bar"
      title="我的消息"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="()=>{$router.back()}"
    />
    <div style="height: 7vh;" />
    <div>
      <van-pull-refresh
        v-model="isRefreshing"
        class="message__container"
        @refresh="fetchData"
      >
        <van-empty
          v-if="isEmpty"
          description="暂无信息"
        />
        <message-item
          v-for="item in msgList"
          :key="item.id"
          :msg="item"
        />
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { fetchMsgList } from '@/api/message'
import MessageItem from './components/MessageItem.vue'
import { Toast } from 'vant'
export default {
  name: 'Message',
  components: {
    'message-item': MessageItem
  },
  data () {
    return {
      msgList: [],
      isRefreshing: false
    }
  },
  computed: {
    isEmpty () {
      return this.msgList.length === 0
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      try {
        Toast.loading({
          duration: 0,
          message: '加载中',
          forbidClick: true
        })
        const res = await fetchMsgList()
        this.msgList = res.page.list
      } catch (err) {
        console.log(err)
      } finally {
        Toast.clear()
        this.isRefreshing = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.message__nav-bar {
  height: 7vh;
  background-color: #b13a3d;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    color: #fff;
  }
}

.message__container {
  height: 93vh;
  overflow: auto;
  background-color: #f4f4f4;
}
</style>
