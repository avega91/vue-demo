import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import EventBus from '@/plugins/event-bus'
import routes from '@/routes'
import store from '@/store'

import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
