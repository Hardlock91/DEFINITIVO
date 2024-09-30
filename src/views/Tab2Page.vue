<template>
  <ion-page>
    <ion-header class="bg-paua-500 text-white">
      <ion-toolbar>
        <ion-breadcrumbs slot="end">
          <ion-breadcrumb href="/tabs/tab1" class="text-paua-900">Home<ion-icon slot="end" :icon="home"></ion-icon></ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab2" class="text-paua-900">Products<ion-icon slot="end" :icon="storefront"></ion-icon></ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab-cart" class="text-paua-900">Cart<ion-icon slot="end" :icon="cart"></ion-icon></ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab4" class="text-paua-900">Contact<ion-icon slot="end" :icon="call"></ion-icon></ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding d-flex" :fullscreen="true">
      <div>
        <ion-searchbar v-model="searchTerm" placeholder="Buscar productos..." class="bg-paua-200"></ion-searchbar>
      </div>

      <ion-title>
        <h1>SECTION 1</h1>
      </ion-title>
      
      <ion-row>
        <ion-col v-for="product in filteredProducts" :key="product.id" size="12" size-md="6" size-lg="4">
          <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
            <img :src="product.image" alt="Product Image" class="object-cover hover-effect" style="width: 200px; height: 400px; display: block; margin: 0 auto;" />
            <div class="p-4 bg-paua-200">
              <h2 class="text-lg font-semibold text-paua-600">{{ product.name }}</h2>
              <p class="text-paua-900">{{ product.description }}</p>
              <p class="text-paua-800 font-bold">${{ product.price.toFixed(2) }}</p>
              <ion-button @click="addToCart(product)" color="primary">Añadir al carrito</ion-button>
            </div>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'; 
import useCart from '@/components/useCart'; 
import { home, storefront, call, cart } from 'ionicons/icons';

const { addToCart } = useCart(); // Asegúrate de importar y usar useCart correctamente
const searchTerm = ref('');

// Ejemplo de productos
const products = ref([
  { id: 1, name: 'Silla', description: 'Silla cómoda', price: 50, image: '/src/imagenes/silla.jpg' },
  { id: 2, name: 'Gráfica', description: 'Tarjeta gráfica', price: 250, image: '/src/imagenes/grafica2.jpg' },
  { id: 3, name: 'Placa Madre', description: 'Placa madre de alta calidad', price: 150, image: '/src/imagenes/placaMadre.jpg' },
  { id: 4, name: 'Teclado', description: 'Teclado mecánico', price: 80, image: '/src/imagenes/teclado.jpg' },
]);

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<style>
.d-flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.hover-effect {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
}
</style>
