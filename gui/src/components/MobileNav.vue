<template lang="">
  <div class="mobile-nav">
    <ul class="link_list">
      <li v-if="this.loggedClient == null">
        <router-link to="/"
          ><i class="fa-solid fa-house"></i>
          <p>Home</p>
        </router-link>
      </li>
      <li v-if="this.loggedClient == null">
        <router-link to="/signup"
          ><i class="fa-solid fa-user-plus"></i>
          <p>Sign up</p>
        </router-link>
      </li>
      <li v-if="this.loggedClient == null">
        <router-link to="/signin"
          ><i class="fa-solid fa-arrow-right-to-bracket"></i>
          <p>Sign in</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
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
  },
};
</script>
<style scoped>
@media screen and (max-width: 480px) {
  .mobile-nav {
    position: fixed;
    bottom: 0;
    background-color: #222;
    width: 100vw;
    height: 5rem;
    z-index: +5;
    display: grid;
    place-items: center;
  }
  .link_list {
    display: flex;
    width: 100%;
    color: white;
    gap: 2rem;
  }

  .link_list li a {
    display: flex;
    flex-direction: column;
    color: white;
    text-decoration: none;
  }

  .link_list li a i {
    font-size: 2.2rem;
  }
  .link_list li a p {
    font-size: 0.8rem;
  }

  .link_list li {
    margin: auto;
  }
}
</style>
