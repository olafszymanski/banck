<template>
  <div :class="`flex w-full px-4 py-2 ${ transactionType ? 'bg-light-green' : 'bg-light-rose' } rounded-10px`">
    <div class="flex items-center">
      <div v-html="convertedIcon" :class="`flex flex-none justify-center items-center w-10 sm:w-12 h-10 sm:h-12 ${ transactionType ? 'bg-grassy' : 'bg-rose' } rounded-full`"></div>
    </div>
    <div class="flex flex-col xs:flex-row 2lg:flex-col xl:flex-row justify-between xs:items-center lg:items-start xl:items-center w-full pl-3 xs:pl-2">
      <div class="flex flex-col">
        <span class="text-15px sm:text-16px lg:text-17px font-medium">{{ transactionTitle }}</span>
        <span class="text-13px sm:text-14px lg:text-15px font-light italic">{{ transactionDescription }}</span>
      </div>
      <span :class="`${ transactionType ? 'text-dark-green' : 'text-dark-rose' } text-xl xs:text-lg font-medium`">$ {{ formatedValue }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import convert from '@/utils/IconConverter'
import format from '@/utils/MoneyFormatter'

export default {
  props: {
    type: {
      type: Boolean,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const transactionType = ref(props.type)
    const transactionIcon = ref(props.icon)
    const transactionTitle = ref(props.title)
    const transactionDescription = ref(props.description)
    const transactionValue = ref(props.value)
    
    const convertedIcon = transactionIcon.value === 'transfer' ? convert(transactionIcon.value, transactionDescription.value[0]) : convert(transactionIcon.value)
    const formatedValue = format(transactionValue.value)

    return { transactionType, convertedIcon, transactionTitle, transactionDescription, formatedValue }
  }
}
</script>