<template>
  <input class="p-3 text-white font-medium bg-maximum-red rounded-10px cursor-pointer outline-none transition-all hover:bg-cadmium-purple" type="button" :value="inputValue">
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const inputValue = ref(props.value)

    return { inputValue }
  }
}
</script>

<style scoped>
input {
  font-family: 'Poppins', sans-serif;
}
</style>