<template lang="">
  <div class="page" id="admin">
    <sidebar/>
    <sites/>
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
import sidebar from "@/components/Sidebar.vue";
import sites from "@/components/Sites.vue";
export default {
  components: {
    sites,
    sidebar,
  },
};
</script>
<style scoped>
#admin {
  justify-content: center;
  align-items: center;
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
</style>
