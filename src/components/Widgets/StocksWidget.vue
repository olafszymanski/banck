<template>
  <div :class="`flex flex-col items-center p-2 xs:p-4 text-chinese-black bg-white rounded-10px shadow-lg`">
    <div class="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 w-11/12">
      <span class="text-22px sm:text-20px font-bold">Stocks</span>
    </div>
    <div class="flex justify-center items-center space-y-2 w-full h-full">
      <svg v-show="loading" class="w-36 h-36 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
      <Draggable v-show="!loading" class="dragArea list-group flex flex-col justify-center items-center space-y-2 w-full h-full" :list="stockList">
        <Stock v-for="stock in stockList" :key="stock.id" :name="stock.name" :setLoading="(value) => loading = value" :index="stock.id" :length="stockList.length" class="list-group-item animate-fade"/>
      </Draggable>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { VueDraggableNext } from 'vue-draggable-next'
import Stock from '@/components/Widgets/Stock'

export default {
  components: {
    Draggable: VueDraggableNext,
    Stock
  },
  setup() {
    const loading = ref(true)

    const store = useStore()
    
    const stockList = computed({
      get: () => store.state.home.stockList,
      set: (list) => store.commit('home/setStockList', list)
    })

    return { 
      loading,
      stockList
    }
  }
}
</script>

<style scoped>
div {
  font-family: 'Poppins', sans-serif;
}
</style>