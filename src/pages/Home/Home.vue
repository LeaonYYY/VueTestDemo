<template>
  <div class="home__container">
    <div class="home__header">
      <div class="home__header--bg" />
      <p class="home__header--title">
        因私出国服务平台
      </p>
      <div
        class="home__header--user"
        @click="goByPath('/personal')"
      >
        <div>
          <img
            class="home__header--avator"
            src="http://192.168.21.62:84/img/avatar.ba451d65.jpg"
            alt="avator"
          >
        </div>
        <div class="home__header--username">
          {{ name }}
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="home__body">
      <h1>
        证照服务
      </h1>
      <div class="home__body--img">
        <van-image
          height="35vw"
          src="http://192.168.21.62:84/img/banner.4ef3552b.png"
        />
      </div>
      <div class="home_body--nav">
        <div
          v-for="item in functionGroup"
          :key="item.id"
          @click="goByPath(item.path)"
        >
          <function-card
            :name="item.name"
            :desc="item.desc"
            :img-src="item.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FunctionCard from './components/FunctionCard.vue'
export default {
  name: 'Home',
  components: {
    'function-card': FunctionCard
  },
  data () {
    return {
      // 功能模块数组
      functionGroup: [
        {
          id: 0,
          name: '用证申请',
          desc: '证照使用申请',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACqVBMVEUAAAAA//8AgP9VqqpAv78zzMwqqtUktrY5xsYzs8wuubkqv78nscQktsgzu8wwv78ttMMruMYovMkmv78xtsIuucUsvMgqv8opuMInusQvvcYutsgsucEqu8MpvcUot8cuucEtvMMruMYpusgovMMut8QtucYsu8crvMIpucUtu8YsvMgqusUqu8YpuMctucMsusQrvMUquMYqucMpu8QtvMUsucYruscqu8MquMQpucUtusYsu8MruMQrucUqusYsucQsusUqucQpusQsu8UsucYrucMrusQqu8UpucYsusYsu8Qru8UrucUsu8QsucQrucUrusYqucQsusUsusUrucQqusUsucYsucQrusQru8UqucYqusYsusQsu8UrucUrusYqu8QsucUsusYru8YqusUqusUsu8YsucQrusUrusUqu8YsusQsu8UrucUrusQqu8UsucUrusYru8UrucUsusYrucQrusUrusUqu8YqucQsusUrusUru8YrucQrusUsucUrusYrusQru8UrucUqusYsusQru8UrusUrusYqu8UsusUrusUrusYrucQrusUqusUsu8UrucQrusUrusUru8UqusYsusUrusUrucUrusYrusQsu8UrucUrusUrusYru8UrusUsusUrusYrucQrusUrusUrusUsucQrusUrusUru8UrusYqusUsusUrusQsusUrusYrusUrusUrusUqusYrusUrusUrusUrucQqusUsusUrusYrusUqu8UrusUrusUrucUrusUqusYrusUrusUrusUrusUrusUqusUrusUrusUrucQrusUrusUqusUrusUrusUrusUrusUqusUrusUru8UrusYrusUrusUrusUrusUrusUrusUrusUrusUrusUrusUrusWOWRb2AAAA4nRSTlMAAQIDBAUGBwkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiJCUmJygpKiwtLjAxMjM0NTY3ODk6Ozw9Pj9AQUJDRUZJSktMTU5PUFFSU1RWV1hZW1xdX2BiY2RlZmdoaWprbG5vcHJzdHV2d3h6e3x+f4CBg4SGh4iJiouMjY6PkJKTlJWWl5iZm5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4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',
          path: '/application'
        },
        {
          id: 1,
          name: '用证记录',
          desc: '用在哪何时在用',
          icon: 'data:image/png;base64,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',
          path: '/record'
        }
      ]
    }
  },
  computed: {
    name () {
      return JSON.parse(localStorage.getItem('userInfo')).xm || ''
    }
  },
  methods: {
    /**
     * 路由跳转
     * @param {string} path 路径
     */
    goByPath: function (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss">
.home__container {
  font-size: 28px;
}

.home__header {
  position: relative;
  height: 65vw;

  .home__header--bg {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 60vw;
    background-image: url('http://192.168.21.62:84/img/header-bg.71ccdd7a.png');
    background-size: contain;
    border-bottom: solid 0.5px rgb(177, 58, 61);
  }

  .home__header--title {
    padding: 5vw;
    font-size: 6vw;
    color: white;
  }

  .home__header--user {
    position: absolute;
    right: 5vw;
    bottom: 0;
    left: 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 13vw;
    padding: 2.5vw;
    background-color: #fff;
    border-radius: 2vw;
    box-shadow: 0 1vw 2vw rgb(0 0 0 / 10%);

    .home__header--avator {
      height: 10vw;
      border-radius: 5vw;
    }

    .home__header--username {
      width: 75%;
      font-size: 5vw;
    }
  }
}

.home__body {
  margin: 0 5vw;

  .home__hody--img {
    height: 35vw;
    border-radius: 15vw;
  }

  .home_body--nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 40vw;
    overflow: auto;
  }
}
</style>
