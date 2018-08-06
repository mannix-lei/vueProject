<template>
  <div id="home">
    <div class="headLine">
      <span>{{$t('text.globalCurrency')}}</span>
      <div style="width: 80%">
        <v-container fluid grid-list-xl>
          <v-layout wrap align-center>
            <v-flex xs12 sm4 d-flex>
              <v-select
                :items="vm.options"
                :placeholder="$t('text.fastOrder')"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm4 d-flex>
              <v-select
                :items="vm.optionsSpecial"
                :placeholder="$t('text.specialOrder')"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
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
        options: [
          this.$t('text.volume_24H'), this.$t('text.market')
        ],
        optionsSpecial: [
          this.$t('text.new_code_7d'), this.$t('text.new_code_30d'), this.$t('text.new_user_7d'), this.$t('text.follower_total'), this.$t('text.contributors')
        ]
      }
    }
  },
  created () {
    console.info(this.$i18n.locale)
  },
  // beforeUpdate () {
  //   this.vm.options = [
  //     this.$t('text.volume_24H'), this.$t('text.market')
  //   ]
  //   this.vm.optionsSpecial = [
  //     this.$t('text.new_code_7d'), this.$t('text.new_code_30d'), this.$t('text.new_user_7d'), this.$t('text.follower_total'), this.$t('text.contributors')
  //   ]
  // },
  methods: {
  }

}
</script>

<style scoped>
  .headLine{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    line-height: 2;
  }
  .headLine .container{
    padding: 0;
  }
  .headLine .container.grid-list-xl .layout:only-child{
    margin: -35px 0px 0px 20px;
  }
  .headLine .v-menu>.v-menu__content{
    top: 35px;
    left: 0;
    z-index: 8;
  }
  .content{
    width: 30%;
  }
</style>
