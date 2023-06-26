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
import { mapActions } from "vuex";
export default {
  components: {
    sidebar,
    buildScroll
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

.offcanvas {
  background-color: rgba(0, 0, 0, 0.8);
}
.offcanvas-body {
  position: relative;
}

.btn, .btn:active {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  background: none;
  border: none;
  scale: 1.5;
  z-index: 8;
}
.icon {
  color: white;
  height: 12rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.15rem solid gray;
}

.icon h6 {
  margin-top: auto;
  margin-bottom: 2rem;
}
.icon i {
  scale: 6;
  margin-top: 20%;
  
}
.sidebar {
  margin-top: 3rem;
  color: white;
}
.sidebar ul{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  position: relative;
}

.sidebar button {
  width: fit-content;
  margin-left: auto;
  border: none;
  background: none;
  color: white;
  position: absolute;
  right: 0;
}

.logout {
  position: absolute;
  bottom: 2rem;
}
.logout button {
  border: none;
  background: none;
  color: white;
}
</style>
