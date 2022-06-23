<template>
  <div class="application__container">
    <van-nav-bar
      class="application__nav-bar"
      title="用证申请"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="goBack"
    />
    <div style="height: 12vw;" />
    <div class="application__form">
      <van-form @submit="submit">
        <van-cell-group>
          <van-field
            name="name"
            label="姓名"
            required
          />
          <van-field
            name="sex"
            label="性别"
            required
          >
            <template #input>
              <van-radio-group
                v-model="checked"
                direction="horizontal"
              >
                <van-radio name="male">
                  男
                </van-radio>
                <van-radio name="female">
                  女
                </van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            name="birthDate"
            label="出生日期"
            required
          />
          <van-field
            name="birthplace"
            label="籍贯"
            required
          />
          <van-field
            name="nation"
            label="民族"
            required
          />
          <van-field
            name="politicsStatus"
            label="政治面貌"
            required
          />
          <van-field
            name="idCard"
            label="身份证号码"
            required
          />
          <van-field
            name="education"
            label="文化程度"
            required
          />
          <van-field
            name="department"
            label="工作部门"
            required
          />
          <van-field
            name="job"
            label="职务"
            required
          />
          <van-field
            name="address"
            label="家庭住址"
            required
          />
          <van-field
            name="telephone"
            label="联系电话"
            required
          />
          <van-field
            name="emergencyContact"
            label="紧急联系人"
            required
          />
          <van-field
            name="emergencyPhone"
            label="紧急联系电话"
            required
          />
          <van-field
            v-model="certificates"
            name="approvalFormEntityList"
            label="选择证件"
            required
            clickable
            readonly
            @click="isPickerShow = true"
          />
          <van-popup
            v-model="isPickerShow"
            round
            position="bottom"
          >
            <van-checkbox-group
              v-model="result"
              class="application__checkbox--popup"
            >
              <van-checkbox
                v-for="item in options_certificates"
                :key="item.id"
                :name="item.label"
              >
                {{ item.label }}
              </van-checkbox>
            </van-checkbox-group>
            <van-button
              style="width: 100vw;"
              @click="handleChange"
            >
              确认
            </van-button>
          </van-popup>
        </van-cell-group>
        <div
          v-for="item in array_certificates"
          :key="item.id"
          class="application__form--addition"
        >
          <van-cell-group>
            <van-field
              v-model="item.name"
              label="申领证照名称"
              required
            />
            <van-field
              v-model="item.certificateId"
              label="证照号码"
              required
            />
            <van-field
              v-model="item.isNew"
              label="是否新证"
              required
            />
            <van-field
              readonly
              clickable
              required
              :value="item.startTime"
              label="开始时间"
              placeholder="点击选择时间"
              @click="item.isPickerShow1 = true"
            />
            <van-popup
              v-model="item.isPickerShow1"
              position="bottom"
            >
              <van-datetime-picker
                v-model="item.currentDate1"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirm(item,1)"
                @cancel="item.isPickerShow1 = false"
              />
            </van-popup>
            <van-field
              readonly
              clickable
              required
              :value="item.endTime"
              label="结束时间"
              placeholder="点击选择时间"
              @click="item.isPickerShow2 = true"
            />
            <van-popup
              v-model="item.isPickerShow2"
              position="bottom"
            >
              <van-datetime-picker
                v-model="item.currentDate2"
                type="date"
                :min-date="item.currentDate1"
                :max-date="maxDate"
                @confirm="onConfirm(item,2)"
                @cancel="item.isPickerShow2 = false"
              />
            </van-popup>
            <van-field
              readonly
              clickable
              required
              :value="item.destination"
              label="选择城市"
              placeholder="请选择一个城市"
              @click="item.isCityPickerShow = true"
            />
            <van-popup
              v-model="item.isCityPickerShow"
              position="right"
              :style="{
                width: '100vw',
                height: '100vh'
              }"
            >
              <city-select
                :cities="options_cities"
                :type="item.name"
                @select="(val)=>{
                  item.destination = onSelect(val)
                  item.isCityPickerShow = false
                }"
              />
            </van-popup>
            <van-field
              required
              :value="item.remarks"
              label="具体地点"
              placeholder="请输入具体的地点"
            />
            <van-field
              required
              :value="item.reason"
              label="使用事由"
              placeholder="请输入使用的事由"
            />
          </van-cell-group>
        </div>
        <div class="application__form--submit">
          <van-button
            class="application__btn--submit"
            type="info"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { timeFormat } from '@/utils/dateFormat.js'
import CitySelect from './components/CitySelect.vue'
import { fetchDictionary } from '@/api/application.js'
export default {
  name: 'Application',
  components: {
    'city-select': CitySelect
  },
  data () {
    return {
      currentTime: new Date(),
      checked: 'male', // 性别选择
      options_certificates: [], // 证件选项
      options_cities: [], // 城市选项
      result: [], // 证件选择结果
      isPickerShow: false, // 证件选择可见
      isStartTimeShow: false, // 开始时间可见
      isEndTimeShow: false, // 结束时间可见
      array_certificates: [], // 证件表单内容
      minDate: new Date(),
      maxDate: new Date(2025, 10, 1)
    }
  },
  computed: {
    certificates () {
      return this.result.toString()
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    /**
     * 返回上级
     */
    goBack: function () {
      this.$router.back()
    },
    /**
     * 表单提交
     */
    submit: function (value) {
      console.log(value)
    },
    /**
     * 时间选择确认
     * @param {*} item
     * @param {*} flag 1为开始时间 2为结束时间
     */
    onConfirm: function (item, flag) {
      flag === 1
        ? item.startTime = timeFormat(item.currentDate1)
        : item.endTime = timeFormat(item.currentDate2)
      item.isPickerShow1 = false
      item.isPickerShow2 = false
    },
    // 选择证件
    handleChange: function () {
      this.array_certificates = this.result.map((value, index) => {
        return {
          id: index,
          name: value,
          certificateId: '无',
          startTime: '',
          isNew: '是',
          endTime: '',
          destination: '',
          remarks: '',
          reason: '',
          currentDate1: new Date(),
          currentDate2: new Date(),
          isPickerShow1: false,
          isPickerShow2: false,
          isCityPickerShow: false
        }
      })
      this.isPickerShow = false
    },
    // 初始化数据
    initData: async function () {
      const res = await fetchDictionary('paperwork_type')
      this.options_certificates = res.page.list
      const res2 = await fetchDictionary('national')
      this.options_cities = res2.page.list
    },
    /**
     * 接收选中的城市信息
     * @param {*} payload 城市选择组件传回的数据
     */
    onSelect: function (payload) {
      if (payload.state === true) {
        return payload.value
      } else {
        console.log(payload)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.application__form {
  overflow: auto;
}

.application__nav-bar {
  background-color: #b13a3d;

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    color: #fff;
  }
}

.application__form--addition {
  margin-bottom: 10vw;
}

.application__form--submit {
  display: flex;
  justify-content: center;
  margin: 5vw;
}

.application__btn--submit {
  width: 80vw;
  height: 12vw;
  background-color: #b13a3d;
  border: 0;
  border-radius: 6vw;
}

.application__checkbox--popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vw;
  border-radius: 5vw;
}
</style>
