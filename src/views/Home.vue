<template>
  <transition name="fade" mode="out-in">
    <div v-if="$store.state.loggedIn">
      <div class="flex justify-center w-full 1.5xl:pb-5">
        <span class="w-11/12 text-3xl font-semibold pl-5">Welcome Olaf</span>
      </div>
      <div class="flex flex-col w-screen">
        <div class="flex flex-col justify-center items-center space-y-6">
          <div class="flex flex-col xl:flex-row space-y-6 xl:space-x-6 xl:space-y-0 w-11/12">
            <div class="xl:w-2/5 hidden xl:block">
              <TransactionsWidget/>
            </div>
            <div class="flex flex-col space-y-6 xl:w-4/6">
              <BalanceWidget/>
              <GraphWidget/>
            </div>
            <div class="xl:w-2/5 xl:hidden">
              <TransactionsWidget/>
            </div>
            <div class="xl:w-2/6">
              <StocksWidget/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <component v-else :is="currentView"/>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import LogIn from '@/views/LogIn'
import SignUp from '@/views/SignUp'
import BalanceWidget from '@/components/Widgets/BalanceWidget'
import GraphWidget from '@/components/Widgets/GraphWidget'
import TransactionsWidget from '@/components/Widgets/TransactionsWidget'
import StocksWidget from '@/components/Widgets/StocksWidget'

export default {
  components: {
    LogIn,
    SignUp,
    BalanceWidget,
    GraphWidget,
    TransactionsWidget,
    StocksWidget
  },
  setup() {
    const store = useStore()

    const currentView = computed(() => {
      const currentViewIndex = store.state.currentViewIndex

      if (currentViewIndex === 0) return 'LogIn'
      else if (currentViewIndex === 1) return 'SignUp'
      else return ''
    })

    return { currentView }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>