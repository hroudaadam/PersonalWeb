import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/style.css';
import './assets/styles/reset.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebook, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faInstagram, faFacebook, faLinkedinIn, faGithub, faPlusSquare, faSignInAlt, faSignOutAlt, faPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
