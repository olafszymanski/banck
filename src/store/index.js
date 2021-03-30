import { createStore } from 'vuex'

export default createStore({
  state: {
    currentViewIndex: 0,
    loggedIn: false
  },
  mutations: {
    setViewIndex(state, index) {
      state.currentViewIndex = index
    }
  },
  actions: {
  },
  modules: {
  }
})
