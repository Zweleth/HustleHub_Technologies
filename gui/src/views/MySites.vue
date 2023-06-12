<template lang="">
  <div class="page" id="mysites">
    <buildScroll/>
    <sidebar />
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
import buildScroll from '@/components/BuildScroll.vue';
import sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    sidebar,
    buildScroll
  }
}
</script>
<style scoped>
.page {
  align-items: center;
  justify-content: center;
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
