<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <main class="flex flex-col items-center">
      <LogIn/>
    </main>
    <Footer/>
  </div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'
import LogIn from '@/views/LogIn'

export default {
  components: {
    Navbar,
    Footer,
    LogIn
  }
}
</script>

<style>
body {
  background-color: #F9F9F9;
}
</style>