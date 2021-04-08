<template>
  <div class="flex flex-col items-center space-y-10 w-5/6 md:w-3/4 lg:w-1/2 xl:w-1/3 p-2 xs:p-4 bg-white rounded-10px shadow-lg">
    <div class="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 w-11/12">
      <span class="text-22px sm:text-20px font-bold">Balance</span>
      <div class="flex justify-between sm:justify-end sm:space-x-4 w-full xs:w-11/12">
        <Signal :value="true"/>
        <Signal :value="false"/>
      </div>
    </div>
    <span class="text-35px xs:text-40px sm:text-5xl font-medium tracking-widest">$ 20,000.00</span>
    <Button class="w-11/12 xs:w-1/2 sm:w-1/3" value="Transfer" :outline="true"/>
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