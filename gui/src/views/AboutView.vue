<template lang="">
  <div class="page" id="about">
    <div class="info">
      <div class="info-icon">
        <img src="https://i.postimg.cc/PxzWL18Y/Group-2.png" alt="" />
      </div>
      <div class="info-text right">
        <p>
          HustleHub Technologies stands as a premier web designing company
          dedicated to serving the unique needs of local businesses. With a
          profound understanding of the challenges faced by enterprises
          operating within their communities, our team is committed to
          delivering exceptional digital solutions tailored specifically to
          their requirements. By leveraging our expertise in web design, we
          empower local businesses to establish a prominent online presence,
          enhance their brand visibility, and effectively engage with their
          target audience. With a focus on innovation, reliability, and customer
          satisfaction, HustleHub Technologies strives to propel the growth and
          success of local businesses through cutting-edge web design strategies
          and unparalleled support.
        </p>
      </div>
    </div>
    <div class="info">
      <div class="info-text left">
        <p>
          As a proud local enterprise, we are based in the vibrant community of
          Khayelitsha. We understand the significance of supporting and
          nurturing businesses within our own neighborhood. Being deeply rooted
          in Khayelitsha enables us to closely connect with the local market,
          grasp its unique dynamics, and effectively cater to the needs of our
          fellow community members.
        </p>
      </div>
      <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
    </div>
    <div class="info">
      <div class="info-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
      <div class="info-text right">
        <p>
          Our primary objective is to streamline the operations of local
          businesses and enhance the overall convenience for both business
          owners and their valued clients. By leveraging our expertise and
          innovative solutions, we aim to simplify various aspects of business
          management and customer interactions. Our unwavering commitment to
          this goal is driven by the desire to empower local businesses,
          enabling them to provide seamless experiences and build strong
          relationships with their clientele. Through our efforts, we strive to
          create an ecosystem where businesses can thrive while delivering
          enhanced satisfaction and ease of access to their customers.
        </p>
      </div>
    </div>
    <div class="info">
      <div class="info-text left">
        <p>
          Our team comprises a talented group of highly creative developers.
          With a passion for innovation and a deep understanding of cutting-edge
          technologies, our developers possess the expertise and skills
          necessary to bring unique and captivating ideas to life. Their
          unwavering commitment to craftsmanship and attention to detail ensures
          the development of high-quality, user-centric products and
          experiences. By harnessing their creativity, technical proficiency,
          and dedication, our team continually strives to deliver outstanding
          results that make a lasting impact.
        </p>
      </div>
      <div class="info-icon"><i class="fa-solid fa-users"></i></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#about {
  flex-direction: column;
  gap: 3rem;
  padding: 10rem 2rem 10rem 0 ;
  overflow-y: scroll;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
}
.info-text {
  color: white;
  width: 75vw;
  padding: 2rem 0;
}
.right {
  border-left: 0.1rem solid white;
  padding-left: 3rem;
  margin-left: 3rem;
}

.left {
  border-right: 0.1rem solid white;
  padding-right: 3rem;
  margin-right: 3rem;
}

.info-icon {
  min-width: 10vw;
  height: 100%;
  display: grid;
  place-items: center;
}
.info-icon i {
  scale: 6;
}
</style>
