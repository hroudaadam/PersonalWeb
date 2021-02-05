import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseApiUrl: "http://localhost:3000/api",
    accessToken: localStorage.getItem("accessToken") || null,
    // loading overlay
    loading: false,
    // error box
    errorMsg: null,
  },
  mutations: {
    setAccessToken(state, value) {
      state.accessToken = value;
    },    
    setLoading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    storeLogout({ commit }) {
      localStorage.removeItem("accessToken");
      commit("setAccessToken", null);
    },
    storeLogin({ commit }, model) {
      commit("setAccessToken", model.accessToken)
      localStorage.setItem("accessToken", model.accessToken);
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.accessToken;
    },
  },
  modules: {
  }
});
