<template>
  <div>
    <test
      title="发起申请"
      date="2022-7-1"
      leader="我"
    />
    <step
      title="福州大学纪委（监察专员办公室）综合室、稽查监察室"
      date="2022-02-24 15:03:44"
      leader="路人甲"
    />
    <step
      title="组织部、党校"
      date="2022-02-24 15:03:44"
      leader="路人乙"
    />
  </div>
</template>
<script>
import test from '../pages/SelfApplication/components/StepHeader'
import step from '../pages/SelfApplication/components/Step'
export default {
  name: 'Test',
  components: {
    test: test,
    step
  }
}
</script>
