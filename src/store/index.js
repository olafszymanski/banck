import { createStore } from 'vuex'
import SignUpModule from '@/store/SignUpModule'

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
    signup: SignUpModule
  }
})
