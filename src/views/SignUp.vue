<template>
  <div class="flex flex-col space-y-6 w-5/6 sm:w-4/5 md:w-3/5 lg:w-2/5">
    <span class="text-chinese-black text-2xl xs:text-3xl font-medium">Sign up</span>
    <div class="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
      <TextInput class="w-full md:w-49%" placeholder="Name..."/>
      <TextInput class="w-full md:w-49%" placeholder="Last name..."/>
    </div>
    <TextInput type="email" placeholder="E-mail..."/>
    <TextInput type="password" placeholder="Password..."/>
    <TextInput type="password" placeholder="Confirm password..."/>
    <Button value="Proceed"/>
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