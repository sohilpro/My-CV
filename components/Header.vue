<template>
  <Body :class="{'no-scroll': body}">
      <div class="main">
      <div class="header js-header" id="header">
        <div class="header__center center">
          <NuxtLink class="header__logo" to="/">
            <nuxt-img format="webp" class="header__pic" src="/img/man.png" alt="logo"/>
          </NuxtLink>
          <div class="header__social header__social_main">
            <a target="_blank" class="header__link" href="https://GitHub.com/sohilpro">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>GitHub</a>
            <a target="_blank" class="header__link" href="https://t.me/sohilpro">
              <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/></svg>Telegram</a></div>
          <button @click="showNav" class="header__burger js-header-burger" :class="{'active': body}"></button>
        </div>
        <div class="header__wrapper js-header-wrapper" :class="{'visible': body}">
          <div class="header__preview"><NuxtLink class="header__logo" to="/"><nuxt-img format="webp" class="header__pic" src="/img/man.png" alt=""/></NuxtLink>
            <div class="header__img"><nuxt-img format="webp" class="header__pic" src="/img/content/bg-header.png" alt=""/></div>
          </div>
          <div class="header__center center">
            <div class="header__contacts"><a class="header__line" href="mailto:sohil123@gmail.com">
                <div class="header__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" fill="none" viewBox="0 0 18 15">
                    <path fill-rule="evenodd" d="M2.422.267C1.244.267.289 1.222.289 2.4v9.956c0 1.178.955 2.133 2.133 2.133h12.8c1.178 0 2.133-.955 2.133-2.133V2.4c0-1.178-.955-2.133-2.133-2.133h-12.8zM1.711 2.4a.71.71 0 0 1 .711-.711h12.8a.71.71 0 0 1 .711.711v9.956a.71.71 0 0 1-.711.711h-12.8a.71.71 0 0 1-.711-.711V2.4zm2.636.919a.71.71 0 1 0-1.006 1.006l4.978 4.978a.71.71 0 0 0 1.006 0l4.978-4.978a.71.71 0 1 0-1.006-1.006L8.822 7.794 4.347 3.319zm1.422 5.689a.71.71 0 0 1 0 1.006l-1.422 1.422a.71.71 0 1 1-1.006-1.006l1.422-1.422a.71.71 0 0 1 1.006 0zm7.111 0a.71.71 0 1 0-1.006 1.006l1.422 1.422a.71.71 0 1 0 1.006-1.006l-1.422-1.422z" fill="#4c40f7"></path>
                  </svg>
                </div>
                <div class="header__text">sohil123dhh@gmail.com</div></a>
              <div class="header__line">
                <div class="header__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path fill-rule="evenodd" d="M9.273.85a.71.71 0 0 0-.901 0L.55 7.25a.71.71 0 0 0 .901 1.101l7.372-6.032 5.85 4.786a.71.71 0 1 0 .901-1.101L9.273.85zM3.845 9.222a.71.71 0 1 0-1.422 0v7.111a.71.71 0 0 0 .711.711h6.4a.71.71 0 1 0 0-1.422H3.845v-6.4zm9.932 0a2.04 2.04 0 0 0-2.11 2.008c.001.243.112.6.358 1.053.239.44.567.901.908 1.328l.867.996.867-.996c.341-.427.669-.887.908-1.328.246-.453.357-.81.358-1.053a2.04 2.04 0 0 0-2.11-2.008h-.047zm2.868 2.004h.711c0 .599-.245 1.21-.531 1.736-.294.542-.678 1.075-1.047 1.537l-1.018 1.163-.336.344-.096.095-.027.026-.007.007-.003.003-.491-.514-.491.514-.003-.003-.007-.007-.026-.026-.096-.095-.336-.344-1.017-1.163c-.37-.462-.753-.995-1.047-1.537-.286-.526-.531-1.138-.531-1.736v-.01c.012-.931.399-1.817 1.072-2.46.668-.637 1.561-.981 2.483-.957.922-.024 1.816.32 2.483.957.673.643 1.06 1.529 1.072 2.46l-.711.01zm-3.335 4.911c0 0 0 0 .491-.514l.491.514a.71.71 0 0 1-.982 0zm.491-4.07a.71.71 0 1 0 0-1.422.71.71 0 1 0 0 1.422z" fill="#4c40f7"></path>
                  </svg>
                </div>
                <div class="header__text"> 
                  <p>IRAN,SHIRAZ</p>
                  <p>Shiraz Shahr Raz</p>
                </div>
              </div><a class="header__line" href="tel:+989309517350">
                <div class="header__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                    <path fill-rule="evenodd" d="M6.689 2.978a.71.71 0 0 1 .711-.711h7.111a.71.71 0 0 1 .711.711v4.267a.71.71 0 0 1-.711.711H8.822a.71.71 0 0 0-.318.075l-1.815.908V2.978zM7.4.844c-1.178 0-2.133.955-2.133 2.133v7.111a.71.71 0 0 0 1.029.636L8.99 9.378h5.521c1.178 0 2.133-.955 2.133-2.133V2.978c0-1.178-.955-2.133-2.133-2.133H7.4zM2.422 2.267C1.244 2.267.289 3.222.289 4.4v11.378c0 1.178.955 2.133 2.133 2.133h7.822c1.178 0 2.133-.955 2.133-2.133V10.8a.71.71 0 1 0-1.422 0v4.978a.71.71 0 0 1-.711.711H2.422a.71.71 0 0 1-.711-.711V4.4a.71.71 0 0 1 .711-.711h1.422a.71.71 0 1 0 0-1.422H2.422z" fill="#4c40f7"></path>
                  </svg>
                </div>
                <div class="header__text">+98 930 951 7350 </div></a>
            </div>
            <nav class="header__nav">
              <NuxtLink :to="{ path: '/',hash:'#work'}" class="header__item" @click="showNav"><span>About</span></NuxtLink>
              <NuxtLink :to="{ path: '/',hash:'#projects'}" class="header__item" @click="showNav"><span>Work</span></NuxtLink>
              <NuxtLink :to="{ path: '/',hash:'#details'}" class="header__item" @click="showNav"><span>Services</span></NuxtLink>
              <NuxtLink :to="{ path: '/',hash:'#contact'}" class="header__item" @click="showNav"><span>Contact</span></NuxtLink>
            </nav>
            <div class="header__social header__social_inner">
              <a target="_blank" class="header__link" href="https://github.com/sohilpro">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
              GitHub
            </a>
              <a target="_blank" class="header__link" href="https://t.me/sohilpro">
                  <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/></svg>
                  Telegram
                </a>
            </div>
          </div>
        </div>
      </div>
      <div class="main__bg"><nuxt-img format="webp" class="main__pic" src="/img/content/bg-main.jpg" alt=""/></div>
      <div class="main__center center">
        <div class="main__wrap">
          <div class="main__stage stage" data-aos="transform">soheil khabbaz</div>
          <h1 class="main__title title h1"><span data-aos="transform" data-aos-delay="150">Hello, my</span><span data-aos="transform" data-aos-delay="300">name's Soheil.</span><span data-aos="transform" data-aos-delay="450">I'm a Web</span><span data-aos="transform" data-aos-delay="600">Developer.</span></h1>
          <NuxtLink :to="{ path: '/',hash:'#details'}" class="scroll js-scroll" data-aos="transform">
            <div class="scroll__icon"><img class="scroll__pic" src="/img/scroll.svg" alt="..."/></div>
            <div class="scroll__text">Scroll Next Section</div>
          </NuxtLink>
        </div>
      </div>
      <div class="main__view" data-aos>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic" src="/img/content/main-pic-6.png" alt="" /></div>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic js-parallax" data-scale="2.5" data-orientation="up" src="/img/content/main-pic-1.png" alt="" /></div>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic js-parallax" data-scale="1.5" data-orientation="up" src="/img/content/main-pic-2.png" alt="" /></div>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic" src="/img/content/main-pic-3.png" alt="" /></div>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic" src="/img/content/main-pic-4.png" alt="" /></div>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic js-parallax" data-scale="4.5" data-orientation="up" src="/img/content/main-pic-5.png" alt="" /></div>
        <div class="main__preview"><nuxt-img format="webp" class="main__pic js-parallax" data-scale="1.5" data-orientation="down" src="/img/content/main-pic-7.png" alt="" /></div>
      </div>
      <div class="main__figures">
        <div class="main__figure" data-aos="animation-translate-y"><nuxt-img format="webp" class="main__pic js-parallax" data-scale="2.2" data-orientation="down" src="/img/content/figure-1.png" alt="..." /></div>
        <div class="main__figure" data-aos="animation-translate-y" data-aos-delay="200"><nuxt-img format="webp" class="main__pic js-parallax" data-scale="2.2" data-orientation="up" src="/img/content/figure-2.png" alt="..." /></div>
        <div class="main__figure" data-aos="animation-translate-y" data-aos-delay="400"><nuxt-img format="webp" class="main__pic" src="/img/content/figure-3.png" alt="..." /></div>
      </div>
    </div>
  </Body>
</template>

<script setup>
const body = ref(false)

function showNav() {
  body.value = !body.value
}
</script>