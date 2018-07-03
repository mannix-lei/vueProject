<template>
  <div id="home">
    <div class="headLine">
      <span>{{$t('text.globalCurrency')}}</span>
      <div class="dropDown">
        <el-select v-model="value" placeholder="快速排序">
          <el-option
            v-for="item in vm.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="value" placeholder="特色排序">
          <el-option
            v-for="item in vm.optionsSpecial"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      vm: {
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

  },
  methods: {

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
