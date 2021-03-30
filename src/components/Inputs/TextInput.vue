<template>
  <div class="flex flex-col">
    <ErrorLabel :class="`${ state.hasError ? '' : 'invisible'}`" :getMessage="() => state.errorMessage"/>
    <input v-model="state.content" :class="`${ state.hasContent ? '' : 'italic' } ${ state.hasError ? 'text-maximum-red border-maximum-red outline-none' : 'text-chinese-black focus:ring-2' } block w-full p-3 text-14px sm:text-15px lg:text-16px xl:text-17px placeholder-argent border-solid border-2 border-white rounded-10px shadow-lg outline-none transition-all ring-maximum-red ring-opacity-50`" type="text" :placeholder="state.placeholderValue">
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
import Validator from '@/mixins'
import useValidator from '@/validators'
import ErrorLabel from '@/components/Inputs/ErrorLabel'

export default {
  mixins: [ Validator ],
  props: {
    placeholder: {
      type: String,
      required: true
    }
  },
  components: {
    ErrorLabel
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