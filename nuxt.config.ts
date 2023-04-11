// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "sohil-pro",
      meta: [
        { name: "theme-color", content: "#cf5151" },
        { name: "robots", content: "max-image-preview:large" },
        {
          name: "description",
          content:
            "The personal website of soheil pro, a software engineer and website designer, making all kinds of websites",
        },
        {
          name: "keywords",
          content:
            "personal website,soheil pro,website designer,making websites,software engineer",
        },
        { name: "subject", content: "Web Design" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "soheil pro" },
        {
          name: "googlebot",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          name: "bingbot",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          property: "og:locale",
          content: "en",
        },
        {
          name: "og:description",
          content:
            "The personal website of soheil pro, a software engineer and website designer, making all kinds of websites",
        },
        {
          name: "DC:description",
          content:
            "The personal website of soheil pro, a software engineer and website designer, making all kinds of websites",
        },
        {
          name: "DC:keywords",
          content:
            "The personal website of soheil pro, a software engineer and website designer, making all kinds of websites",
        },
        {
          property: "og:title",
          content: "personal website of soheil pro",
        },
        {
          property: "DC:title",
          content: "personal website of soheil pro",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: "assets/img/111.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://sohil-pro.ir/",
        },
        {
          rel: "icon",
          href: "/img/man.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          rel: "icon",
          href: "/img/man.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          rel: "shortcut icon",
          href: "/img/man.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          rel: "shortcut icon",
          href: "/img/man.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          rel: "apple-touch-icon",
          href: "/img/man.png",
        },
      ],
      script: [
        {
          children:
            'let name = [ "⁮⁮", "S", "⁮⁮", "⁮⁮", "o", "⁮⁮", "h", "⁮⁮", "e", "⁮⁮", "i", "⁮⁮", "l", "⁮⁮", "_", "", "P", "⁮⁮", "r", "⁮⁮", "o", "⁮⁮", "⁮⁮", ]; let under = "⁮⁮"; let count = 0; let count2 = 0; let full = ["_"]; const interval = setInterval(() => { full.length--; full.push(name[count]); if (count2 % 2) { full.push("."); } else { full.push(""); } document.title = full.join(""); if (count == name.length) { count = 0; full = ["_"]; } if (count2 == name.length) { count2 = 0; } count++; count2++; }, 250);',
        },
        {
          children:
            'function isTouchDevice() { let prefixes = " -webkit- -moz- -o- -ms- ".split(" "); let mq = function mq(query) { return window.matchMedia(query).matches; }; if ( "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) ) { return true; } let query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(""); return mq(query); }',
        },
        {
          children:
            "let viewportmeta = document.querySelector('meta[name=\"viewport\"]'); if (viewportmeta) { if (screen.width < 375) { let newScale = screen.width / 375; viewportmeta.content = 'width=375, minimum-scale=' + newScale + ', maximum-scale=1.0, user-scalable=no, initial-scale=' + newScale + ''; } else { viewportmeta.content = 'width=device-width, maximum-scale=1.0, initial-scale=1.0'; } }",
        },
        {},
        {
          children:
            "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-NYPRWQJEFF');",
        },
      ],
    },
  },
  css: ["~/assets/css/app.css"],
  plugins: [{ src: "~/plugins/aos", ssr: false, mode: "client" }],
  modules: ["nuxt-swiper"],
});
