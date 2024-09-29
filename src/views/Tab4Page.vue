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
  
        <ExploreContainer name="Tab 4 page" />
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
  
  