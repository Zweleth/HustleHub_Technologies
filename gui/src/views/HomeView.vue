<template>
  <div class="page" id="home">
    <h4>aaaa</h4>
    <buildscroll/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import buildscroll from "@/components/BuildScroll.vue"
export default {
  name: "HomeView",
  components: {
    buildscroll,
  },
};
</script>
<style scoped>
#home {
  min-width: 100vw;
  height: 100vh;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
}


.btn-build {
  background: none;
  color: var(--txtColor);
  border: 0.15rem solid var(--txtColor);
  margin-top: 1rem;
  font-size: x-large;
  border-radius: 2rem;
}
.bg-hd {
  font-size: xxx-large;
}

.btn-build:hover {
  animation: glitch 0.4s linear forwards;
}

.bg-img {
  filter: invert(94%) sepia(5%) saturate(4347%) hue-rotate(314deg)
    brightness(92%) contrast(88%);
  z-index: +1;
}



@media screen and (max-width: 460px) {
  #home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro {
    margin: 0;
  }
  .bg-hd {
    font-size: 4rem;
    text-align: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .para {
    display: none;
  }
  button {
    display: none;
  }
}
</style>
