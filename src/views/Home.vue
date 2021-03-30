<template>
  <transition name="fade" mode="out-in">
    <span v-if="$store.state.loggedIn">Logged in</span>
    <component v-else :is="currentView"/>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import LogIn from '@/views/LogIn'
import SignUp from '@/views/SignUp'

export default {
  components: {
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>