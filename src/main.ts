import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import ScrollAnimation from "./directives/scrollanimation.js"
import ScrollAnimationLeft from "./directives/scrollanimationleft.js"
import ScrollDisappear from "./directives/scrolldisappear.js"
import ScrollRotate from "./directives/scrollrotate.js"
import vuetify from '@/plugins/vuetify'

Vue.directive('scrollanimation', ScrollAnimation);
Vue.directive('scrollanimationleft', ScrollAnimationLeft);
Vue.directive('scrolldisappear', ScrollDisappear);
Vue.directive('scrollrotate', ScrollRotate);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
