<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Tab 7</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <ExploreContainer name="Tab 7page" />
      
      <IonTitle>
        <h1>Secction of article </h1>
        
      </IonTitle>  
      
      
              <div>
            <!-- Card 3 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab7" class="block">
              <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/350x200" alt="B" class="w-full h-40 object-cover" />
                <div class="p-4">
                  <h2 class="text-lg font-semibold">TEXTO</h2>
                  <p class="text-blue-500">TEXTO</p>
                </div>
              </div>
            </router-link>
          </ion-col>
          </div>
        </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    // Importaciones de Ionic y otros componentes
    import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
    import ExploreContainer from '@/components/ExploreContainer.vue';
  
    // Importaciones de Swiper
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation } from 'swiper/modules';
    const modules = [Navigation];
  
    // Iconos de Ionicons
    import { bag, film, flash, help, home, storefront } from 'ionicons/icons';
  
    // Setup para exportar iconos
    const icons = { bag, film, flash, home };
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
