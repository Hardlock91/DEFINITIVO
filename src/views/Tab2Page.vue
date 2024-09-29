<template>
  <ion-page>
    <!-- Cabecera principal con color de fondo y texto -->
    <ion-header class="bg-paua-900 text-white">
      <ion-toolbar>
        <ion-breadcrumbs>
          <ion-breadcrumb href="/tabs/tab1" class="text-paua-900">
            Home
            <ion-icon slot="end" :icon="home"></ion-icon>
          </ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab2" class="text-paua-900">
            Products
            <ion-icon slot="end" :icon="storefront"></ion-icon>
          </ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab3" class="text-paua-900">
            Favorits
            <ion-icon slot="end" :icon="bag"></ion-icon>
          </ion-breadcrumb>
          <ion-breadcrumb href="/tabs/tab4" class="text-paua-900">
            Asist
            <ion-icon slot="end" :icon="help"></ion-icon>
          </ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar class="bg-paua-300">
          <ion-title size="large" class="text-white">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <h1 class="text-paua-700 p-4">Section of Article</h1>

      <div>
        <ion-row>
          <!-- Card 1 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/1" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 1" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 1</h2>
                  <p class="text-paua-900">Descripción del Producto 1</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 2 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab5" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 2" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 2</h2>
                  <p class="text-paua-900">Descripción del Producto 2</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 3 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/3" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 3" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 3</h2>
                  <p class="text-paua-900">Descripción del Producto 3</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 4 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/4" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 4" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 4</h2>
                  <p class="text-paua-900">Descripción del Producto 4</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 5 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/5" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 5" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 5</h2>
                  <p class="text-paua-900">Descripción del Producto 5</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 6 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/6" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 6" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 6</h2>
                  <p class="text-paua-900">Descripción del Producto 6</p>
                </div>
              </div>
            </router-link>
          </ion-col>
        </ion-row>
      </div>
      <IonTitle>
        <h1>SECTION2</h1>
      </IonTitle>
      <div>
        <ion-row>
          <!-- Card 1 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/1" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 1" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 1</h2>
                  <p class="text-paua-900">Descripción del Producto 1</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 2 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab5" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 2" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 2</h2>
                  <p class="text-paua-900">Descripción del Producto 2</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 3 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/3" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 3" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 3</h2>
                  <p class="text-paua-900">Descripción del Producto 3</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 4 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/4" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 4" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 4</h2>
                  <p class="text-paua-900">Descripción del Producto 4</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 5 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/5" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 5" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 5</h2>
                  <p class="text-paua-900">Descripción del Producto 5</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 6 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/6" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 6" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 6</h2>
                  <p class="text-paua-900">Descripción del Producto 6</p>
                </div>
              </div>
            </router-link>
          </ion-col>
        </ion-row>
      </div>
      <IonTitle>
        <h1>SECTION3</h1>
      </IonTitle>
      <div>
        <ion-row>
          <!-- Card 1 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/1" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 1" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 1</h2>
                  <p class="text-paua-900">Descripción del Producto 1</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 2 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/tabs/tab5" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 2" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 2</h2>
                  <p class="text-paua-900">Descripción del Producto 2</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 3 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/3" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 3" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 3</h2>
                  <p class="text-paua-900">Descripción del Producto 3</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 4 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/4" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 4" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 4</h2>
                  <p class="text-paua-900">Descripción del Producto 4</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 5 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/5" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 5" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 5</h2>
                  <p class="text-paua-900">Descripción del Producto 5</p>
                </div>
              </div>
            </router-link>
          </ion-col>

          <!-- Card 6 -->
          <ion-col size="12" size-md="6" size-lg="4">
            <router-link to="/producto/6" class="block">
              <div class="bg-paua-100 shadow-md rounded-lg hover-effect">
                <img src="https://via.placeholder.com/350x200" alt="Producto 6" class="w-full h-40 object-cover rounded-t-lg" />
                <div class="p-4 bg-paua-200">
                  <h2 class="text-lg font-semibold text-paua-600">Producto 6</h2>
                  <p class="text-paua-900">Descripción del Producto 6</p>
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


<style>
.hover-effect {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hover-effect:hover {
  transform: scale(1.05); /* Aumenta el tamaño de la imagen al pasar el cursor */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Agrega una sombra para dar un efecto de elevación */
}
</style>