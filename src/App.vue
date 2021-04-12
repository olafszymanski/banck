<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <main class="flex flex-col items-center p-5">
      <Home/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'
import Home from '@/views/Home'

export default {
  components: {
    Navbar,
    Footer,
    Home
  }
}
</script>

<style>
body {
  overflow-x: hidden;
  background-color: #F9F9F9;
}
</style>