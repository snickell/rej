import VueKonva from 'vue-konva'

import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'

import VueLocalStorage from 'vue-localstorage'

import GAuth from 'vue-google-oauth2'

import Vue from 'vue'

Vue.config.productionTip = false

Vue.use(GAuth, {
  clientId: "767265673175-fpfuitf61dsg0lcrrc1rhdheboivar6h.apps.googleusercontent.com",
  //  scope: 'profile email',
  prompt: 'consent'
})

Vue.use(VueLocalStorage)
Vue.use(VueResize)
Vue.use(VueKonva)

