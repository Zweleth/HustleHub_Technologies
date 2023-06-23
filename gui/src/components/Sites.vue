<template lang="">
  <div class="sites" v-if="sites">
    <h3>Sites</h3>
    <div class="site" v-for="site in sites" :key="site">
      <i class="fa-solid fa-shop icons" v-if="site.site_type == 'e-commerce'"></i>
      <i class="fa-solid fa-briefcase icons" v-if="site.site_type == 'Business'"></i>
      <i class="fa-solid fa-comments icons" v-if="site.site_type == 'Blog'"></i>
      <i
        class="fa-solid fa-calendar-check icons"
        v-if="site.site_type == 'Event'"
      ></i>
      <i class="fa-solid fa-id-card icons" v-if="site.site_type == 'Portfolio'"></i>
      <h6 class="site_name">{{ site.site_name }}</h6>
      <h6 class="client_name">{{ site.first_name }}</h6>
      <h6 class="client_email">{{ site.email_add }}</h6>
      <h6 class="site_status">{{ site.status_name }} </h6>
      <button>
        <i class="fa-solid fa-arrow-left" @click.prevent="statusUpdateMin(site.site_id)" v-if="site.status_id == 4 || site.status_id == 7"></i>
      </button>
      <button @click.prevent="statusUpdate1(site.site_id, site.status_id); getAllSites()" v-if="site.status_id != 3 && site?.status_id != 6">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      

    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "sites",
  computed: {
    ...mapGetters(["sites", "site"]),
  },
  methods: {
    ...mapActions(["statusUpdate1","statusUpdateMin"]),
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

.site .icons {
  scale: 1.8;
  width: 4rem;
}

.site_name {
    width: 15rem;
}
.client_name {
    width: 10rem;
}
.client_email {
    width: 20rem;
}

.site_status {
    width: 13rem;
}
.site h6 {

    text-align: start;
}
.site button {
    background: none;
    border: none;
    color: white;
}
</style>
