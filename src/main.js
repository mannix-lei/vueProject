/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'
import store from './config/vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import 'vuetify/dist/vuetify.min.css'
import LangENUS from './config/lang/en-us'
import LangZHCN from './config/lang/zh-cn'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(VueCookies)

const i18n = new VueI18n({
  locale: (navigator.language || navigator.browserLanguage).toLowerCase(),
  messages: {
    'en-us': LangENUS,
    'zh-cn': LangZHCN
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store: store,
  components: { App },
  template: '<App/>'
})
