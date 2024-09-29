<!-- App.vue -->
<template>
  <div id="app" class="bg-shakespeare-50 text-shakespeare-900">
    <router-view />
  </div>
</template>

<style>
/* Puedes definir otros estilos globales aquí si es necesario */
body {
  background-color: var(--ion-color-shakespeare-50); /* Color de fondo global */
  color: var(--ion-color-shakespeare-900); /* Color de texto global */
}
</style>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
