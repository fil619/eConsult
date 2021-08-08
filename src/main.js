import Vue from 'vue'
import App from './App.vue'

//Import TailwindCSS Styles
import './index.css'

//Import Store
import store from './store/store'

import '@/base/_globals'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
