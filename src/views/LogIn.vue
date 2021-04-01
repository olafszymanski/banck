<template>
  <div class="flex flex-col space-y-6 w-5/6 sm:w-4/5 md:w-3/5 lg:w-2/5">
    <span class="text-chinese-black text-2xl xs:text-3xl font-medium">Log in</span>
    <div class="flex flex-col space-y-1">
      <TextInput :validators="[validators.length, validators.integer, validators.removeWhitespaces]" :length="10" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="Client number..."/>
      <PasswordInput :validators="[validators.min, validators.max, validators.removeWhitespaces]" :min="6" :max="100" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="Password..."/>
    </div>
    <div class="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 w-full">
      <div>
        <span class="text-13px sm:text-14px lg:text-15px xl:text-16px text-argent italic cursor-pointer">Recover your password</span>
      </div>
      <Button class="w-full lg:w-1/2" value="Proceed" @click="validate = true"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import TextInput from '@/components/Inputs/TextInput'
import PasswordInput from '@/components/Inputs/PasswordInput'
import Button from '@/components/Inputs/Button'
import useValidators from '@/validators'

export default {
  components: {
    TextInput,
    PasswordInput,
    Button
  },
  setup() {
    const validators = useValidators()

    const validate = ref(false)

    return { 
      validators, 
      validate
    }
  }
}
</script>

<style scoped>
span {
  font-family: 'Poppins', sans-serif;
}
</style>