import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vue from 'vue'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
