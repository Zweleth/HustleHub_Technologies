<template lang="">
  <div class="mysites" v-if="sites && show_site == false">
    <div class="site" v-for="site in sites" :key="site">
      <div class="icon">
        <i class="fa-solid fa-shop" v-if="site.site_type == 'e-commerce'"></i>
        <i
          class="fa-solid fa-briefcase"
          v-if="site.site_type == 'Business'"
        ></i>
        <i class="fa-solid fa-comments" v-if="site.site_type == 'Blog'"></i>
        <i
          class="fa-solid fa-calendar-check"
          v-if="site.site_type == 'Event'"
        ></i>
        <i class="fa-solid fa-id-card" v-if="site.site_type == 'Portfolio'"></i>
      </div>
      <div class="info">
        <h6 class="name">{{ site.site_name }}</h6>
        <h6 class="description">{{ site.site_description }}</h6>
        <h6 class="type">{{ site.site_type }}</h6>
        <h6 class="status">{{ site.status_name }}</h6>
        <button @click.prevent="showMore(site.site_id)">View more</button>
      </div>
    </div>
  </div>
  <div class="singleSite" v-if="show_site == true && site">
    <div class="s_site">
      <h6 class="single_status">{{ site[0]?.status_name }}</h6>
      <h6 class="s_site_name">{{site[0]?.site_name}}</h6>
      <h6 class="s_site_type">{{site[0]?.site_type}}</h6>
      <h6 class="s_site_type">{{site[0]?.site_description}}</h6>
      
      <div class="s_icon">
        <i class="fa-solid fa-pen-ruler" v-if="site[0]?.status_id == 1"></i>
      </div>
      <h6 class="s_description">{{site[0]?.status_description}}</h6>
      <div class="buttons">
        <button class="btn btn-re" v-if="status_id == 1 || status_id == 6">Re-visit</button>
        <button class="btn btn-apprv2" v-if="status_id == 1 || status_id == 6">Approve</button>
        <!-- <button class="btn btn-apprv">Approve</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "mySites",
  data() {
    return {
      payload: {
        client_id: JSON.parse(sessionStorage.getItem("loggedClient"))
          ?.client_id
      },

      show_site: false,
    };
  },
  computed: {
    ...mapGetters(["sites", "site"]),
  },
  methods: {
    ...mapActions(["fetchClientsSites", "fetchSite"]),
    ...mapMutations(["setSites"]),
    showMore(id) {
      this.fetchSite(id);
      this.show_site = true;
    },
  },
  created() {
    this.fetchClientsSites(this.payload?.client_id);
  },
};
</script>
<style scoped>
.mysites {
  width: 100vw;
  height: 80vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
}

.site {
  width: 30rem;
  height: 12rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
}

.icon {
  display: grid;
  place-items: center;
  width: 10rem;
  height: 90%;
  border-right: 0.1rem solid white;
}

.icon i {
  scale: 5;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: left;
  text-align: left;
  padding: 1.5rem 0.5rem;
}

.info button {
  font-size: small;
  border: none;
  background: none;
  border: 0.1rem solid white;
  border-radius: 0.3rem;
  margin-top: 1rem;
  color: white;
  padding: 0.1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.status {
  background-color: rgba(0, 255, 255, 0.3);
  padding: 0.3rem 0.3rem;
  border-radius: 0.4rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.site h6 {
  color: white;
}

.singleSite {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.s_site {
  width: 80vw;
  height: 90vh;
  margin-top: auto;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem 1rem 0 0;
  position: relative;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.single_status {
  background-color: rgba(0, 255, 255, 0.3);
  padding: 0.3rem 0.3rem;
  border-radius: 0 0 0.4rem 0.4rem;
  position: absolute;
  top: 0;
  right: 4rem;
  color: white;
  width: fit-content;
}

.s_site_name {
  font-size: xx-large;
}
.s_site_name span{
 font-size: small;
 margin-bottom: auto;
}
.s_icon {
  position: relative;
  margin-top: 5rem;
}
.s_icon i {
  font-size: 10rem;
}

.s_description {
  margin-top: 3rem;
  font-size: large;
}

.buttons {
  width: fit-content;
  height: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1rem;
}

.buttons .btn {
  padding: 0.2rem 0.4rem;
  color: white;
  padding: 0.2rem 0.4rem;
}
.buttons .btn-re {
  background-color: rgba(0, 255, 255, 0.3);
}

.buttons .btn-apprv {
  background-color: rgba(255, 192, 203, 0.5);
}

.buttons .btn-apprv2 {
  background-color: rgba(255, 192, 203, 0.5);
}
</style>
