import Vue from 'vue'
import './plugins/vuetify'
import '@/stylus/main.styl'
import App from './App.vue'
import router from './router'
import { store } from './store/index.js'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertComponent from '@/components/Shared/Alert.vue'

Vue.filter('date', DateFilter)

Vue.component('app-alert', AlertComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAXGujPceJymIEFVAE0M0B5MRxlv3qstB0',
      authDomain: 'meetups-cf627.firebaseapp.com',
      databaseURL: 'https://meetups-cf627.firebaseio.com',
      projectId: 'meetups-cf627',
      storageBucket: 'meetups-cf627.appspot.com',
      messagingSenderId: '790708988730',
      appId: '1:790708988730:web:75f4fe6100313e63'
    })
  }
}).$mount('#app')
