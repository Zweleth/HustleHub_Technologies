<template lang="">
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="icon">
        <i class="fa-solid fa-user"></i>
        <h6>{{ this.name }}</h6>
      </div>
      <div class="sidebar">
        <ul class="link_list">
          <li v-if="this.loggedClient?.is_admin == 'true'"><router-link to="/allsites"><i class="fa-solid fa-globe" ></i> Sites</router-link></li>
          <li v-if="this.loggedClient?.is_admin == 'true'"><router-link to="/clients"><i class="fa-solid fa-users" ></i> Clients</router-link></li>
          <li v-if="this.loggedClient?.is_admin == 'false'"><router-link to="/mysites"><i class="fa-solid fa-globe"></i> My sites</router-link></li>
          <li v-if="this.loggedClient?.is_admin == 'false'"><router-link to="/account" @click.prevent="setSite(null)"><i class="fa-solid fa-user"></i> My account</router-link></li>
          <li v-if="this.loggedClient?.is_admin == 'false' && sites == null"><router-link to="/build-info" @click.prevent="setSite(null)"><i class="fa-solid fa-square-plus"></i> Create a site</router-link></li>
        </ul>
      </div>
      <div class="logout">
        <button
          @click="
            signOut();
            toHome();
          "
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Log out
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "sidebar",
  computed: {
    name() {
      return `${
        JSON.parse(sessionStorage.getItem("loggedClient")).first_name
      } ${JSON.parse(sessionStorage.getItem("loggedClient")).last_name}`;
    },
    loggedClient() {
      return JSON.parse(sessionStorage.getItem("loggedClient"));
    },
    ...mapGetters(["sites"])
  },
  methods: {
    ...mapActions(["signOut","fetchClientsSites"]),
    ...mapMutations(["setSite"]),
    toHome() {
      this.$router.push({ name: "home" });
    }
  },
  created() {
    this.fetchClientsSites(JSON.parse(sessionStorage.getItem("loggedClient"))?.client_id);
  }
};
</script>
<style scoped>
.offcanvas {
  background-color: rgba(0, 0, 0, 0.8);
}
.offcanvas-body {
  position: relative;
}

.btn,
.btn:active {
  position: absolute;
  top: 4rem;
  left: 0.5rem;
  background: none;
  border: none;
  scale: 1.5;
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
.sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  position: relative;
}

.sidebar a {
  margin-left: auto;
  border: none;
  background: none;
  color: white;
  position: absolute;
  right: 0;
  text-decoration: none;
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
