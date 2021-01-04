import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from 'firebase/app'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyARyuQtoPbHWVa29r1mvKhL5WV8582XB9k",
  authDomain: "vue-quiz-ee532.firebaseapp.com",
  projectId: "vue-quiz-ee532",
  storageBucket: "vue-quiz-ee532.appspot.com",
  messagingSenderId: "338937498787",
  appId: "1:338937498787:web:9e24cf007717052e704316"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
