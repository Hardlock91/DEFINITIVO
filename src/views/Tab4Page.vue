<template>
    <ion-page>
      <ion-header class="bg-shakespeare-500 text-white">
        <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="end">
            <ion-button href="/tabs/tab1">Inicio</ion-button>
            <ion-button href="/tabs/tab2">Productos</ion-button>
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
  
        <ExploreContainer name="Tab 3 page" />
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  </script>