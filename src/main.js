// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false


Vue.use(VueFire)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h =>h(App),
  // components: { App },
  // template: '<App/>'
}).$mount('#app');
