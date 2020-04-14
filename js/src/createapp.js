import Vue from 'vue'
import './plugins/vuetify'
import store from './store'
import App from './App.vue'


export default function createApp(options={}) {
  return new Vue({
    store,
    render: h => h(App),
    ...options,
  })
}

// export default createapp().$mount('#app')
