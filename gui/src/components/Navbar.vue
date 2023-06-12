<template lang="">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="https://i.postimg.cc/PxzWL18Y/Group-2.png" alt="" v-if="this.is_logged?.status != true" />
        <h6 v-if="this.is_logged?.status != true">Hustle<span>Hub</span></h6></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" v-if="this.is_logged?.status != true">Home</router-link>
          <router-link to="/sites" v-if="this.is_logged?.status != true">Sites</router-link>
          <router-link to="/admin" v-if="loggedClient?.is_admin === 'true'"
            >Admin</router-link
          >
          <!-- <router-link to="/myaccount" v-if="this.is_logged?.status === true"
            >Dashboard</router-link
          > -->
          <router-link to="/build" v-if="this.is_logged?.status != true">Build site</router-link>
          <router-link to="/signin" v-if="this.is_logged?.status != true">Sign in</router-link>
          <router-link to="/signup" v-if="this.is_logged?.status != true">Sign up</router-link>
          <router-link to="/about" v-if="this.is_logged?.status != true">About us</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
    }
  },
  computed: {
    loggedClient() {
      return this.$store.state.loggedClient;
    },
    logged() {
      return localStorage.getItem('logged')
    },
    is_logged() {
      return this.$store.state.is_logged
    }
  },
};
</script>
<style scoped>
nav {
  position: absolute;
  width: 100vw;
  color: rgba(255, 255, 255, 0.5);
  background-color: none;
  z-index: +5;
}
.navbar-nav {
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 5rem;
}
.navbar-brand {
  display: flex;
  place-items: center;
  gap: 0.5rem;
}

.navbar-brand h6 {
  font-size: larger;
  color: var(--aqua);
}

.navbar-brand h6 span {
  color: var(--pink);
}
.navbar-brand img {
  height: 3rem;
}
nav a {
  color: var(--txtColor);
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: var(--aqua);
}
</style>
