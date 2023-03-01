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
          <a class="footer__link" href="#work">About Me</a
          ><a class="footer__link" href="#cases">Projects</a
          ><a class="footer__link" href="#contact">Contact</a
          ><a class="footer__link" href="https://t.me/sohilpro">Telegram</a
          ><a class="footer__link" href="https://instagram.com/sohil._.pro"
            >Instagram</a
          >
        </div>
      </div>
      <div class="footer__bottom">
        <div id="copyRight" class="footer__copyright">© {{ date }} , <a href="https://t.me/sohil_dev" class="footer__link">@Sohil_Dev</a></div>
        <a class="footer__scroll js-scroll" href="#">Back to top</a>
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