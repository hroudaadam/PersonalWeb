import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseApiUrl: 'http://192.168.0.103:3000/api',
    userRoles: {
      admin: "admin",
      user: "user"
    },
    posts: [
    ],
    nextPostId: 1,
    accessToken: localStorage.getItem('accessToken') || null,
    userRole: localStorage.getItem('userRole') || null,
  },
  mutations: {
    setPosts(state, value) {
      state.posts = value;
    },
    incrementNextPostId(state) {
      state.nextPostId++;
    },
    setAccessToken(state, value) {
      state.accessToken = value;
    },
    setUserRole(state, value) {
      state.userRole = value;
    },
  },
  actions: {
    addPost({ state, commit }, newPost) {
      var posts = state.posts;
      newPost.id = state.nextPostId;
      posts.push(newPost);

      commit('setPosts', posts);
      commit('incrementNextPostId');
    },
    storeLogout({ commit }) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userRole');
      commit('setAccessToken', null);
      commit("setUserRole", null);
    },
    storeLogin({ commit }, model) {
      commit('setAccessToken', model.accessToken);
      commit("setUserRole", model.userRole);
      localStorage.setItem('accessToken', model.accessToken);
      localStorage.setItem('userRole', model.userRole);
    }
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(p => p.id == id);
    },
    isLogged(state) {
      return !!state.accessToken;
    },
    isUserLogged(state) {
      return !!state.accessToken && state.userRole === state.userRoles.user;
    },
    isAdminLogged(state) {
      return !!state.accessToken && state.userRole === state.userRoles.admin;
    }
  },
  modules: {
  }
});
