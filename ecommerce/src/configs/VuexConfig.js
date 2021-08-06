//const storeObj = {
//  state: {
//    isAdmin: false,

//    business: {
//      id: 0,
//      name: '',
//      resources: []
//    },

//    user:{
//      id: 0,
//      email: '',
//      name: '',
//      idOriginBusiness: 0,
//      isAdmin: false,
//      resources: []
//    }
//  },
  
//  mutations: {
//    setAdmin(state, isAdmin) {
//      state.isAdmin = isAdmin
//    },

//    setBusiness(state, business) {
//      state.business = business;
//    },

//    resetAccess(state) {
//      state.admin = false;
//      state.business.resources = [];
//      state.business.id = 0;
//      state.business.name = '';
//    },

//    setUser(state, user) {
//      state.user = user;
//    },

//  },

//  getters: {
//    verifyResource: (state) => (resource) => {
//      let r = state.business.resources.filter(e => e.resource === resource);
//      return (r.length == 1);
//    },

//    isAdmin: (state) => () => {
//      return state.isAdmin;
//    },

//    getBusiness: (state) => () => {
//      return state.business;
//    },

//    getUser: (state) => () => {
//      return state.user;
//    }
//  },

//  actions: {
//    changeBusiness(context, business) {
//      context.commit('setBusiness', business);
//    },

//    changeUser(context, user) {
//      context.commit('setUser', user);
//    }
//  }
//}

//export default storeObj;

//// Exemplos de utilização no corpo do front
//// pegar id da empresa = this.$store.getters.getBusiness().id 
//// verificar certo recurso = this.$store.getters.verifyResource('attendance.flow')
