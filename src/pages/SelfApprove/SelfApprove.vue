<template>
  <div>
    <tab-bar title="我的审批" />
    <div class="self-approve__container">
      <van-tabs
        v-model="activeName"
        @click="handleTabsChange"
      >
        <van-tab
          v-for="tab in tabs"
          :key="tab.id"
          :name="tab.type"
          :title="tab.title"
        />
      </van-tabs>
      <van-pull-refresh
        v-model="isPullReFreshLoading"
        style="height: 86vh; overflow: auto;"
        @refresh="handleTabsChange(focusName,'')"
      >
        <appli-card
          v-for="item in appliList"
          :key="item.id"
          :appli-data="item"
          @transfer="()=>{$router.push({path: '/self-appli-detail',query: {id: item.applyId,type: 'approve'}})}"
        />
        <van-empty
          v-if="appliList.length === 0"
          description="暂无数据"
        />
        <div
          v-if="appliList.length !== 0"
          class="self-approve__bottom--text"
        >
          没有更多了
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import TabBarVue from '@/components/TabBar.vue'
import ApplicationCardVue from '../SelfApplication/components/ApplicationCard.vue'
import { fetchApproveList } from '../../api/selfApprove'
import { TABS } from '../SelfApplication/constant'
import { Toast } from 'vant'
export default {
  name: 'SelfApplication',
  components: {
    'tab-bar': TabBarVue,
    'appli-card': ApplicationCardVue
  },
  data () {
    return {
      tabs: TABS, // 界面tab选项
      appliList: [], // 接口返回的数据列表
      activeName: 5, // 当前tab的name
      isPullReFreshLoading: false,
      cardNum: 0,
      focusName: 0 // 当前聚焦的tab
    }
  },
  mounted () {
    this.handleTabsChange(5, '')
  },
  methods: {
    /**
     * Tab切换触发
     * @param {number} name 类型(等待审批：5，通过：0，拒绝：1，全部：-1)
     * @param {string} title tab名字
     */
    handleTabsChange: async function (name, title) {
      try {
        this.focusName = name
        Toast.loading({
          duration: 0,
          message: '加载中',
          forbidClick: true
        })
        const params = {
          pageNo: 0,
          pageSize: 20
        }
        if (name !== -1) {
          params.status = name
        }
        const res = await fetchApproveList(params)
        this.appliList = res.page.list
        if (name === 5) {
          this.cardNum = this.appliList.length
        }
      } catch (err) {
        console.log(err)
      } finally {
        Toast.clear()
        this.isPullReFreshLoading = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.self-approve__container {
  height: 93vh;
  overflow: auto;
  background-color: #f4f4f4;
}

.self-approve__bottom--text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
  color: #b13a3d;
}
</style>
