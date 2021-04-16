import { createStore } from 'vuex'
import SignUpModule from '@/store/SignUpModule'
import HomeModule from '@/store/HomeModule'

export default createStore({
  state: {
    currentViewIndex: 0,
    loggedIn: true,
  },
  mutations: {
    setViewIndex(state, index) {
      state.currentViewIndex = index
    }
  },
  modules: {
    signup: SignUpModule,
    home: HomeModule
  }
})
