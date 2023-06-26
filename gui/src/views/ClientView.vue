<template lang="">
  <div class="page" id="client">
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
    <div class="client-info">
      <div class="left">
        <i class="fa-solid fa-user"></i>
        <h3>{{ client?.first_name }} {{ client?.last_name }}</h3>
        <h4>
          <span class="var">Email address :</span
          ><span class="val">{{ client?.email_add }}</span>
        </h4>
        <h4>
          <span class="var">Cell number :</span
          ><span class="val">{{ client?.cellphone }}</span>
        </h4>
        <h4>
          <span class="var">Number of sites :</span
          ><span class="val">{{ sites.length }}</span>
        </h4>
      </div>
      <div class="right">
        <h3>My sites</h3>
        <router-link to="/mysites">
            <div class="site" v-for="site in sites" :key="site">
          <div class="icon">
            <i
              class="fa-solid fa-shop"
              v-if="site.site_type == 'e-commerce' || site.site_type == 'E-commerce'"
            ></i>
            <i
              class="fa-solid fa-briefcase"
              v-if="site.site_type == 'Business'"
            ></i>
            <i class="fa-solid fa-comments" v-if="site.site_type == 'Blog'"></i>
            <i
              class="fa-solid fa-calendar-check"
              v-if="site.site_type == 'Event'"
            ></i>
            <i
              class="fa-solid fa-id-card"
              v-if="site.site_type == 'Portfolio'"
            ></i>
          </div>
          <div class="info">
            <h6 class="name">{{ site.site_name }}</h6>
            <h6 class="description">{{ site.site_description }}</h6>
            <h6 class="type">{{ site.site_type }}</h6>
            <h6 class="status">{{ site.status_name }}</h6>
            <button>View more</button>
          </div>
        </div>
        </router-link>
        
      </div>
    </div>
    <sidebar />
  </div>
</template>
<script>
import sidebar from "@/components/Sidebar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    sidebar,
  },
  data() {
    return {
      client: JSON.parse(sessionStorage.getItem("loggedClient")),
    };
  },
  computed: {
    ...mapGetters(["sites"]),
  },
  methods: {
    ...mapActions(["fetchClientsSites"]),
  },
  created() {
    this.fetchClientsSites(this.client?.client_id);
  },
};
</script>
<style scoped>
.page {
  align-items: center;
  justify-content: center;
}
.btn,
.btn:active {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  background: none;
  border: none;
  scale: 1.5;
  z-index: 8;
}
.client-info {
  width: 90vw;
  height: 90vh;
  color: white;
  display: flex;
  align-items: center;
}
.left {
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border: none;
  border-right: 0.1rem solid white;
  padding-right: 4rem;
}

.left h4 {
  width: 100%;
  position: relative;
  height: 2rem;
}

.var {
  position: absolute;
  left: 0;
}

.val {
  position: absolute;
  right: 0;
}

.site {
  width: 30rem;
  height: 12rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  scale:0.6;
}
a {
    text-decoration: none;
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

.left > i {
    font-size: 8rem;
}
</style>
