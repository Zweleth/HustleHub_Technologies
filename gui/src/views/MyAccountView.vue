<template lang="">
  <div class="page" id="dashboard">
    
    <sidebar/>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
    <i class="fa-solid fa-bars"></i>
    </button>

    

   

    
  </div>
</template>
<script>

import sidebar from '@/components/Sidebar.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    sidebar,
    buildScroll
  },
  data() {
    return {
      client: JSON.parse(sessionStorage.getItem("loggedClient"))
    }
  },
  computed: {
    name() {
      return `${JSON.parse(sessionStorage.getItem("loggedClient")).first_name} ${JSON.parse(sessionStorage.getItem("loggedClient")).last_name}`
    }
  },
  methods: {
    ...mapActions(["signOut"]),
    toHome() {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
<style scoped>


</style>
