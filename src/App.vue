<!--suppress ALL -->
<template>
  <div id="app">
    <div class="appNav">
      <div class="titleLine">
        <div class="logo" @click="refreshPage"></div>
        <div class="tools">
          <div>
            <v-autocomplete
              prepend-inner-icon="search"
              :loading="loading"
              :items="items"
              :search-input.sync="search"
              v-model="select"
              cache-items
              class="mx-3"
              flat
              return-object
              :placeholder="$t('tips.inputPlaceHolder')"
            ></v-autocomplete>
          </div>
          <div class="groupChat">{{$t('text.groupChat')}}</div>
          <div style="padding-left: 20px">
              <v-btn @click="changeLanguage">{{vm.btn_language}}</v-btn>
          </div>
        </div>
      </div>
      <div id="navMenu">
        <v-tabs
          color="white"
          grow
          slider-color="blue accent-2"
        >
          <v-tab
            v-for="n in vm.tabs"
            :key="n.key"
            @click="handleSelect(n.key)"
          >
            {{ n.value }}
          </v-tab>
        </v-tabs>
      </div>
    </div>
    <div class="appContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line indent
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-labels,indent,no-unused-expressions,eqeqeq */
  export default {
    name: 'App',
    data: function () {
      return {
        vm: {
          activeIndex: '',
          btn_language: 'English',
          tabs: []
        },
        loading: false,
        items: [],
        search: null,
        select: null,
        states: []
      }
    },
    created () {
      this.$i18n.locale==='zh-cn'? this.vm.btn_language = 'English': this.vm.btn_language = '中文'
      this._initTabs()
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    },
    methods: {
       _initTabs () {
         this.vm.tabs = [
           {key: 'home', value: this.$t('title.home')},
           {key: 'message', value: this.$t('title.message')},
           {key: 'fundFlow', value: this.$t('title.fundFlow')},
           {key: 'focus', value: this.$t('title.focus')},
           {key: 'quote', value: this.$t('title.quote')},
           {key: 'chain', value: this.$t('title.chain')},
           {key: 'community', value: this.$t('title.community')},
           {key: 'code', value: this.$t('title.code')}
         ]
       },
      refreshPage(){
        this.$router.push('/')
      },
      handleSelect (e) {
        switch (e) {
          case  'home':
            this.$router.push('/')
            break
          case 'message':
            this.$router.push('/message')
            break
          case 'fundFlow':
            this.$router.push('/fundflow')
            break
          case 'focus':
            this.$router.push('/focus')
            break
          case 'quote':
            this.$router.push('/quote')
            break
          case 'chain':
            this.$router.push('/chain')
            break
          case 'community':
            this.$router.push('/community')
            break
          case 'code':
            this.$router.push('/code')
            break
        }
      },
      changeLanguage () {
        this.$i18n.locale === 'zh-cn' ? this.$i18n.locale = 'en-us' : this.$i18n.locale = 'zh-cn'
        this._initTabs()
        this.$i18n.locale === 'zh-cn' ? this.vm.btn_language = 'English' : this.vm.btn_language = '中文'
      },
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    padding: 0px;
  }
  #navMenu {
    width: 70%;
    margin: auto;
  }
  .logo{
    cursor: pointer;
    width: 200px;
    height: 50px ;
    background-image: url(./public/img/enLogo.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0px;
  }
  .tools{
    padding: 0 10px 0 20px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
  /*.tools .v-input{*/
    /*margin-top: 5px;*/
  /*}*/
  .titleLine{
    height: 50px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    margin: auto;
    width: 70%;
  }
  .el-input-group--append .el-input__inner, .el-input-group__prepend{
    height: 35px;
  }
  .el-input--suffix .el-input__inner{
    padding-right: 30px;
    width: 135px;
    height: 35px;
  }
  .el-button{
   line-height: 0;
    height: 35px;
  }
  .appNav{
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0px;
    z-index: 1000;
  }
  .appContent{
    width: 70%;
    left: 0;
    right: 0;
    margin: auto;
    position: relative;
    top: 100px;
  }
  .groupChat{
    padding-left: 20px;
    cursor: pointer;
  }
  .groupChat:hover{
    color: #409eff;
    cursor: pointer;
  }
</style>
