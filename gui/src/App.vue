<template>
  <navbar/>
  <router-view/>
  <myfooter/>
  
</template>
<script>
import navbar from '@/components/Navbar.vue'
import mobile_nav from '@/components/MobileNav.vue'
import myfooter from '@/components/Footer.vue'

export default {
  components: {
    navbar,
    mobile_nav,
    myfooter
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}



</style>
