<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <Footer/>
  </div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  background-color: '#F9F9F9';
}
</style>