export default {
  namespaced: true,

  state: () => ({
    stockList: [
      {
        'id': 0,
        'name': 'AAPL'
      },
      {
        'id': 1,
        'name': 'TSLA'
      },
      {
        'id': 2,
        'name': 'FB'
      },
      {
        'id': 3,
        'name': 'MSFT'
      },
      {
        'id': 4,
        'name': 'AMZN'
      },
      {
        'id': 5,
        'name': 'AMD'
      },
      {
        'id': 6,
        'name': 'GOOGL'
      },
      {
        'id': 7,
        'name': 'GME'
      },
      {
        'id': 8,
        'name': 'NFLX'
      },
      {
        'id': 9,
        'name': 'BA'
      },
      {
        'id': 10,
        'name': 'KO'
      }
    ]
  }),
  mutations: {
    setStockList(state, stockList) {
      state.stockList = stockList
    },
  }
}