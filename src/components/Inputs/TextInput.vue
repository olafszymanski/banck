<template>
  <div class="flex flex-col">
    <div :class="`${ state.hasError ? '' : 'invisible'} flex items-center p-1`">
      <svg class="w-6 h-6 text-maximum-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span class="pl-1 text-maximum-red text-13px sm:text-14px lg:text-15px xl:text-16px font-medium italic">{{ state.errorMessage }}</span>
    </div>
    <input v-model="state.content" :class="`${ state.hasContent ? '' : 'italic' } ${ state.hasError ? 'text-maximum-red border-maximum-red outline-none' : 'text-chinese-black focus:ring-2' } block w-full p-3 text-14px sm:text-15px lg:text-16px xl:text-17px placeholder-argent border-solid border-2 border-white rounded-10px shadow-lg outline-none transition-all ring-maximum-red ring-opacity-50`" type="text" :placeholder="state.placeholderValue">
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
import Validator from '@/mixins'
import useValidator from '@/validators'

export default {
  mixins: [ Validator ],
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
      hasError: false,
      errorMessage: ''
    })

    watch(() => state.content, (newContent) => {
      state.hasError = false

      if (newContent.trim().length !== 0) state.hasContent = true
      else state.hasContent = false

      const validator = useValidator()
      const { active, message } = validator.validate(props, state.placeholderValue, newContent)
      state.hasError = active
      state.errorMessage = message
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