export default {
  namespaced: true,

  state: () => ({
    password: ''
  }),
  mutations: {
    setPassword(state, password) {
      state.password = password
    },
  }
}