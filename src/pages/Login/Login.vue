<template>
  <div class="login__container">
    <div class="login__body--header">
      <div class="login__body--img">
        <van-image src="http://192.168.21.62:84/img/logo.f3fe3a43.png" />
      </div>
      <div>
        <van-cell-group>
          <van-field
            v-model="username"
            placeholder="请输入账号"
            left-icon="contact"
          />
          <van-field
            v-model="password"
            placeholder="请输入密码"
            left-icon="lock"
            type="password"
          />
        </van-cell-group>
      </div>
    </div>
    <div class="login__footer">
      <van-button
        class="login__btn"
        @click="login"
      >
        提交
      </van-button>
      <van-button class="login__btn">
        统一身份认证登陆
      </van-button>
    </div>
  </div>
</template>
<script>
import { login, loginLic } from '@/api/login.js'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: async function () {
      try {
        const res1 = await login({ username: this.username, password: this.password })
        if (res1.msgCode === 0) {
          const res2 = await loginLic(res1.item.token.access_token)
          localStorage.setItem('access_token', res2.item.token.access_token)
          localStorage.setItem('refresh_token', res2.item.token.refresh_token)
          localStorage.setItem('userInfo', JSON.stringify(res2.item.user))
          this.$router.push('/')
        } else {
          console.log(res1)
        }
      } catch (e) {
        console.log(e)
      }
      // if (res.msgCode === 0) {
      //   localStorage.setItem('access_token', res.item.token.access_token)
      //   localStorage.setItem('refresh_token', res.item.token.refresh_token)
      //   this.$router.push('/')
      // } else {
      //   console.log(res)
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.login__container {
  padding: 35vw 15vw 0 15vw;
  background-image: url('http://192.168.21.62:84/img/login-bg.6c61b066.png');
  background-size: cover;
}

.login__body--header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 77vw;
}

.login__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30vw;
  margin-top: 10vw;
}

.login__btn {
  width: 40vw;
  height: 12vw;
  color: white;
  background-color: rgb(177, 58, 61);
  border-radius: 6vw;
}
</style>
