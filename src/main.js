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
      apiKey: 'AIzaSyDTEle4OPsEZEZm-ZbogainDMn1hTjfc5c',
      authDomain: 'gig-station.firebaseapp.com',
      databaseURL: 'https://gig-station.firebaseio.com',
      projectId: 'gig-station',
      storageBucket: 'gig-station.appspot.com',
      messagingSenderId: '1024660450614'
    })
  }
}).$mount('#app')
