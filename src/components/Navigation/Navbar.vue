<template>
  <nav class="relative flex flex-col items-center w-screen h-50px xs:h-75px md:h-100px bg-white rounded-b-10px shadow-lg z-20">
    <div class="w-11/12 sm:w-10/12 my-auto">
      <div class="flex flex-row justify-end sm:justify-between items-center">
        <div class="flex sm:flex-none flex-grow my-auto justify-center">
          <span class="text-maximum-red text-25px xs:text-35px font-bold cursor-pointer">B<span class="text-chinese-black text-20px xs:text-30px font-bold">anck</span></span>
        </div>
        <Menu class="hidden sm:flex flex-row space-x-5 my-auto"/>
        <div class="absolute my-auto sm:hidden">
          <svg v-if="menuActive" class="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="menuClicked"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          <svg v-else class="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="menuClicked"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
        </div>
      </div>
    </div>
  </nav>
  <transition name="slide">
    <div v-if="menuActive" class="absolute flex justify-center w-screen my-40px xs:my-65px md:my-90px bg-white rounded-b-10px shadow-lg sm:invisible z-10">
      <Menu class="flex flex-col space-y-5 w-4/5 p-6 my-10px text-center" :deactivateMenu="deactivateMenu"/>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue'
import Menu from '@/components/Navigation/Menu'

// TODO: Fix menu icon. It doesn't scale properly.

export default {
  components: {
    Menu
  },
  setup() {
    const menuActive = ref(false)

    const menuClicked = () => menuActive.value = !menuActive.value
    const deactivateMenu = () => menuActive.value = false

    return { 
      menuActive,
      menuClicked,
      deactivateMenu
    }
  }
}
</script>

<style scoped>
span, div {
  font-family: 'Poppins', sans-serif;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>