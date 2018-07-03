import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/home/Home'
import Message from '../components/page/message/Message'
// import {pageRouter} from './pageIndex/router'
Vue.use(Router)

const router = [
  {
    path: '/',
    component: Home
    // children: [
    //   ...pageRouter.router
    // ]
  },
  {
    path: '/message',
    component: Message
  }
]

export default new Router({
  routes: router
})
