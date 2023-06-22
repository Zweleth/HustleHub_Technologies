<template lang="">
  <div class="sites" v-if="sites">
    <h3>Sites</h3>
    <div class="site" v-for="site in sites" :key="site">
      <i class="fa-solid fa-shop" v-if="site.site_type == 'e-commerce'"></i>
      <i class="fa-solid fa-briefcase" v-if="site.site_type == 'Business'"></i>
      <i class="fa-solid fa-comments" v-if="site.site_type == 'Blog'"></i>
      <i
        class="fa-solid fa-calendar-check"
        v-if="site.site_type == 'Event'"
      ></i>
      <i class="fa-solid fa-id-card" v-if="site.site_type == 'Portfolio'"></i>
      <h6 class="site_name">{{ site.site_name }}</h6>
      <h6 class="client">{{ site.first_name }}</h6>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "sites",
  computed: {
    ...mapGetters(["sites", "site"]),
  },
  methods: {
    getAllSites() {
      this.$store.dispatch("fetchSites");
    },
  },
  created() {
    this.getAllSites();
  },
};
</script>
<style scoped>
.sites {
  width: 90vw;
  height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.site {
  height: 3.5rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 0.4rem;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}

.site i {
  scale: 1.8;
  width: 4rem;
}
</style>
