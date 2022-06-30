<template>
  <div class="record__container">
    <van-nav-bar
      class="record__nav-bar"
      title="用证记录"
      left-text="返回"
      left-arrow
      fixed
      @click-left="()=>{$router.back()}"
    />
    <div style="height: 7vh;" />
    <div class="record__tab">
      <van-tabs
        @click="handleTabsChange"
      >
        <van-tab
          v-for="(tab,index) in tabs"
          :key="index"
          :title="tab.name"
          :name="tab.type"
        >
          <div class="record__tab--list">
            <van-pull-refresh
              v-model="isPullRefreshLoading"
              @refresh="handleTabsChange(tab.type,'')"
            >
              <van-empty
                v-if="isEmpty"
                description="暂无数据"
              />
              <record-card
                v-for="record in recordList"
                :key="record.id"
                :record-data="record"
                @transfer="()=>{$router.push('/record-detail/' + record.id)}"
              />
              <div
                v-if="!isEmpty"
                class="record__tab--tip"
              >
                没有更多了
              </div>
            </van-pull-refresh>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { fetchRecordList } from '../../api/record'
import RecordCard from './components/RecordCard.vue'

export default {
  name: 'Record',
  components: {
    'record-card': RecordCard
  },
  data () {
    return {
      activeName: 0,
      tabs: [{
        name: '未归还',
        type: 0
      },
      {
        name: '已归还',
        type: 1
      },
      {
        name: '全部',
        type: 2
      }],
      recordList: [],
      isPullRefreshLoading: false // 下拉刷新loading显示
    }
  },
  computed: {
    isEmpty () {
      return !(this.recordList.length > 0)
    }
  },
  mounted () {
    this.handleTabsChange(0, '')
  },
  methods: {
    /**
     * Tab切换触发
     * @param {number} name  类型（未归还：0，已归还：1，全部：2）
     * @param {string} title tab名
     */
    handleTabsChange: async function (name, title) {
      try {
        Toast.loading({
          message: '加载中',
          forbidClick: true,
          duration: 0
        })
        const params = {
          leaderId: JSON.parse(localStorage.getItem('userInfo')).id || '',
          pageNo: 0,
          pageSize: 20
        }
        if (name !== 2) {
          params.status = name
        }
        const res = await fetchRecordList(params)
        this.recordList = res.page.list
        this.$store.commit('updateRecordArr', res.page.list)
        Toast.clear()
        this.isPullRefreshLoading = false
      } catch (err) {
        console.log(err)
      } finally {
        Toast.clear()
        this.isPullRefreshLoading = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.record__nav-bar {
  height: 7vh;
  background-color: #b13a3d;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    color: #fff;
  }
}

.record__tab {
  height: 93vh;
  background-color: #f4f4f4;
}

.record__tab--list {
  height: 85vh;
  overflow: auto;
}

.record__tab--tip {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vw;
  font-size: 3vw;
  color: #b13a3d;
}
</style>
