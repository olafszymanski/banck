<template>
  <div class="flex flex-col space-y-6 w-5/6 sm:w-4/5 md:w-3/5 lg:w-2/5">
    <span class="text-chinese-black text-3xl font-medium">Log in</span>
    <TextInput placeholder="Client number..."/>
    <TextInput type="password" placeholder="Password..."/>
    <div class="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 w-full">
      <div>
        <span class="text-13px sm:text-14px lg:text-15px xl:text-16px text-argent italic cursor-pointer">Recover your password</span>
      </div>
      <Button width="w-full lg:w-1/2" height="h-auto" value="Proceed"/>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/Inputs/TextInput'
import Button from '@/components/Inputs/Button'

export default {
  components: {
    TextInput,
    Button
  }
}
</script>

<style scoped>
span {
  font-family: 'Poppins', sans-serif;
}
</style>