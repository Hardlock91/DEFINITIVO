<template>
  <ion-page>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <ion-header class="bg-paua-500 text-white">
      <ion-toolbar>
        <ion-breadcrumbs slot="end">
          <ion-breadcrumb href="/tabs/tab1" class="text-paua-900">
            Home
            <ion-icon slot="end" :icon="home"></ion-icon>
          </ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab2" class="text-paua-900">
            Products
            <ion-icon slot="end" :icon="storefront"></ion-icon>
          </ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab3" class="text-paua-900">
            Favorits
            <ion-icon slot="end" :icon="heart"></ion-icon>
          </ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab4" class="text-paua-900">
            Asist
            <ion-icon slot="end" :icon="helpCircle"></ion-icon>
          </ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar class="bg-paua-300">
          <ion-title size="large" class="text-white">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="app" class="flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-md rounded-lg overflow-hidden w-2/3 max-w-4xl">
          <swiper :slides-per-view="1" space-between="10" class="p-8">
            <swiper-slide>
              <img src="https://via.placeholder.com/350x200" alt="Women's fashion" class="w-full h-32 object-cover rounded-md" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://via.placeholder.com/350x200" alt="Men's fashion" class="w-full h-32 object-cover rounded-md" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://via.placeholder.com/350x200" alt="Beauty" class="w-full h-32 object-cover rounded-md" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://via.placeholder.com/350x200" alt="Home" class="w-full h-32 object-cover rounded-md" />
            </swiper-slide>
          </swiper>
          <div class="p-8 text-center bg-paua-100">
            <h2 class="text-2xl font-semibold text-paua-600">DESCRIPTION</h2>
            <p class="text-gray-500 text-lg">PRICE</p>
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


  
  </style>
  