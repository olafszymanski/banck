<template>
  <input :class="`p-3 text-white font-medium ${ outlineValue ? 'text-maximum-red bg-white border-solid border-2 border-maximum-red hover:text-white hover:border-cadmium-purple' : 'bg-maximum-red' } rounded-10px cursor-pointer outline-none transition-all hover:bg-cadmium-purple`" type="button" :value="inputValue">
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    value: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const inputValue = ref(props.value)
    const outlineValue = ref(props.outline)

    return { 
      inputValue,
      outlineValue  
    }
  }
}
</script>

<style scoped>
input {
  font-family: 'Poppins', sans-serif;
}
</style>