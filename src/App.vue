<!--suppress ALL -->
<template>
  <div id="app">
    <div class="appNav">
      <div class="titleLine">
        <div class="logo"></div>
        <div class="tools">
          <div>
            <el-input :placeholder="$t('tips.inputPlaceHolder')" v-model="vm.searchContent" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <div class="groupChat">{{$t("text.groupChat")}}</div>
          <div style="padding-left: 20px">
            <el-button @click="changeLanguage">{{vm.btn_language}}</el-button>
          </div>
        </div>
      </div>
      <div id="navMenu">
        <el-menu :default-active="vm.activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="">{{$t("title.home")}}</el-menu-item>
          <el-menu-item index="message">{{$t("title.message")}}</el-menu-item>
          <el-menu-item index="fundFlow">{{$t("title.fundFlow")}}</el-menu-item>
          <el-menu-item index="focus">{{$t("title.focus")}}</el-menu-item>
          <el-menu-item index="quote">{{$t("title.quote")}}</el-menu-item>
          <el-menu-item index="chain">{{$t("title.chain")}}</el-menu-item>
          <el-menu-item index="community">{{$t("title.community")}}</el-menu-item>
          <el-menu-item index="code">{{$t("title.code")}}</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="appContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line indent
/* eslint-disable no-labels,indent,no-unused-expressions,eqeqeq */
  export default {
  name: 'App',
    data: function () {
      return {
        vm: {
          activeIndex: '',
          searchContent: '',
          btn_language: 'English'
        }
      }
    },
    created () {
      if (this.$i18n.locale == 'en-us') {
        this.vm.btn_language = '中文'
      } else {
        this.vm.btn_language = 'English'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        this.$router.push('/' + key)
      },
      changeLanguage () {
        if (this.$i18n.locale == 'en-us') {
          this.$i18n.locale = 'zh-cn'
          this.vm.btn_language = 'English'
        } else {
          this.$i18n.locale = 'en-us'
          this.vm.btn_language = '中文'
        }
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
    position: relative;
    margin: auto;
  }
  .logo{
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
  .titleLine{
    height: 45px;
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
    width: 105px;
    height: 35px;
  }
  .el-button{
   line-height: 0;
    height: 35px;
  }
  .appNav{
    width: 100%;
    background-color: #ffffff;
  }
  .appContent{
    width: 70%;
    left: 0;
    right: 0;
    margin: auto;
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
