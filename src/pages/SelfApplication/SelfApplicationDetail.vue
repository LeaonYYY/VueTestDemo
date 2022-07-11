<template>
  <div class="self-appli-detail__template">
    <tab-bar
      title="申请详情"
    />
    <div class="self-appli-detail__container">
      <van-cell>
        <template #title>
          <span class="self-appli-detail__title--header">{{ leader }}提交的用证申请</span>
        </template>
        <template #label>
          等待我处理
        </template>
      </van-cell>
      <van-cell-group class="self-appli-detail__cell-group">
        <van-cell
          v-for="(item, index) in infos"
          :key="index"
        >
          <template #title>
            <span class="self-appli-detail__title">{{ item.label }}</span>
          </template>
          <template #label>
            <span class="self-appli-detail__label">{{ item.value }}</span>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="self-appli-detail__step">
        <div>流程</div>
        <step-header
          title="发起申请"
          leader="我"
          :date="applyDate"
        />
        <step
          v-for="(item, index) in steps"
          :key="index"
          :date="item.date"
          :title="item.title"
          :leader="item.leader"
          :status="item.status"
        />
      </div>
    </div>
    <div
      v-if="isAppli"
      class="self-appli-detail__foooter"
    >
      <van-button
        class="self-appli-detail__btn--bottom"
        @click="() => {isDialogShow = true}"
      >
        取消申请
      </van-button>
      <van-dialog
        v-model="isDialogShow"
        title="取消用证申请"
        show-cancel-button
        @confirm="handleDelete"
      >
        <van-field
          v-model="reason"
          type="textarea"
          placeholder="请输入取消原因..."
          style="height: 40vw;"
          rows="5"
        />
      </van-dialog>
    </div>
  </div>
</template>
<script>
import TabBarVue from '@/components/TabBar'
import StepHeader from '@/components/StepHeader'
import Step from '@/components/Step.vue'
import { fetchAppliDetail, deleteApplication } from '../../api/selfApplication'
import { SELF_DETAIL } from './constant'
import { Notify, Toast } from 'vant'
export default {
  name: 'SelfApplicationDetail',
  components: {
    'tab-bar': TabBarVue,
    'step-header': StepHeader,
    step: Step
  },
  data () {
    return {
      data: {},
      isDialogShow: false,
      reason: '' // 取消申请原因
    }
  },
  computed: {
    infos () {
      const { ApprovalFormList } = this.data
      return [...SELF_DETAIL, {
        label: '证件名称',
        value: ApprovalFormList?.certificate || '-'
      }, {
        label: '证件号码',
        value: ApprovalFormList?.certificateId || '-'
      }, {
        label: '出发时间',
        value: ApprovalFormList?.startTime || '-'
      }, {
        label: '回程时间',
        value: ApprovalFormList?.endTime || '-'
      }, {
        label: '目的地',
        value: ApprovalFormList?.destination || '-'
      }, {
        label: '使用事由',
        value: ApprovalFormList?.reason || '-'
      }]
    },
    leader () {
      return this.data.ApprovalFormList?.leader || '-'
    },
    steps () {
      const statusMap = {
        0: 'pass',
        1: 'reject',
        5: 'wait'
      }
      return (this.data.ApprovalFormList?.approvalProcessList || []).map(item => {
        return {
          leader: item.approval || '-',
          date: item.createDate || '-',
          title: item.currentOrganization || '-',
          status: statusMap[item.status] || 'wait'
        }
      })
    },
    applyDate () {
      return this.data?.ApprovalFormList?.createDate || '-'
    },
    // 是否由我的申请页面跳转
    isAppli () {
      return this.$route.query.type === 'appli'
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData: async function () {
      try {
        Toast.loading({
          message: '加载中',
          duration: 0,
          forbidClick: true
        })
        const res = await fetchAppliDetail(this.$route.query.id)
        this.data = res.item
      } catch (err) {
        console.log(err)
      } finally {
        Toast.clear()
      }
    },
    handleDelete: async function () {
      try {
        Toast.loading({
          message: '正在撤销',
          forbidClick: true,
          duration: 0
        })
        const res = await deleteApplication(this.$route.query.id, this.reason)
        if (res.msgCode === 0) {
          Notify({
            type: 'success',
            message: '撤销成功'
          })
          this.$router.push('/self-application')
        } else {
          Notify({
            type: 'danger',
            message: '撤销失败'
          })
        }
      } catch (err) {
        console.log(err)
      } finally {
        Toast.clear()
        this.isDialogShow = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.self-appli-detail__template {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.self-appli-detail__container {
  flex: 1;
  overflow: auto;
  background-color: #f4f4f4;
}

.self-appli-detail__cell-group {
  margin: 4vw 3vw;
  border-radius: 4vw;
}

.self-appli-detail__foooter {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9vh;
}

.self-appli-detail__btn--bottom {
  width: 85%;
  height: 7vh;
  color: white;
  background-color: #b13a3d;
  border-radius: 3.5vh;
}

.self-appli-detail__title--header {
  font-size: 5vw;
}

.self-appli-detail__title {
  font-size: 3vw;
  color: #868686;
}

.self-appli-detail__label {
  font-size: 4vw;
  color: black;
}

.self-appli-detail__step {
  padding: 3vw;
  margin: 2vw 3vw;
  background-color: #fff;
  border-radius: 4vw;

  :nth-child(1) {
    margin: 0.25vw 0;
  }
}
</style>
