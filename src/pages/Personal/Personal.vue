<template>
  <div class="personal__container">
    <van-nav-bar
      title="我的"
      class="personal__bar"
    />
    <div class="personal__header">
      <div class="personal__header--bg" />
      <div class="personal__header--user">
        <van-image
          src="http://192.168.21.62:84/img/avatar.ba451d65.jpg"
          height="10vw"
          round
        />
        <div>
          {{ username }}
        </div>
        <div @click="goByPath('/message')">
          <van-icon
            name="envelop-o"
            :badge="msgCount"
            size="large"
          />
        </div>
      </div>
      <div class="personal__header--img">
        <van-image
          height="25vw"
          src="http://192.168.21.62:84/img/banner1.0f4f8f9f.png"
        />
      </div>
    </div>
    <van-cell-group class="personal__nav">
      <van-cell
        v-for="nav in navigatorGroup"
        :key="nav.id"
        :title="nav.title"
        :icon="nav.icon"
        is-link
        clickable
        @click="goByPath(nav.path)"
      />
    </van-cell-group>
    <div
      class="personal__btn--logout"
      @click="logout"
    >
      退出登录
    </div>
  </div>
</template>
<script>
import { fetchMsgCount } from '../../api/message'
export default {
  name: 'Personal',
  data () {
    return {
      navigatorGroup: [
        {
          id: 0,
          title: '我的消息',
          icon: 'comment-o',
          path: '/message'
        },
        {
          id: 1,
          title: '个人信息',
          icon: 'friends-o',
          path: '/self-info'
        },
        {
          id: 2,
          title: '我的申请',
          icon: 'coupon-o',
          path: '/self-application'
        },
        {
          id: 3,
          title: '我的审批',
          icon: 'passed',
          path: '/self-approve'
        }
      ],
      msgCount: 0
    }
  },
  computed: {
    username () {
      return JSON.parse(localStorage.getItem('userInfo')).xm || ''
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    logout: function () {
      this.$router.push('/login')
    },
    /**
     * 路由跳转
     * @param {string} path 目标路径
     */
    goByPath: function (path) {
      this.$router.push(path)
    },
    initData: async function () {
      const res = await fetchMsgCount()
      this.msgCount = res.item.count
    }
  }
}
</script>
<style lang="scss" scoped>
.personal__bar {
  background-color: #b13a3d;

  :first-child {
    color: #fff;
  }
}

.personal__container {
  height: 100vh;
  background-color: #f1f3f5;
}

.personal__header {
  position: relative;
  height: 45vw;

  .personal__header--bg {
    z-index: -1;
    height: 30vw;
    background-color: #fff;
  }

  .personal__header--user {
    position: absolute;
    top: 0;
    right: 5vw;
    left: 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 15vw;

    :nth-child(2) {
      width: 75%;
      font-size: 4vw;
      font-weight: 600;
    }
  }

  .personal__header--img {
    position: absolute;
    right: 5vw;
    bottom: 0;
    left: 5vw;
    border-radius: 10vw;
  }
}

.personal__nav {
  margin: 5vw 0;
}

.personal__btn--logout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vw;
  font-size: 3vw;
  color: #b13a3d;
  background-color: #fff;
}
</style>
