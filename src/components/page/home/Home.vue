<template>
  <div id="home">
    <div class="headLine">
      <span>{{$t('text.globalCurrency')}}</span>
      <div class="dropDown">
        <el-select v-model="vm.optionValue" :placeholder="$t('text.fastOrder')">
          <el-option
            v-for="item in vm.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="vm.specialValue" :placeholder="$t('text.specialOrder')">
          <el-option
            v-for="item in vm.optionsSpecial"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      更新于 {{ vm.tips }}
      ==================
      数据时间:{{ vm.time }}
      ====================
      当前时间:{{ new Date().toLocaleString() }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  name: 'Home',
  data () {
    return {
      vm: {
        time: '',
        tips: '',
        optionValue: '',
        specialValue: '',
        options: [
          {
            value: '0',
            label: this.$t('text.volume_24H')
          },
          {
            value: '1',
            label: this.$t('text.market')
          }
        ],
        optionsSpecial: [
          {
            value: '0',
            label: this.$t('text.new_code_7d')
          },
          {
            value: '1',
            label: this.$t('text.new_code_30d')
          },
          {
            value: '2',
            label: this.$t('text.new_user_7d')
          },
          {
            value: '3',
            label: this.$t('text.follower_total')
          },
          {
            value: '4',
            label: this.$t('text.contributors')
          }
        ]
      }
    }
  },
  created () {
    this._initTimeFormat()
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
  .headLine{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;
    line-height: 2;
  }
  .dropDown{
    margin-left: 10px;
  }
</style>
