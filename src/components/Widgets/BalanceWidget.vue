<template>
  <div class="flex flex-col items-center space-y-10 p-2 xs:p-4 text-chinese-black bg-white rounded-10px shadow-lg">
    <div class="flex flex-col xs:flex-row justify-between items-center space-y-3 xs:space-y-0 w-11/12">
      <span class="text-22px xs:text-20px font-bold">Balance</span>
      <div class="flex justify-between xs:justify-end space-x-2 sm:space-x-4 lg:space-x-2 w-full xs:w-11/12">
        <Signal :value="true" class="px-1 py-1 sm:px-2 sm:py-1"/>
        <Signal :value="false" class="px-1 py-1 sm:px-2 sm:py-1"/>
      </div>
    </div>
    <span class="text-35px xs:text-40px sm:text-5xl font-medium tracking-widest">$ 20,000.00</span>
    <Button class="p-1 w-11/12 xs:w-1/2 sm:w-1/3" value="Transfer" :outline="true"/>
  </div>
</template>

<script>
import Signal from '@/components/Widgets/Signal'
import Button from '@/components/Inputs/Button'

export default {
  components: {
    Signal,
    Button
  }
}
</script>

<style scoped>
div {
  font-family: 'Poppins', sans-serif;
}
</style>