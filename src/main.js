import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
<<<<<<< HEAD
import VueSweetalert2 from 'vue-sweetalert2';
=======
import Vuelidate from 'vuelidate';
>>>>>>> d18bb42ea29a84cb3f00041adb1efb289a5066f2

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
<<<<<<< HEAD
Vue.use(VueSweetalert2)
=======
Vue.use(Vuelidate);
>>>>>>> d18bb42ea29a84cb3f00041adb1efb289a5066f2

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
