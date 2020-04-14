import Vue from 'vue'
import './plugins/vuetify'
import store from './store'
import App from './components/RegistrationTask.vue'


export default function createApp(props={}) {
  return new Vue({
    store,
    render: h => h(App, { props })
  })
}

// export default createapp().$mount('#app')
