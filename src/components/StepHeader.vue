<template>
  <div class="step-header__container">
    <div class="step-header__layout--left">
      <div class="step-header__icon">
        <p>我</p>
        <div class="step-header__icon--box">
          <van-icon name="checked" />
        </div>
      </div>
    </div>
    <div class="step-header__layout--right">
      <div>
        <div>{{ $props.title }}</div>
        <div class="step-header__font--weak">
          {{ $props.date }}
        </div>
      </div>
      <div class="step-header__font--weak">
        {{ $props.leader }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StepHeader',
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
    }
  }
}
</script>
<style lang="scss" scoped>
.step-header__container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 12.5vw;
}

.step-header__icon {
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

.step-header__icon--box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5vw;
  height: 5.5vw;
  background-color: #fff;
  border-radius: 2.75vw;

  :nth-child(1) {
    color: #07c160;
  }
}

.step-header__layout--right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 95%;
  font-size: 4vw;

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

.step-header__font--weak {
  font-size: 3vw;
  color: #868686;
}
</style>
