<template lang="">
  <footer>
    <div class="initials">
      <div class="footerimg"></div>
      <div class="text pb-3 ps-2" style="background-color: rgba(0, 0, 0, 0.2)">
        Copyright @2023 All rights reserved| Made by
        <strong>
          <a target="_blank" href="https://hustle-hub.netlify.app/"
            >HustleHub Technologies</a
          >
        </strong>
      </div>
    </div>
    <div class="footer-links">
      <a href="https://www.facebook.com/thandolwethu.beko.9" target="_blank"
        ><i class="fa-brands fa-facebook-f"></i
      ></a>
      <a href="https://twitter.com/" target="_blank"
        ><i class="fa-brands fa-twitter"></i
      ></a>
      <a href="https://za.linkedin.com/" target="_blank"
        ><i class="fa-brands fa-linkedin-in"></i
      ></a>
      <a href="https://www.instagram.com/" target="_blank"
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
footer {
  position: fixed;
  bottom: -0.8rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  color: white;
  height: fit-content;
  padding-bottom: 0;
}

footer a{
    text-decoration: none;
    color: white;
}
.footerimg {
  background-image: url(https://i.postimg.cc/PxzWL18Y/Group-2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 3rem;
  height: 1.2rem;
  bottom: 1rem;
  position: fixed;
  margin-bottom: 1rem;
  scale: 1.5;
  left: 1.5rem;
}

.initials {
  display: flex;
  flex-direction: column;
}

.footer-links {
  display: flex;
  gap: 0.7rem;
  margin-right: 2rem;
}

.footer-links i {
  scale: 1.1;
}

.footer-links i:hover {
  scale: 1.3;
  animation: none;
  animation: iconAqua 1s ease-in-out forwards;
}

.fa-facebook-f {
  animation: iconsPop 2s ease-in-out infinite;
}
.fa-twitter {
  animation: iconsPop 2s 0.3s ease-in-out infinite;
}
.fa-linkedin-in {
  animation: iconsPop 2s 0.6s ease-in-out infinite;
}
.fa-instagram {
  animation: iconsPop 2s 0.9s ease-in-out infinite;
}

@keyframes iconsPop {
  0% {
    scale: 0.8;
  }
  50% {
    scale: 1.5;
  }
  100% {
    scale: 0.8;
  }
}
</style>
