<template lang="">
  <div class="build-text" v-if="sites == null">
    <h5>Start building your site now</h5>
    <div class="word-scroll">
      <div class="left-word">
        <div class="left-scroll">
          <h5>E-commerce</h5>
          <h5>Business</h5>
          <h5>Blog</h5>
          <h5>Portfolio</h5>
          <h5>Event</h5>
          <h5>Personal</h5>
          <h5>Membership</h5>
          <h5>Nonprofit</h5>
          <h5>Informational</h5>
          <h5>online forum</h5>
        </div>
      </div>
      <div class="right-word">
        <div class="right-scroll">
          <h5>website</h5>
        </div>
      </div>
    </div>
    <router-link to="/build-info"
      ><button class="btn-startbuild">Build my site</button></router-link
    >
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "buildscroll",
  methods: {
    ...mapGetters(["sites"])
  }
};
</script>
<style scoped>
.build-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.build-text > h5 {
  font-size: xxx-large;
}
.word-scroll {
  display: flex;
}
.word-scroll h5 {
  font-size: 5rem;
}
.left-word {
  position: relative;
  height: 6rem;
  color: aqua;
}

.right-word {
  color: pink;
}
.left-scroll {
  text-align: right;
  animation: scroll 6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  animation-delay: 10s;
}

button {
  font-size: 2.5rem;
  border: none;
  background: none;
  border: 0.15rem solid white;
  border-radius: 0.5rem;
  margin-top: 1rem;
  color: white;
  padding: 0 1rem;
}
@keyframes scroll {
  0% {
    transform: translateY();
  }
  5% {
    transform: translateY();
  }
  25% {
    transform: translateY(-48rem);
  }
  30% {
    transform: translateY(-48rem);
  }
  50% {
    transform: translateY(-6rem);
  }
  55% {
    transform: translateY(-6rem);
  }
  65% {
    transform: translateY(-30rem);
  }

  70% {
    transform: translateY(-30rem);
  }
  90% {
    transform: translateY();
  }
  100% {
    transform: translateY();
  }
}
</style>
