<template>
  <input :class="`${ state.inputWidth } ${ state.inputHeight } p-3 text-white font-medium bg-maximum-red rounded-10px cursor-pointer outline-none transition-all hover:bg-cadmium-purple`" type="button" :value="state.inputValue">
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    value: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: 'w-auto'
    },
    height: {
      type: String,
      default: 'h-auto'
    }
  },
  setup(props) {
    const state = reactive({
      inputValue: props.value,
      inputWidth: props.width,
      inputHeight: props.height
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