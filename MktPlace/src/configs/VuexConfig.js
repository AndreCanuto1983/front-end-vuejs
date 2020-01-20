const storeObj = {
    state: {
        user: {
            id: 0,
            email: '',
            name: '',
            idOriginBusiness: 0,
            isAdmin: false,
            resources: []
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    getters: {
        getUser: (state) => () => {
            return state.user;
        }
    },
    actions: {
        changeUser(context, user) {
            context.commit('setUser', user);
        }
    }
}
export default storeObj;
