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

    <div class="table">
      <Table></Table>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Table from '../../public/Table'
import Vue from 'vue'
Vue.component('Table', Table)
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
  .table{
    margin-top: 20px;
    width: 100%;
  }
</style>
