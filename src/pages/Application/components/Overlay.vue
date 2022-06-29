<template>
  <van-overlay
    :show="$props.isVisible"
    class="overlay__container"
  >
    <div class="overlay__body">
      <div class="overlay__header--title">
        行前教育
      </div>
      <div class="overlay__para">
        <p
          v-for="item in paragraphs"
          :key="item.id"
        >
          {{ item.value }}
        </p>
      </div>
      <div
        class="overlay__footer"
      >
        <van-button
          class="overlay__footer--btn"
          :disabled="!isClickable"
          @click="$props.onClose"
        >
          已阅读并同意
          <span v-if="!isClickable">
            ({{ readTime }}s)
          </span>
        </van-button>
      </div>
    </div>
  </van-overlay>
</template>
<script>
import { NOTICE_PARAGRAPHS } from '../constant'
export default {
  name: 'Overlay',
  props: {
    isVisible: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      readTime: 2
    }
  },
  computed: {
    paragraphs () {
      return NOTICE_PARAGRAPHS.map((value, index) => {
        return {
          id: index,
          value
        }
      })
    },
    isClickable () {
      return !(this.readTime > 0)
    }
  },
  mounted () {
    var t = setInterval(() => {
      this.readTime--
      if (this.readTime === 0) {
        clearInterval(t)
      }
    }, 1000)
  }
}
</script>
<style scoped lang="scss">
.overlay__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.overlay__body {
  width: 90%;
  height: 80%;
  padding: 0 3%;
  background-color: #fff;
  border-radius: 4vw;
}

.overlay__para {
  height: 75%;
  overflow: auto;
  font-size: 3.5vw;

  p {
    line-height: 4.5vw;
    text-indent: 2em;
  }
}

.overlay__header--title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  font-size: 4.5vw;
  font-weight: 550;
}

.overlay__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15%;
}

.overlay__footer--btn {
  height: 10vw;
  color: #fff;
  background-color: #b13a3d;
  border-radius: 5vw;
}
</style>
