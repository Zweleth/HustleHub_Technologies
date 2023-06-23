<template>
  <div class="page" id="home">
    <div class="intro">
      <h5 class="bg-hd">
        <span class="aqua">Host</span> your <span class="pink">hustle</span>
      </h5>
      <h5 class="para">
        Want to take your small business to the next level online presence is
        the answer<br />
        let us help you build a website for your business
      </h5>
      <button class="btn-build">Build</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 255, 255, 0.5)
    ),
    url(https://i.postimg.cc/Dz6WjRNJ/wallpaperflare-com-wallpaper-2.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  place-items: center;
}

.intro {
  color: var(--txtColor);
  justify-self: left;
  margin-left: 8rem;
  text-align: left;
  z-index: +1;
  overflow: visible;
}

.btn-build {
  background: none;
  color: var(--txtColor);
  border: 0.15rem solid var(--txtColor);
  margin-top: 1rem;
  padding: 0.2rem 1.5rem;
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

@keyframes glitch {
  0% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
  9% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
  10% {
    border-color: var(--aqua);
    color: var(--aqua);
    transform: translateX(-0.5rem) translateY(0.5rem);
  }
  19% {
    border-color: var(--aqua);
    color: var(--aqua);
    transform: translateX(-0.5rem) translateY(0.5rem);
  }
  20% {
    border-color: var(--pink);
    color: var(--pink);
    transform: translateX(0.5rem) translateY(-0.5rem);
  }
  29% {
    border-color: var(--pink);
    color: var(--pink);
    transform: translateX(0.5rem) translateY(-0.5rem);
  }
  30% {
    border-color: var(--aqua);
    color: var(--aqua);
    transform: translateX(0.5rem) translateY(0.5rem);
  }
  39% {
    border-color: var(--aqua);
    color: var(--aqua);
    transform: translateX(0.5rem) translateY(0.5rem);
  }
  40% {
    border-color: var(--pink);
    color: var(--pink);
    transform: translateX(0.5rem) translateY(-0.5rem);
  }
  49% {
    border-color: var(--pink);
    color: var(--pink);
    transform: translateX(0.5rem) translateY(-0.5rem);
  }
  50% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
  59% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
  60% {
    border-color: var(--pink);
    color: var(--pink);
    transform: translateX(0.5rem) translateY(-0.5rem);
  }
  69% {
    border-color: var(--pink);
    color: var(--pink);
    transform: translateX(0.5rem) translateY(-0.5rem);
  }
  70% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
  79% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
  80% {
    border-color: var(--aqua);
    color: var(--aqua);
    transform: translateX(-0.5rem) translateY(0.5rem);
  }
  99% {
    border-color: var(--aqua);
    color: var(--aqua);
    transform: translateX(-0.5rem) translateY(0.5rem);
  }
  100% {
    border-color: var(--txtColor);
    color: var(--txtColor);
    transform: translateX() translateY();
  }
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
