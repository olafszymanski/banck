<template>
  <input v-model="state.content" :class="`${ state.hasContent ? '' : 'italic' } block w-full p-3 text-14px sm:text-15px lg:text-16px xl:text-17px text-chinese-black placeholder-argent rounded-10px shadow-lg outline-none transition-all ring-maximum-red ring-opacity-50 focus:ring-2`" type="text" :placeholder="state.placeholderValue">
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