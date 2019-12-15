import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuelidate from 'vuelidate'

Vue.use(vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  vuelidate,  
  render: h => h(App)
}).$mount('#app')
