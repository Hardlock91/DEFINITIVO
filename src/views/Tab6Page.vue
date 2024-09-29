<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar></ion-toolbar>
        </ion-header>
  
        <ExploreContainer name="Tab 6page" />
        
        <IonTitle>
          <h1>Section of Article</h1>
        </IonTitle>  
  
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </swiper-slide>
        </swiper>
        
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  // Importaciones de Ionic y otros componentes
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  // Import required modules
  import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
  // Setup para exportar iconos y módulos
  const modules = [EffectCoverflow, Navigation, Pagination];
  </script>
  
  <style>
  #app {
    height: 100%;
  }
  
  html,
  body {
    position: relative;
    height: 100%;
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .swiper {
    width: 100%;
    height: 300px; /* Altura del Swiper */
    position: relative;
    display: center;
    justify-content: center;
    align-items: center;
    
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex; /* Permite centrar el contenido */
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen para cubrir el área del slide */
    object-position: center; /* Centra la imagen en el slide */
  }
  
  ion-card {
    height: calc((100% - 30px) / 2) !important; /* Controla la altura de los cards */
  }
  </style>
  