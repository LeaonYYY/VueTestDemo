<template>
  <div>
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="rgb(177, 58, 61)"
      route
    >
      <van-tabbar-item
        v-for="item in tabbarItems"
        :key="item.id"
        :to="item.path"
        :icon="item.icon"
      >
        首页
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
      active: 0,
      tabbarItems: [
        {
          id: 0,
          path: '/home',
          icon: 'home-o'
        },
        {
          id: 1,
          path: '/personal',
          icon: 'contact'
        }
      ]
    }
  }
}
</script>
