import { createStore } from 'vuex'

export default createStore({
  state: {
    activeItemIndex: -1
  },
  mutations: {
    setActiveItemIndex(state, index) {
      state.activeItemIndex = index
    }
  },
  actions: {
  },
  modules: {
  }
})
