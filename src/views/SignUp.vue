<template>
  <div class="flex flex-col space-y-2 w-5/6 sm:w-4/5 md:w-3/5 lg:w-2/5">
    <span class=" text-chinese-black text-2xl xs:text-3xl text-left font-medium">Sign up</span>
    <div class="flex flex-col space-y-6">
      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row justify-between items-end md:space-y-0">
          <TextInput class="w-full md:w-49%" :validators="[validators.min, validators.min]" :min="2" :max="30" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="Name..."/>
          <TextInput class="w-full md:w-49%" :validators="[validators.min, validators.min]" :min="2" :max="30" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="Last name..."/>
        </div>
        <TextInput checkId="email" :validators="[validators.email, validators.removeWhitespaces]" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="E-mail..."/>
        <PasswordInput :validators="[validators.min, validators.max, validators.removeWhitespaces]" :min="6" :max="100" :useStore="true" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="Password..."/>
        <PasswordInput :validators="[validators.min, validators.max, validators.removeWhitespaces, validators.compare]" :min="6" :max="100" :compareTo="$store.state.signup.password" :compareMessage="`Passwords are not equal!`" :validate="validate" :toggleValidate="() => validate = !validate" placeholder="Confirm password..."/>
      </div>
      <Button class="p-2" value="Proceed" @click="validate = true"/>
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