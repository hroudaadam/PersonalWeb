import userRoles from '../helpers/userRoles';

export default {
    namespaced: true,
    state: {
        accessToken: localStorage.getItem('accessToken') || null,
        userRole: localStorage.getItem('userRole') || null
    },
    actions: {
        storeLogout({ commit }) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userRole');
            commit('setAccessToken', null);
            commit("setUserRole", null);
        },
        storeLogin({ commit }, accessToken, userRole) {
            commit('setAccessToken', accessToken);
            commit("setUserRole", userRole);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userRole', userRole);
        }
    },
    getters: {
        isLogged(state) {
            return !!state.accessToken;
        },
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