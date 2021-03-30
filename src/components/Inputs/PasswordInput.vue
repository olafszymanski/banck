<template>
  <div class="relative">
    <div class="absolute inset-y-0 right-3 flex items-center">
      <svg :class="`w-6 h-6 ${ state.showPassword ? 'text-chinese-black' : 'text-argent' } cursor-pointer`" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="state.showPassword = !state.showPassword"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12   5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    </div>
    <input v-model="state.content" :class="`${ state.hasContent ? '' : 'italic' } block w-full p-3 text-14px sm:text-15px lg:text-16px xl:text-17px text-chinese-black placeholder-argent rounded-10px shadow-lg outline-none transition-all ring-maximum-red ring-opacity-50 focus:ring-2`" :placeholder="state.placeholderValue" :type="state.showPassword ? 'text' : 'password'" @focus="state.isActive = true" @blur="state.isActive = false">
  </div>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  props: {
    placeholder: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      placeholderValue: props.placeholder,
      content: '',
      hasContent: false,
      showPassword: false
    })

    watch(() => state.content, (newContent) => {
      if (newContent.trim().length !== 0) state.hasContent = true
      else state.hasContent = false
    })

    return { state }
  }
}
</script>

<style scoped>
input {
  font-family: 'Poppins', sans-serif;
}
</style>