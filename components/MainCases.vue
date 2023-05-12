<template>
  <div class="cases__center center" id="projects">
    <div class="cases__stage stage" data-aos="animation-scale-y">Projects</div>
    <h2
      class="cases__title h1"
      data-aos="animation-scale-y"
      data-aos-delay="150"
    >
      Look at My <br />Work.
    </h2>
    <div class="cases__nav" data-aos="animation-scale-y" data-aos-delay="300">
      <a class="cases__link active" href="#">Website</a>
    </div>
    <div
      class="cases__list js-owl"
      data-items-mobile-portrait="1"
      data-items-mobile-album="1"
      data-autoheight
    >
      <NuxtLink
        class="cases__item"
        data-aos="animation-translate-y"
        data-aos-delay=""
        to="/"
      >
        <div class="cases__preview">
          <img class="cases__pic" src="/img/content/soheil-p1.jpg" alt="..." />
          <div class="cases__box">Show <br />work</div>
        </div>
        <div class="cases__body">
          <h4 class="cases__info h4">My CV</h4>
          <h5 class="cases__text">VueJS , NuxtJS</h5>
          <h5 class="cases__text">GitHub Repo , Coded Template</h5>
        </div></NuxtLink>
      <a
        class="cases__item"
        data-aos="animation-translate-y"
        data-aos-delay=""
        target="_blank"
        href="https://github.com/sohilpro/clothing-store"
      >
        <div class="cases__preview">
          <img class="cases__pic" src="/img/content/soheil-p2.jpg" alt="..." />
          <div class="cases__box">Show <br />work</div>
        </div>
        <div class="cases__body">
          <h4 class="cases__info h4">Clothing Store</h4>
          <h5 class="cases__text">VueJS , Vuetify</h5>
          <h5 class="cases__text">GitHub Repo , Coded Template</h5>
        </div>
      </a>
      <a
        class="cases__item"
        data-aos="animation-translate-y"
        data-aos-delay=""
        target="_blank"
        href="https://pet-shop.iran.liara.run"
      >
        <div class="cases__preview">
          <img class="cases__pic" src="/img/content/soheil-p3.jpg" alt="..." />
          <div class="cases__box">Show <br />work</div>
        </div>
        <div class="cases__body">
          <h4 class="cases__info h4">Pet Shop</h4>
          <h5 class="cases__text">VueJS , NuxtJS</h5>
          <h5 class="cases__text">GitHub Repo , Coded Template</h5>
        </div>
      </a>
    </div>
  </div>
  <div class="cases__figures">
    <div class="cases__figure">
      <img
        class="cases__pic js-parallax"
        data-scale="2"
        data-orientation="down"
        src="/img/content/figure-2.png"
        alt="..."
      />
    </div>
    <div class="cases__figure">
      <img
        class="cases__pic js-parallax"
        data-scale="1.8"
        data-orientation="down"
        src="/img/content/figure-3.png"
        alt="..."
      />
    </div>
  </div>
</template>
