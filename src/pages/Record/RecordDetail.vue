<template>
  <div>
    <van-nav-bar
      class="record-detail__nav-bar"
      title="记录详情"
      left-text="返回"
      left-arrow
      fixed
      @click-left="()=>{$router.back()}"
    />
    <div style="height: 7vh;" />
    <div class="record-detail__body">
      <van-cell
        :label="recordData.certificateId || '-'"
      >
        <template #title>
          <span class="record-detail__header--title">{{ recordData.leader || 'error' }}的{{ recordData.certificate || 'error' }}</span>
          <van-tag class="record-detail__header--tag">
            {{ (recordData.lendType === '1' ? '已归还' : '未归还') || 'error' }}
          </van-tag>
        </template>
      </van-cell>
      <van-cell-group class="record-detail__card">
        <van-cell
          v-for="item in card_items"
          :key="item.id"
        >
          <template #title>
            <span class="record-detail__card--title">{{ item.title }}</span>
          </template>
          <template #label>
            <span class="record_detail__card--label">{{ item.label }}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { DISPLAY_ITEMS, LEND_TYPE } from './constant'
export default {
  name: 'RecordDetail',
  data () {
    return {
      recordData: {}
    }
  },
  computed: {
    card_items () {
      const res = [...DISPLAY_ITEMS]
      res.forEach((value, index) => {
        res[index].label = this.recordData[`${value.tag}`]
      })
      res[3].label = LEND_TYPE.find(val => {
        return val.type === res[3].label
      }).name
      return res
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      const res = this.$store.getters.getRecordById(this.$route.params.id)
      this.recordData = res
    }
  }
}
</script>
<style lang="scss" scoped>
.record-detail__nav-bar {
  height: 7vh;
  background-color: #b13a3d;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    color: #fff;
  }
}

.record-detail__body {
  height: 93vh;
  background-color: #f4f4f4;
}

.record-detail__header--title {
  font-size: 4.5vw;
  font-weight: 600;
}

.record-detail__header--tag {
  height: 4vw;
  margin-left: 4vw;
  color: #b13a3d;
  background-color: #fff;
  border: solid 1px #b13a3d;
  border-radius: 2vw;
}

.record-detail__card {
  margin: 5vw 4vw;
}

.record-detail__card--title {
  font-size: 3vw;
  color: #868686;
}

.record_detail__card--label {
  font-size: 4vw;
  color: black;
}
</style>
