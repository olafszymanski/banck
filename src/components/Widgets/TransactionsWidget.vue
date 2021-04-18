<template>
  <div class="flex flex-col items-center space-y-5 p-2 xs:p-4 text-chinese-black bg-white rounded-10px shadow-lg">
    <div class="flex flex-col xs:flex-row justify-between items-center space-y-3 xs:space-y-0 w-11/12">
      <span class="text-22px sm:text-20px font-bold">Transactions</span>
      <Signal :positive="true" :value="2000" class="px-1 py-1 sm:px-2 sm:py-1"/>
    </div>
    <div class="flex flex-col justify-start space-y-2 w-full">
      <div class="flex justify-between w-full">
        <span class="font-medium">Monday</span>
        <span class="font-light">12.04.2021</span>
      </div>
      <div class="space-y-2">
        <Transaction :type="true" icon="transfer" title="Transfer" description="Mom" :value="380"/>
        <Transaction :type="false" icon="cash" title="ATM Withdrawal" description="Staszów" :value="120"/>
      </div>
      <div class="flex justify-between w-full">
        <span class="font-medium">Sunday</span>
        <span class="font-light">11.04.2021</span>
      </div>
      <div class="space-y-2">
        <Transaction :type="false" icon="card" title="Card Payment" description="Cinema" :value="15"/>
        <Transaction :type="false" icon="card" title="Card Payment" description="Supreme" :value="399"/>
      </div>
      <div class="flex justify-between w-full">
        <span class="font-medium">Saturday</span>
        <span class="font-light">10.04.2021</span>
      </div>
      <div class="space-y-2">
        <Transaction :type="false" icon="phone" title="Mobile Payment" description="ebay.co.uk" :value="200"/>
        <Transaction :type="true" icon="transfer" title="Transfer" description="Dad" :value="420"/>
        <Transaction :type="true" icon="transfer" title="Transfer" description="Grandpa" :value="420"/>
      </div>
    </div>
    <div class="flex justify-end w-full">
      <Button class="p-1 w-full xs:w-1/2 md:w-1/3" value="More" :outline="true"/>
    </div>
  </div>
</template>

<script>
import Signal from '@/components/Widgets/Signal'
import Button from '@/components/Inputs/Button'
import Transaction from '@/components/Widgets/Transaction'

export default {
  components: {
    Signal,
    Button,
    Transaction
  }
}
</script>

<style scoped>
div {
  font-family: 'Poppins', sans-serif;
}
</style>