<template>
  <div>
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="rgb(177, 58, 61)"
      route
    >
      <van-tabbar-item
        to="/home"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        to="/personal"
        icon="contact"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import 'vant/lib/index.css'
export default {
  name: 'HomeLayout',
  data () {
    return {
      active: 0
    }
  }
}
</script>
