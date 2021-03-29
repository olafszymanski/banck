<template>
  <li :class="`${ $store.state.activeItemIndex === itemIndex ? 'text-chinese-black border-maximum-red' : 'text-argent border-argent' } text-18px font-light border-solid border-b-3 transition-all ease-in-out cursor-pointer hover:text-chinese-black hover:border-maximum-red`" @click="clicked">
    <slot></slot>
  </li>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    
    const itemIndex = ref(props.index)
    
    const clicked = () => store.commit('setActiveItemIndex', itemIndex)

    return {
      itemIndex,
      clicked
    }
  }
}
</script>

<style scoped>
li {
  font-family: 'Poppins', sans-serif;
}
</style>