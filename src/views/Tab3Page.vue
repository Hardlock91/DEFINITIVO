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

  <ExploreContainer name="Tab 3 page" />

    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { ref } from 'vue'; 
import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,} from '@ionic/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { bag, home, storefront, help, cart, contractOutline, callOutline, call } from 'ionicons/icons';

const modules = [Navigation];
const selectedSegment = ref('computacion'); 
</script>



<style>

</style>
