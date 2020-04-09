import Vue from 'vue'
import './plugins/vuetify'
import store from './store'
import App from './App.vue'


export default function createApp() {
  return new Vue({
    store, render: h => h(App)
  })
}

// export default createapp().$mount('#app')
