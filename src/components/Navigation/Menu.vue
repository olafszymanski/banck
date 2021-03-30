<template>
  <ul>
    <MenuItem :index="0" @click="itemClicked">Log in</MenuItem>
    <MenuItem :index="1" @click="itemClicked">Sign up</MenuItem>
  </ul>
</template>

<script>
import MenuItem from '@/components/Navigation/MenuItem'

export default {
  components: {
    MenuItem
  },
  props: {
    deactivateMenu: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const itemClicked = () => props.deactivateMenu()
  
    return { itemClicked }
  }
}
</script>