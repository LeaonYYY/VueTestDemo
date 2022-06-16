<template>
  <div class="func-card__container">
    <van-image
      :src="imgSrc"
      height="10vw"
    />
    <div class="func-card__container--detail">
      <div>{{ name }}</div>
      <div>{{ desc }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FunctionCard',
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
  .func-card__container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40vw;
    height: 15vw;
    padding: 1.5vw;
    margin-top: 5vw;
    background-color: #f4f4f4;
    border-radius: 2vw;

    .func-card__container--detail {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 11vw;

      :first-child {
        font-size: 30px;
        font-weight: 600;
      }

      :last-child {
        font-size: 15px;
      }
    }
  }
</style>
