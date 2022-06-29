import Vue from 'vue'
import Buefy, { NotificationProgrammatic as Notification } from 'buefy'
import axios from 'axios'

import 'buefy/dist/buefy.css'

import App from '@/App.vue'
import router from '@/router'
import store from './store/index'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

Vue.prototype.$http = axios
Vue.prototype.$sendSuccess = (message) => {
  Notification.open({
    message: message,
    type: 'is-success',
    hasIcon: true,
    position: 'is-bottom-right',
  })
}
Vue.prototype.$sendDanger = (message) => {
  Notification.open({
    message: message,
    type: 'is-danger',
    hasIcon: true,
    position: 'is-bottom-right',
  })
}

Vue.use(Buefy, { defaultIconPack: 'fas' })
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
})

app.$mount('#app')
