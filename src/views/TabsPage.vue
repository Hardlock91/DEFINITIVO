<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/tabs/tab4">
        </ion-tab-button>
        <ion-tab-button tab="tab5" href="/tabs/tab5">
        </ion-tab-button>
        <ion-tab-button tab="tab6" href="/tabs/tab6">
        </ion-tab-button>
        <ion-tab-button tab="tab7" href="/tabs/tab7">
        </ion-tab-button>
        <ion-tab-button tab="tab8" href="/tabs/tab8">
        </ion-tab-button>
        <ion-tab-button tab="tab9" href="/tabs/tab9">
        </ion-tab-button>
        <ion-tab-button tab="tab10" href="/tabs/tab10">
        </ion-tab-button>
        <ion-tab-button tab="tab11" href="/tabs/tab11">
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
  
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
