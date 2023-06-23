<template>
  <navbar/>
  <router-view/>
  <mobile_nav/>
</template>
<script>
import navbar from '@/components/Navbar.vue'
import mobile_nav from '@/components/MobileNav.vue'

export default {
  components: {
    navbar,
    mobile_nav
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
