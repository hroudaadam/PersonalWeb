import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseApiUrl: 'http://192.168.0.103:3000/api'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication
  }
});
