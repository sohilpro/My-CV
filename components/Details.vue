<template>
        <div class="details" id="details">
        <div class="details__center center">
          <div class="details__head" data-aos="animation-scale-y">
            <div class="details__stage stage">What I Do</div>
            <h3 class="details__info h3">If you want to cooperate with <br>me in your projects,<br> I will be happy to do it well.</h3>
          </div>
          <h2 class="details__title" data-aos="animation-scale-y">Think. Make. <br>Solve. </h2>
          <div class="details__btn" data-aos="animation-translate-y">
            <NuxtLink :to="{ path: '/',hash:'#contact'}" class="btn btn_purple"><span class="btn__text">Contact Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none" viewBox="0 0 22 16">
                <path fill-rule="evenodd" d="M14.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L18.586 7H1a1 1 0 1 0 0 2h17.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7c.183-.183.28-.419.292-.659L22 8m-.076-.383c-.049-.118-.121-.228-.217-.324l-7-7m7.217 7.324c.048.115.075.241.076.374z" fill="#fff"></path>
              </svg>
            </NuxtLink>
          </div>
           <div class="review">
            <div class="review__center center">
              <div class="review__stage stage" data-aos="animation-scale-y"></div>
              <h2 class="review__title title h1" data-aos="animation-scale-y" data-aos-delay="200">My<br>Skills.</h2>
            </div>
            <ClientOnly>
              <Bar
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
            />
            </ClientOnly>
            <div class="review__bg">
              <div class="review__preview"><nuxt-img format="webp" class="review__pic js-parallax" data-scale="1.5" data-orientation="down" src="/img/content/review-cube.png" alt="" /></div>
              <div class="review__preview"><nuxt-img format="webp" class="review__pic" src="/img/content/review-cube.png" alt=""/></div>
            </div>
          </div>
        </div>
        <div class="details__figures">
          <div class="details__figure"><nuxt-img format="webp" class="details__pic js-parallax" data-scale="2" data-orientation="down" src="/img/content/figure-1.png" alt="" /></div>
          <div class="details__figure"><nuxt-img format="webp" class="details__pic js-parallax" data-scale="2" data-orientation="up" src="/img/content/figure-2.png" alt="" /></div>
          <div class="details__figure"><nuxt-img format="webp" class="details__pic js-parallax" data-scale="1.2" data-orientation="up" src="/img/content/figure-3.png" alt="" /></div>
        </div>
        <NuxtLink :to="{ path: '/',hash:'#contact'}" class="details__contact">Contact me</NuxtLink>
      </div>
</template>

<script setup>
import {Bar} from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
        labels: [
        "Html",
        "Css",
        "JavaScript",
        "Bootstrap",
        "TailwindCss",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "nest.js",
        "express.js",
        ],
        datasets: [ { 
          label: 'My Skills',
          data: [100, 99, 85, 95, 95,80,85,70,50,60],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(121, 200, 217,0.2)",
            "rgba(1, 254, 12,0.1)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(153, 102, 255)",
            "rgb(121, 200, 217)",
            "rgb(75, 192, 192)",
            "rgb(75, 192, 192)",
            "rgb(255, 159, 64)",
            "rgb(255, 99, 132)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
         } 
        ],
});
const chartOptions = ref({
        responsive: true
})
</script>