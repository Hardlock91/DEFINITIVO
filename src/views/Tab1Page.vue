<template>
  <ion-page>
    <ion-header class="bg-shakespeare-500 text-white">
      <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="end">
          <ion-button href="/tabs/tab1">Inicio</ion-button>
          <ion-button href="/tabs/tab2">Producto</ion-button>
          <ion-button href="/tabs/tab3">Favorito</ion-button>
          <ion-button href="/tabs/tab4">Carrito</ion-button>
          <ion-button href="/tabs/tab5">Ayuda</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar value="Value"></ion-searchbar>

      <!-- Caja del Swiper -->
      <div class="swiper-box">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img src="" alt="Slide 1" />
          </swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
        </swiper>
      </div>
    


    
          <ion-grid>
            <ion-row>
              <!-- Card 1 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Prime Video" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Texto</h2>
                    <p class="text-gray-500">Txto</p>
                  </div>
                </div>
              </ion-col>

              <!-- Card 2 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <div class="p-4 grid grid-cols-2 gap-4">
                    <img src="https://via.placeholder.com/150" alt="Women's fashion" class="w-full h-24 object-cover rounded-md" />
                    <img src="https://via.placeholder.com/150" alt="Men's fashion" class="w-full h-24 object-cover rounded-md" />
                    <img src="https://via.placeholder.com/150" alt="Beauty" class="w-full h-24 object-cover rounded-md" />
                    <img src="https://via.placeholder.com/150" alt="Home" class="w-full h-24 object-cover rounded-md" />
                  </div>
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                    <p class="text-gray-500">TEXTO</p>
                  </div>
                </div>
              </ion-col>

              <!-- Card 3 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Best Sellers" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                    <p class="text-blue-500">TEXTO</p>
                  </div>
                </div>
              </ion-col>

              <!-- Card 4 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Amazon exclusive toys" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                    <p class="text-blue-500">TEXTO</p>
                  </div>
                </div>
              </ion-col>

              <!-- Card 5 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Small space solutions" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                  </div>
                </div>
              </ion-col>

              <!-- Card 6 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Pre-owned devices" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                  </div>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
  




  </ion-page>
</template>




























<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonSearchbar } from '@ionic/vue';

import ExploreContainer from '@/components/ExploreContainer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const modules = [Navigation];

</script>












<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-box {
  background-color: #fff; /* Fondo blanco para la caja */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
  padding: 16px; /* Espaciado interno */
  margin: 16px; /* Margen alrededor de la caja */
  position: relative; /* Necesario para posicionar elementos dentro de la caja */
}

.swiper {
  width: 100%;
  height: 200px; /* Altura del Swiper */
  position: sticky; /* Mantiene el Swiper "fijo" dentro de su contenedor */
  top: 0; /* Mantén el Swiper en la parte superior */
  z-index: 10; /* Asegura que el Swiper esté por encima de otros elementos */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
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

/*ion cards aca*/
/* global.scss o el archivo de estilos de tu componente */

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

ion-card {
  height: 100%;
  display: flex; /* Permite al contenido ocupar todo el espacio */
  flex-direction: column; /* Asegura que el contenido se apile verticalmente */
  height: calc((100% - 30px) / 2) !important;
}


</style>
