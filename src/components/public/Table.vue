<template>
  <div>
    <v-data-table
      :headers="vm.headers"
      :items="vm.desserts"
      class="elevation-1"
    >
      <template slot-scope="props">
        <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
          <span>
          {{ props.header.text }}
        </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {api} from '../../config/api/apiHelper'
export default {
  name: 'Table',
  data () {
    return {
      vm: {
        headers: [
          {
            text: '币名称',
            align: 'center',
            value: 'name'
          },
          { text: '市值', align: 'right', value: 'cmc_market_cap_usd' },
          { text: '价格', align: 'right', value: 'cmc_price_usd' },
          { text: '24h成交额', align: 'right', value: 'cmc_volume_usd' },
          { text: '24h涨跌幅', align: 'right', value: 'cmc_change_ratio_24h_usd' }
          // { text: '价格趋势', align: 'right', value: 'iron' }
        ],
        desserts: []
      }
    }
  },
  created () {
    api.get('/api/v3/home/rank_index').then((response) => {
      console.info(response.data)
      this.vm.desserts = response.data
    })
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
