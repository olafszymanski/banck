<template>
  <div :class="`flex w-full px-4 py-2 ${ state.trend ? 'bg-light-green hover:bg-medium-green' : 'bg-light-rose hover:bg-medium-rose' } ${ state.error ? 'bg-light-rose' : '' } rounded-10px transition-all cursor-pointer`">
    <div class="flex flex-row xs:flex-row 2lg:flex-col 1.5xl:flex-row justify-between xs:items-center lg:items-start 1.5xl:items-center w-full pl-3 xs:pl-2">
      <div class="flex flex-col justify-center">
        <span v-if="state.error" :class="`${ state.error ? 'text-rose' : '' } text-15px sm:text-16px lg:text-17px font-medium`">Unknown error occured! Please refresh the page.</span>
        <span v-else class="text-15px sm:text-16px lg:text-17px font-medium">{{ state.stockName }}</span>
      </div>
      <div v-if="!state.error" :class="`flex xs:justify-center items-center ${ state.trend ? 'text-dark-green' : 'text-dark-rose' }`">
        <svg v-if="state.trend" class="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>
        <svg v-else class="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>
        <span class="text-lg xs:text-2lg font-medium">$ {{ state.displayStockValue }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import format from '@/utils/MoneyFormatter'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    setLoading: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      error: false,
      stockName: props.name,
      stockValue: 0,
      displayStockValue: '',
      openStockValue: 0,
      trend: false
    })

    const request = require('request')

    const updatePrice = () => {
      request(`https://finnhub.io/api/v1/quote?symbol=${ state.stockName }&token=${ process.env.VUE_APP_FINNHUB_API_KEY }`, { json: true }, (err, res) => {
        if (err) state.error = true

        state.stockValue = res.body.c
        state.displayStockValue = format(state.stockValue)
        state.openStockValue = res.body.o

        state.trend = state.stockValue > state.openStockValue ? true : false

        if (props.index === props.length - 1) props.setLoading(false)
      })
    }

    updatePrice()
    setInterval(updatePrice, 30000)

    return { state }
  }
}
</script>
