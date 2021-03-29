<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <main class="flex flex-col items-center">
      <transition name="fade">
      </transition>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component v-if="!$store.state.loggedIn" :is="Component"/>
        </transition>
      </router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    router.afterEach(() => {
      if (router.currentRoute.value.name == 'login') store.commit('setActiveItemIndex', 0) 
      else if (router.currentRoute.value.name == 'signup') store.commit('setActiveItemIndex', 1)
      else store.commit('setActiveItemIndex', -1)
    })
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