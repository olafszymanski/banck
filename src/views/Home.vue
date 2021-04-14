<template>
  <transition name="fade" mode="out-in">
    <div v-if="$store.state.loggedIn">
      <div class="flex justify-center w-full pb-5">
        <span class="w-11/12 text-3xl font-semibold pl-5">Welcome Olaf</span>
      </div>
      <div class="flex flex-col w-screen">
        <div class="flex flex-col justify-center items-center space-y-6">
          <div class="flex flex-col 2lg:flex-row space-y-6 2lg:space-x-6 2lg:space-y-0 w-11/12">
            <div class="flex flex-col space-y-6 2lg:w-2/5">
              <BalanceWidget/>
              <BalanceWidget/>
            </div>
            <div class="flex flex-grow-0 flex-col 2lg:flex-row space-y-6 2lg:space-x-6 2lg:space-y-0 w-full 2lg:w-3/5">
              <TransactionsWidget class="2lg:w-3/5"/>
              <StocksWidget class="2lg:w-2/5"/>
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
import TransactionsWidget from '@/components/Widgets/TransactionsWidget'
import StocksWidget from '@/components/Widgets/StocksWidget'

export default {
  components: {
    LogIn,
    SignUp,
    BalanceWidget,
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