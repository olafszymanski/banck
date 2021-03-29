<template>
  <input v-model="state.content" :class="`${ state.hasContent ? '' : 'italic' } p-3 text-14px sm:text-15px lg:text-16px xl:text-17px text-chinese-black placeholder-argent rounded-10px shadow-lg outline-none transition-all ring-maximum-red focus:ring-2`" :placeholder="state.placeholderValue" :type="state.inputType">
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      inputType: props.type,
      placeholderValue: props.placeholder,
      content: '',
      hasContent: false
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