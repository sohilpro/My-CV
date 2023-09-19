<template>
  <div class="review__center center">
    <div class="review__stage stage" data-aos="animation-scale-y">What People Say</div>
    <h2
      class="review__title title h1"
      data-aos="animation-scale-y"
      data-aos-delay="200"
    >
      Trusted By <br />
      Trusted By <br />
      Clients.
    </h2>
    <div
      class="review__container"
      data-aos="animation-translate-y"
      data-aos-delay="400"
    >
      <Swiper
        class="swiper-cards"
        :width="240"
        :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
        :slides-per-view="1"
        :loop="true"
        :effect="'coverflow'"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(comment, idx) in comments" :key="idx">
          {{ comment }}
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <div class="review__bg">
    <div class="review__preview">
      <img
        class="review__pic js-parallax"
        data-scale="1.5"
        data-orientation="down"
        src="/img/content/review-cube.png"
        alt="..."
      />
    </div>
    <div class="review__preview">
      <img class="review__pic" src="/img/content/review-cube.png" alt="..." />
    </div>
  </div>
</template>
<script setup>
const comments = ref([
  "Soheil work is excellent with relatively high level clean coding 😍",
  "I carry out my projects with Soheil. He is very patient and tireless 😅",
  "I suggest you work with Soheil once, the decision is yours 😉",
  "Your work is excellent and user-friendly 💗",
]);
</script>
<style scoped>
.swiper-slide-active {
  transform: scale(1.2);
}
.swiper {
  margin-top: 120px;
}

@media (max-width: 992px) {
  .swiper {
    margin-top: 0;
  }
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 290px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  text-align: center;
  width: 350px;
  padding: 64px 44px 82px 64px;
  border-radius: 24px;
  background: #fff;
}
</style>
