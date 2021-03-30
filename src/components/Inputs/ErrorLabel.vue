<template>
  <div class="flex items-center p-1">
    <svg class="w-6 h-6 text-maximum-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span class="pl-1 text-maximum-red text-13px sm:text-14px lg:text-15px xl:text-16px font-medium italic">{{ getErrorMessage() }}</span>
  </div>
</template>

<script>

export default {
  props: {
    getMessage: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const getErrorMessage = () => props.getMessage()
    return { getErrorMessage }
  }
}
</script>