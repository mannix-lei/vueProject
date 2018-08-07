<template>
    <div id="message">
      <div class="textContent" v-for="item in vm.news" :key="item">
        <div class="time">
          {{item.source_time|moment("YYYY-MM-DD HH:mm:ss")}}
        </div>
        <div class="content">
          {{item.content}}
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {api} from '../../../config/helper/apiHelper'
export default {
  name: 'Message',
  data () {
    return {
      vm: {
        news: []
      }
    }
  },
  created () {
    api.get('api/v1/message?lang=&time=&limit=').then((response) => {
      this.vm.news = response.data
    })
  },
  methods: {

  }
}
</script>

<style scoped>
  #message{
    background-color: #FFFFFF;
    width: 100%;
    text-align: justify;
  }
  .textContent{
    margin: auto;
    width: 90%;
    text-wrap: normal;
    margin-top: 15px;
  }
  .time{
    padding-top: 20px;
    width: 100%;
    line-height: 20px;
    text-align: left;
    margin-left: 10px;
    font-size: 16px;
  }
  .content{
    width: 100%;
  }
</style>
