<template>
  <div id="table">
    <v-data-table
      :headers="vm.headers"
      :items="vm.desserts"
      class="elevation-1"
      :total-items='vm.totalItem'
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.cmc_market_cap_usd }}</td>
        <td class="text-xs-right">{{ props.item.cmc_price_usd }}</td>
        <td class="text-xs-right">{{ props.item.cmc_volume_usd }}</td>
        <td class="text-xs-right">{{ props.item.cmc_change_ratio_24h_usd }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {api} from '../../config/helper/apiHelper'
export default {
  props: [
    'requestUrl',
    'headers'
  ],
  name: 'Table',
  data () {
    return {
      vm: {
        headers: this.headers,
        desserts: []
      }
    }
  },
  created () {
    api.get(this.requestUrl).then((response) => {
      this.vm.desserts = response.data
      this.vm.totalItem = response.headers.total
    })
  },
  methods: {
  }
}
</script>

<style scoped>
  #table{
    background-color: #FFFFFF;
  }
</style>
