import Vue from 'vue'
import router from './router'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  	el: '#app',
  	router,
  	template: '<App/>',
  	components: { App }
})
