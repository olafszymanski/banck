<template>
  <ul>
    <router-link to="/login"><MenuItem :index="0">Log in</MenuItem></router-link>
    <router-link to="/signup"><MenuItem :index="1">Sign up</MenuItem></router-link>
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