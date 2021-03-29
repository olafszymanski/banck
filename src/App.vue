<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  background-color: '#F9F9F9';
}
</style>