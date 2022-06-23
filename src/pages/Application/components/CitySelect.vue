<template>
  <div class="city-select__container">
    <van-nav-bar
      class="city-select__nav-bar"
      title="选择地点"
      left-text="返回"
      left-arrow
      fixed
      @click-left="handleSelect('')"
    />
    <div class="city-select--placeholder" />
    <div class="city-select__body">
      <van-index-bar sticky>
        <van-cell-group
          v-for="item in available_cities"
          :key="item.id"
        >
          <van-index-anchor
            :index="item.label"
            class="city-select__body--anchor"
          />
          <van-cell
            v-for="city in item.cityGroup"
            :key="city.id"
            :title="city.label"
            @click="handleSelect(city.label)"
          />
        </van-cell-group>
      </van-index-bar>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CitySelect',
  props: {
    cities: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    HK_cities () {
      return this.$props.cities.filter((val) => {
        return val.label === '中国-香港' || val.label === '中国-澳门'
      })
    },
    TW_cities () {
      return this.$props.cities.filter((val) => {
        return val.label === '中国-台湾'
      })
    },
    foreign_cities () {
      return this.$props.cities.filter((val) => {
        return val.label !== '中国-香港' && val.label !== '中国-澳门' && val.label !== '中国-台湾'
      })
    },
    available_cities () {
      const temp = []
      let cities = []
      switch (this.$props.type) {
        case '港澳通行证':
          cities = [...this.HK_cities]
          break
        case '台湾通行证':
          cities = [...this.TW_cities]
          break
        default :
          cities = [...this.foreign_cities]
      }
      for (let i = 0; i < 26; i++) {
        temp.push({
          id: i,
          label: String.fromCharCode(65 + i),
          cityGroup: cities.filter(val => {
            return val.remarks === String.fromCharCode(65 + i) && val.label !== '中国'
          })
        })
      }
      return temp.filter(val => {
        return val.cityGroup.length !== 0
      })
    }
  },
  methods: {
    handleSelect: function (name) {
      this.$emit('select', {
        state: true,
        value: name
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.city-select--placeholder {
  height: 7vh;
}

.city-select__nav-bar {
  height: 7vh;
  background-color: #b13a3d;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    color: #fff;
  }
}

.city-select__body {
  height: 93vh;
  overflow: auto;
}
</style>
