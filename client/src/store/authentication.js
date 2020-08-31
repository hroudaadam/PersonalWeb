export default {
    namespaced: true,
    state: {
        accessToken: null
    },
    actions: {

    },
    getters: {
        isUserLogged(state) {
            return !!state.accessToken;
        }
    },
    mutations: {

    }
}