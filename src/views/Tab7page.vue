<template>
  <ion-page>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <ion-header class="bg-paua-500 text-white">
    
    </ion-header>

    <ion-content >
      <ion-header collapse="condense">
        <ion-toolbar class="bg-paua-300">
          <ion-title size="large" class="text-white">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="app" class="flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-md rounded-lg overflow-hidden w-2/3 max-w-4xl">
          <swiper :slides-per-view="1" space-between="10" class="p-8">
            <swiper-slide>
              <img src="/src/imagenes/mouselog.jpg" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 200px; height: 400px; display: block; margin: 0 auto;" />
            </swiper-slide>
            <swiper-slide>
              <img src="/src/imagenes/mouselog.jpg" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 200px; height: 400px; display: block; margin: 0 auto;" />
            </swiper-slide>
          </swiper>
          <div class="p-8 text-center bg-paua-100">
            <h2 class="text-2xl font-semibold text-paua-600">Mouse Gamer</h2>
            <p class="text-gray-500 text-lg">us:180</p>
          </div>
          <div class="p-8 text-center">
            <button @click="addToCart" class="bg-paua-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-paua-600">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { heart, helpCircle, home, storefront } from 'ionicons/icons';

// Definir el método addToCart
const addToCart = () => {
  console.log("Producto agregado al carrito");
  // Aquí puedes agregar la lógica para agregar el producto al carrito
};

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
    height: calc((60% - 30px) / 2) !important;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  
  </style>
  