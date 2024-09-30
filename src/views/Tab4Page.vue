<template>
  <ion-app>
    <ion-menu content-id="main-content" side="start" menuId="main-menu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item button @click="logout">Cerrar Sesión</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-page id="main-content">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <ion-header class="bg-paua-500 text-white">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button> <!-- Botón para abrir el menú -->
          </ion-buttons>
          <ion-title size="large">Formulario de Ayuda</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content :fullscreen="true">
        <div class="ion-padding">
          <form @submit.prevent="submitForm">
            <ion-item>
              <ion-label position="floating">Nombre</ion-label>
              <ion-input v-model="formData.name" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Correo Electrónico</ion-label>
              <ion-input type="email" v-model="formData.email" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Mensaje</ion-label>
              <ion-textarea v-model="formData.message" :rows="6" required></ion-textarea>
            </ion-item>

            <ion-button expand="full" type="submit">Enviar</ion-button>
          </form>
        </div>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'; 
import { IonMenuButton, IonList, IonItem, IonTextarea, IonButton, IonInput } from '@ionic/vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  alert("Enviado con éxito");
  formData.value = { name: '', email: '', message: '' }; // Reinicia el formulario
};

const logout = () => {
  console.log("Cerrando sesión...");
};
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
</style>
