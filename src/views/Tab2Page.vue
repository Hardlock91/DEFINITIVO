<template>
  <ion-page>
    
    <ion-header class="bg-shakespeare-500 text-white">
      <ion-header>
        <ion-label class="ion-margin-top">Icons at End</ion-label>
  <ion-breadcrumbs>
    <ion-breadcrumb href="/tabs/tab1">
      Home
      <ion-icon slot="end" :icon="home"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="/tabs/tab2">
      Products
      <ion-icon slot="end" :icon="storefront"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="/tabs/tab3">
      favorits
      <ion-icon slot="end" :icon="bag"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="/tabs/tab4">
      Asist
      <ion-icon slot="end" :icon="help"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
    </ion-header>
    
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    
    <IonTitle>
      <h1>Secction of article </h1>
      
    </IonTitle>  
    
    
            <div>
          <ion-row>
            <!-- Card 1 -->
            <ion-col size="12" size-md="6" size-lg="4">
              <router-link to="/producto/1" class="block">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Producto 1" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Producto 1</h2>
                    <p class="text-blue-500">Descripción del Producto 1</p>
                  </div>
                </div>
              </router-link>
            </ion-col>

            <!-- Card 2 -->
            <ion-col size="12" size-md="6" size-lg="4">
              <router-link to="/tabs/tab5" class="block">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Producto 2" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Producto 2</h2>
                    <p class="text-blue-500">Descripción del Producto 2</p>
                  </div>
                </div>
              </router-link>
            </ion-col>

            <!-- Card 3 -->
            <ion-col size="12" size-md="6" size-lg="4">
              <router-link to="/producto/3" class="block">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Producto 3" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Producto 3</h2>
                    <p class="text-blue-500">Descripción del Producto 3</p>
                  </div>
                </div>
              </router-link>
            </ion-col>

            <!-- Card 4 -->
            <ion-col size="12" size-md="6" size-lg="4">
              <router-link to="/producto/4" class="block">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Producto 4" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Producto 4</h2>
                    <p class="text-blue-500">Descripción del Producto 4</p>
                  </div>
                </div>
              </router-link>
            </ion-col>

            <!-- Card 5 -->
            <ion-col size="12" size-md="6" size-lg="4">
              <router-link to="/producto/5" class="block">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Producto 5" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Producto 5</h2>
                    <p class="text-blue-500">Descripción del Producto 5</p>
                  </div>
                </div>
              </router-link>
            </ion-col>

            <!-- Card 6 -->
            <ion-col size="12" size-md="6" size-lg="4">
              <router-link to="/producto/6" class="block">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="Producto 6" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">Producto 6</h2>
                    <p class="text-blue-500">Descripción del Producto 6</p>
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
