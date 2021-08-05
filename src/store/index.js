import { createStore } from 'vuex'

export default createStore({
  state: {
    Authorization:''
  },
  mutations: {
    setToken(state,token){
      state.Authorization=token
      localStorage.setItem('Authorization',token)
    }
  },
  actions: {
  },
  modules: {
  }
})
