<template>
  <div>
    <tab-bar title="个人信息" />
    <div class="self-info__body">
      <div
        v-for="item in infoData"
        :key="item.id"
        class="self-info__item"
      >
        <h class="self-info__item--title">
          {{ item.title }}
        </h>
        <van-cell-group>
          <van-cell
            v-for="info in item.info"
            :key="info.id"
            :title="info.label"
          >
            <template
              #label
            >
              <span
                class="self-info__item--label"
              >{{ info.value }}</span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import TabBarVue from '@/components/TabBar.vue'
import { SELF_INFO_ARR } from './constant/constant'
export default {
  name: 'SelfInfo',
  components: {
    'tab-bar': TabBarVue
  },
  data () {
    return {
      infoData: SELF_INFO_ARR
    }
  }
}
</script>
<style lang="scss" scoped>
.self-info__body {
  height: 93vh;
  padding: 0 2vw;
  overflow: auto;
}

.self-info__item {
  margin-top: 3vw;
}

.self-info__item--title {
  height: 13vw;
  margin-left: 4vw;
  font-size: 6vw;
  line-height: 13vw;
}

.self-info__item--label {
  font-size: 4vw;
}
</style>
