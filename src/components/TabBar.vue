<template>
  <div>
    <van-nav-bar
      class="tab-bar__container"
      :title="$props.title"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="()=>{$router.back()}"
    />
    <div style="height: 7vh;" />
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-bar__container {
  height: 7vh;
  background-color: #b13a3d;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    color: #fff;
  }
}
</style>
