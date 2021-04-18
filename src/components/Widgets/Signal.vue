<template>
  <div :class="`flex justify-center items-center ${ state.positive ? 'text-grassy bg-light-green' : 'text-rose bg-light-rose' } rounded-10px`">
    <svg v-if="state.positive" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>
    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg>
    <span class="text-14px font-medium">$ {{ state.value }}</span>
  </div>
</template>

<script>
import { reactive } from 'vue'
import format from '@/utils/MoneyFormatter'

export default {
  props: {
    positive: {
      type: Boolean,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      positive: props.positive,
      value: format(props.value)
    })

    // const signalPositive = ref(props.positive)
    // const signalValue = ref(props.value)

    return { state }
  }
}
</script>

<style>

</style>