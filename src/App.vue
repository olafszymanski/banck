<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <main class="flex flex-col items-center">
      <transition name="fade" mode="out-in">
        <component :is="currentView"/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'
import LogIn from '@/views/LogIn'
import SignUp from '@/views/SignUp'

export default {
  components: {
    Navbar,
    Footer,
    LogIn,
    SignUp
  },
  setup() {
    const store = useStore()

    const currentView = computed(() => {
      if (store.state.currentViewIndex === 0) return 'LogIn'
      else if (store.state.currentViewIndex === 1) return 'SignUp'
      else return ''
    })

    return { currentView }
  }
}
</script>

<style>
body {
  background-color: #F9F9F9;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>