<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'TimeTips',
  data () {
    return {

    }
  },
  methods: {
    // 刷新时间1分钟以内的显示刚刚
    // 5分钟以内的显示相应分钟以前更新
    // 多余5分钟，在今天以内的显示具体的时间
    // 今天以前的显示月日和小时分钟
    // 去年以前的显示年月日小时分钟

    _initTimeFormat: function () {
      let Max = 1530693858819
      let Min = 1530600000000
      let range = Max - Min
      let x = Min + Math.round(Math.random() * range)
      this.vm.time = new Date(x).toLocaleString()

      let oneMin = 60 * 1000
      let oneHour = 60 * 60 * 1000
      let day = 24 * 60 * 60 * 1000
      let year = 31536000000
      let d = new Date().getTime()
      let count = 0
      if (d - x < oneMin) {
        this.vm.tips = '刚刚'
      } else if (d - x >= oneMin && d - x < oneHour) {
        count = parseInt((d - x) / oneMin)
        this.vm.tips = count + '分钟前'
      } else if (d - x >= oneHour && d - x < day) {
        this.vm.tips = new Date(x).getMonth() + 1 + '月' + new Date(x).getDate() + '日 ' + new Date().toLocaleTimeString()
      } else if (d - x >= day && d - x < year) {
        this.vm.tips = new Date(x).toLocaleTimeString()
      }
    }
  }
}
</script>

<style scoped>

</style>
