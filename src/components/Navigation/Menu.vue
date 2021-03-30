<template>
  <ul>
    <MenuItem :index="0">Log in</MenuItem>
    <MenuItem :index="1">Sign up</MenuItem>
  </ul>
</template>

<script>
import MenuItem from '@/components/Navigation/MenuItem'

export default {
  components: {
    MenuItem
  }
}
</script>