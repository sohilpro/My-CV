<template>
  <div class="footer__center center">
    <div class="footer__body">
      <div class="footer__wrap">
        <div class="footer__title h1">
          Try your luck with me once and for all. 😉
        </div>
        <div class="footer__info h4">Start now. What are you waiting for ?</div>
      </div>
      <div class="footer__menu">
         <NuxtLink :to="{ path: '/',hash:'#work'}" class="footer__link">About Me</NuxtLink>
         <NuxtLink :to="{ path: '/',hash:'#cases'}" class="footer__link">Projects</NuxtLink>
        <NuxtLink :to="{ path: '/',hash:'#contact'}" class="footer__link">Contact</NuxtLink>
        <a target="_blank" class="footer__link" href="https://t.me/sohilpro"
          >Telegram</a
        >
        <a
          target="_blank"
          class="footer__link"
          href="https://instagram.com/sohil._.pro"
          >Instagram</a
        >
      </div>
    </div>
    <div class="footer__bottom">
      <div id="copyRight" class="footer__copyright">
        © {{ date }} ,
        <a target="_blank" href="https://t.me/sohil_dev" class="footer__link">@Sohil_Dev</a>
      </div>
      <NuxtLink :to="{ path: '/' , hash: '#header'}" class="footer__scroll js-scroll">Back to top</NuxtLink>
    </div>
  </div>
  <div class="footer__bg">
    <div class="footer__preview">
      <nuxt-img
        format="webp"
        class="footer__pic js-parallax"
        data-scale="1.5"
        data-orientation="down"
        src="/img/content/footer-cube-1.png"
        alt=""
      />
    </div>
    <div class="footer__preview">
      <nuxt-img
        format="webp"
        class="footer__pic js-parallax"
        data-scale="1.8"
        data-orientation="up"
        src="/img/content/footer-cube-1.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const date = new Date().getFullYear();
</script>
