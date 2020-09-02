import router from '../router/index';
import userRoles from '../helpers/userRoles';

export default {
    namespaced: true,
    state: {
        accessToken: null,
        userRole: null
    },
    actions: {
        logout({commit}) {
            commit('setAccessToken', null);
            commit("setUserRole", null);
            router.push({name: 'Home'});
        }
    },
    getters: {
        isUserLogged(state) {
            return !!state.accessToken && state.userRole === userRoles.user;
        },
        isAdminLogged(state) {
            return !!state.accessToken && state.userRole === userRoles.admin;
        }
    },
    mutations: {
        setAccessToken(state, value) {
            state.accessToken = value;
        },
        setUserRole(state, value) {
            state.userRole = value;
        },
    }
}