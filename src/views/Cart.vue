<template>
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

  <ion-header collapse="condense">
    <ion-toolbar class="bg-paua-300">
      <ion-title size="large" class="text-white">Tab 1</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <ion-item v-for="(item, index) in cartItems" :key="index">
        <ion-label>
          {{ item.name }} - Cantidad: {{ item.quantity }}
        </ion-label>
        <ion-button color="danger" @click="removeFromCart(index)">
          Eliminar
        </ion-button>
      </ion-item>
    </ion-list>

    <ion-footer>
      <ion-toolbar class="bg-paua-500">
        <ion-title>Total: ${{ totalPrice }}</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-content>

</template>

<script setup lang="ts">
import { call, cart, home, storefront } from 'ionicons/icons';
import { ref, computed } from 'vue';

const cartItems = ref([
  { id: 1, name: 'Producto 1', quantity: 3 },
  { id: 2, name: 'Producto 2', quantity: 1 },
  { id: 3, name: 'Producto 3', quantity: 2 },
  { id: 4, name: 'Producto 4', quantity: 5 },
  

]);

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity * 10, 0);
});

const removeFromCart = (index: number) => {
  cartItems.value.splice(index, 1);
};
</script>

<style scoped>
.bg-paua-50 { background-color: #f4f1ff; }
.bg-paua-100 { background-color: #ece5ff; }
.bg-paua-200 { background-color: #dbceff; }
.bg-paua-300 { background-color: #c1a7ff; }
.bg-paua-400 { background-color: #a476ff; }
.bg-paua-500 { background-color: #8a3fff; }
.bg-paua-600 { background-color: #7f18ff; }
.bg-paua-700 { background-color: #7307fa; }
.bg-paua-800 { background-color: #6005d2; }
.bg-paua-900 { background-color: #5006ac; }
.bg-paua-950 { background-color: #270060; }
</style>
