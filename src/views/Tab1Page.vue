<template>
  <ion-page>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Cabecera principal con color de fondo y texto -->
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
          <ion-breadcrumb href="/tabs/tab-cart" class="text-paua-900">
            Cart
            <ion-icon slot="end" :icon="cart"></ion-icon>
          </ion-breadcrumb>

          <ion-breadcrumb href="/tabs/tab4" class="text-paua-900">
            Contact
            <ion-icon slot="end" :icon="call"></ion-icon>
          </ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- Toolbar del Tab con color de fondo y texto -->
      <ion-header collapse="condense">
        <ion-toolbar class="bg-paua-300">
          <ion-title size="large" class="text-white">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-toolbar class="bg-paua-300 text-white">
        <ion-buttons slot="start">
          <ion-segment v-model="selectedSegment" class="bg-paua-200">
            <ion-segment-button value="computacion" class="hover:bg-paua-400">
              <ion-label>Computación</ion-label>
            </ion-segment-button>
            <ion-segment-button value="gaming" class="hover:bg-paua-400">
              <ion-label>Gaming y Streaming</ion-label>
            </ion-segment-button>
            <ion-segment-button value="componentes" class="hover:bg-paua-400">
              <ion-label>Componentes</ion-label>
            </ion-segment-button>
            <ion-segment-button value="audio" class="hover:bg-paua-400">
              <ion-label>Audio y Video</ion-label>
            </ion-segment-button>
            <ion-segment-button value="conectividad" class="hover:bg-paua-400">
              <ion-label>Conectividad y Redes</ion-label>
            </ion-segment-button>
            <ion-segment-button value="hogar" class="hover:bg-paua-400">
              <ion-label>Hogar y Oficina</ion-label>
            </ion-segment-button>
            <ion-segment-button value="otras" class="hover:bg-paua-400">
              <ion-label>Otras Categorías</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-buttons>
      </ion-toolbar>

      <div v-if="selectedSegment === 'computacion'" class="bg-paua-50 p-4">
        <ul>
          <li><router-link to="/tabs/tab2" class="text-paua-700 hover:text-paua-500">Computadora 1</router-link></li>
          <li><router-link to="/tabs/tab2" class="text-paua-700 hover:text-paua-500">Computadora 2</router-link></li>
          <li><router-link to="/tabs/tab2" class="text-paua-700 hover:text-paua-500">Computadora 3</router-link></li>
        </ul>
      </div>

  
      <ion-searchbar value="Value" class="bg-paua-200"></ion-searchbar>

            <h1 class="text-2xl font-semibold text-center text-paua-600 py-2 flex items-center justify-center">
              Productos Destacados
            </h1>
     

      <!-- Caja del Swiper -->
      <div class="swiper-box">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img src="/src/imagenes/sillasg.jpg" alt="Slide 1" class="hover-effect" style="width: 400%; height: 100%;object-fit: fill;" />
          </swiper-slide>
          <swiper-slide>
            <img src="/src/imagenes/razer.jpg" alt="Slide 1" class="hover-effect" style="width: 400%; height: 100%;object-fit: fill;" />
          </swiper-slide>
          <swiper-slide>
            <img src="/src/imagenes/propaganda.jpg" alt="Slide 1" class="hover-effect" style="width: 400%; height: 100%;object-fit: fill;" />
          </swiper-slide>
          <swiper-slide>
            <img src="/src/imagenes/propaganda1.jpg" alt="Slide 1" class="hover-effect" style="width: 400%; height: 100%;object-fit: fill;" />
          </swiper-slide>
          <swiper-slide>
            <img src="/src/imagenes/graficas.jpg" alt="Slide 1" class="hover-effect" style="width: 400%; height: 100%;object-fit: fill;" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="grid grid-flow-row auto-rows-max gap-4">
        <ion-row>
          <!-- Card 1 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab5" class="block">
              <div class="bg-paua-50 shadow-md rounded-lg overflow-hidden">
                <img src="/src/imagenes/silla.jpg" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 200px; height: 400px; display: block; margin: 0 auto;" />
                <div class="p-4 bg-paua-100">
                  <h2 class="text-lg font-semibold text-paua-700">Silla Gamer</h2>
                  <p class="text-paua-900">US130</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 2 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab6" class="block">
              <div class="bg-paua-50 shadow-md rounded-lg overflow-hidden">
                <div class="p-4 grid grid-cols-2 gap-2 bg-paua-100">
                  <img src="/src/imagenes/mouse.jpg" alt="Slide 1" class="hover-effect" style="width: 1000px; height: 200px;object-fit: fill;" />
                  <img src="/src/imagenes/audifonos.jpg" alt="Slide 1" class="hover-effect" style="width: 1000px; height: 200px;object-fit: fill;" />
                  <img src="/src/imagenes/teclado.jpg" alt="Slide 1" class="hover-effect" style="width: 1000px; height: 200px;object-fit: fill;" />
                  <img src="/src/imagenes/mousepag1.jpg" alt="Slide 1" class="hover-effect" style="width: 1000px; height: 200px;object-fit: fill;" />
                </div>
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-700">Pack Of Peripherals</h2>
                  <p class="text-paua-900">US180</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 3 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab7" class="block">
              <div class="bg-paua-50 shadow-md rounded-lg overflow-hidden">
                <img src="/src/imagenes/mouselog.jpg" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 200px; height: 400px; display: block; margin: 0 auto;" />
                <div class="p-4 bg-paua-300">
                  <h2 class="text-lg font-semibold text-paua-700">Mouse Gamer</h2>
                  <p class="text-paua-900">US180</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 4 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab8" class="block">
              <div class="bg-paua-50 shadow-md rounded-lg overflow-hidden">
                <img src="/src/imagenes/monitor.png" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 500px; height: 400px; display: block; margin: 0 auto;" />
                <div class="p-4 bg-paua-400">
                  <h2 class="text-lg font-semibold text-white">TEXTO</h2>
                  <p class="text-paua-900">TEXTO</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 5 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab9" class="block">
              <div class="bg-paua-50 shadow-md rounded-lg overflow-hidden">
                <img src="/src/imagenes/ssd.jpg" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 500px; height: 400px; display: block; margin: 0 auto;" />
                <div class="p-4 bg-paua-">
                  <h2 class="text-lg font-semibold text-white">TEXTO</h2>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 6 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab10" class="block">
              <div class="bg-paua-50 shadow-md rounded-lg overflow-hidden">
                <img src="/src/imagenes/teclado.jpg" alt="Prime Video" width="350" height="350" class="object-cover hover-effect" style="width: 500px; height: 400px; display: block; margin: 0 auto;object-fit: fill;" />
                <div class="p-4 bg-paua-600">
                  <h2 class="text-lg font-semibold text-white">TEXTO</h2>
                </div>
              </div>
            </router-link>
          </ion-col>
        </ion-row>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { ref } from 'vue'; 
import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { bag, home, storefront, help, cart, contractOutline, callOutline, call } from 'ionicons/icons';

const modules = [Navigation];
const selectedSegment = ref('computacion'); 
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
.hover-effect {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hover-effect:hover {
  transform: scale(1.05); /* Aumenta el tamaño de la imagen al pasar el cursor */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Agrega una sombra para dar un efecto de elevación */
}
.ion-segment-button {
  transition: background-color 0.3s ease;
}
</style>
