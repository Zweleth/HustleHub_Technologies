<template lang="">
  <div class="build-text">
    <h5>Host your hustle</h5>
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
    <router-link to="/signin"
      ><button class="btn-startbuild">Build</button></router-link
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
  align-self: center;
  justify-self: center;
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
  height: 5rem;
  color: aqua;
}

.right-word {
  color: pink;
}
a {
  margin-bottom: 3rem;
  margin-top: 0;
}
.left-scroll {
  text-align: right;
  animation: scroll 12s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
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

.btn-startbuild {
  background: none;
  color: var(--txtColor);
  border: 0.15rem solid var(--txtColor);
  margin-top: 1rem;
  font-size: xx-large;
  border-radius: 2rem;
  margin: 2rem;
}

.btn-startbuild:hover {
  animation: glitch 0.4s linear forwards;
}

@keyframes scroll {
  0% {
    transform: translateY();
  }
  2% {
    transform: translateY();
  }
  10% {
    transform: translateY(-48rem);
  }
  12% {
    transform: translateY(-48rem);
  }
  20% {
    transform: translateY(-6rem);
  }
  22% {
    transform: translateY(-6rem);
  }
  30% {
    transform: translateY(-30rem);
  }

  32% {
    transform: translateY(-30rem);
  }
  40% {
    transform: translateY(0.001rem);
  }
  42% {
    transform: translateY();
  }
  
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


</style>
