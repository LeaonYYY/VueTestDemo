<template>
  <div class="step__container">
    <div class="step__layout--left">
      <div class="step__icon--line" />
      <div class="step__icon">
        <p>{{ firstChar }}</p>
        <div class="step__icon--box">
          <van-icon
            :name="iconInfo.icon"
            :class="iconInfo.class"
          />
        </div>
      </div>
    </div>
    <div class="step__layout--right">
      <div>
        <div>{{ $props.title }}</div>
        <div class="step__font--weak">
          {{ $props.date }}
        </div>
      </div>
      <div class="step__font--weak">
        {{ $props.leader }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Step',
  props: {
    leader: {
      type: String,
      default: '-'
    },
    title: {
      type: String,
      default: '-'
    },
    date: {
      type: String,
      default: '-'
    },
    status: {
      type: String,
      default: 'pass'
    }
  },
  data () {
    return {
      iconMap: {
        pass: {
          icon: 'checked',
          class: 'step__icon--pass'
        },
        reject: {
          icon: 'clear',
          class: 'step__icon--reject'
        },
        wait: {
          icon: 'more',
          class: 'step__icon--wait'
        }
      }
    }
  },
  computed: {
    iconInfo () {
      return this.iconMap[this.$props.status] || {}
    },
    firstChar () {
      return this.$props.leader.charAt(0)
    }
  }
}
</script>
<style lang="scss" scoped>
.step__container {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 17.5vw;
  margin-bottom: 1vw;
}

.step__icon {
  position: relative;
  width: 10vw;
  height: 10vw;
  color: white;
  background-color: #1989fa;
  border-radius: 2vw;

  p {
    position: absolute;
    top: 2.5vw;
    left: 2.5vw;
    z-index: 2;
  }

  :nth-child(2) {
    position: absolute;
    right: -0.6vw;
    bottom: -0.6vw;
  }
}

.step__layout--left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.step__icon--line {
  width: 0;
  height: 7vw;
  margin-bottom: 1vw;
  border-left: dashed 0.75vw #ccc;
}

.step__icon--box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5vw;
  height: 5.5vw;
  background-color: #fff;
  border-radius: 2.75vw;
}

.step__layout--right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 75%;
  font-size: 3.75vw;

  :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    :nth-child(1) {
      width: 60%;
    }

    :nth-child(2) {
      width: 30%;
    }
  }
}

.step__font--weak {
  font-size: 3vw;
  color: #868686;
}

.step__icon--pass {
  color: #07c160;
}

.step__icon--reject {
  color: red;
}

.step__icon--wait {
  color: #1989fa;
}
</style>
