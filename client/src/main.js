import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.css';
import './assets/styles/reset.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
library.add(faInstagram, faFacebook, faLinkedinIn, faGithub, faPlusSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon)


// import VueQuillEditor from 'vue-quill-editor'

// import 'quill/dist/quill.core.css' // import styles
// import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme

// Vue.use(VueQuillEditor, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
