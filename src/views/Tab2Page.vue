<template>
  <ion-page>
    
    <ion-header class="bg-shakespeare-500 text-white">
      <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="end">
          <ion-button href="/tabs/tab1">Inicio</ion-button>
          <ion-button href="/tabs/tab2">Productos</ion-button>
          <ion-button href="/tabs/tab3">Carrito</ion-button>
          <ion-button href="/tabs/tab4">Ayuda</ion-button>
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

      <ExploreContainer name="Tab 2 page" />
    
    <IonTitle>
      <h1>Secction of article </h1>
      
    </IonTitle>  
    
    
         <div>
          <ion-row>
              <ion-col size="12" size-md="6" size-lg="4">
                          <div class="bg-white shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/350x200" alt="A" class="w-full h-40 object-cover rounded-t-lg" />
                            <div class="p-4">
                              <h2 class="text-lg font-semibold">TEXTO</h2>
                              <p class="text-blue-500">TEXTO</p>
                              <routerlink>   </routerlink>
                            </div>
                          </div>
                        </ion-col>

                        <!-- Card 1-->
                        <ion-col size="12" size-md="6" size-lg="4">
                          <router-link to="/producto/2" class="block"></router-link>
                          <div class="bg-white shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/350x200" alt="S" class="w-full h-40 object-cover rounded-t-lg" />
                            <div class="p-4">
                              <h2 class="text-lg font-semibold">TEXTO</h2>
                            </div>
                          </div>
                        </ion-col>

                        <!-- Card 2-->
                        <ion-col size="12" size-md="6" size-lg="4">
                          <div class="bg-white shadow-md rounded-lg">
                            <img src="https://via.placeholder.com/350x200" alt="P" class="w-full h-40 object-cover rounded-t-lg" />
                            <div class="p-4">
                              <h2 class="text-lg font-semibold">TEXTO</h2>
                            </div>
                          </div>
                        </ion-col>
                         <ion-col size="12" size-md="6" size-lg="4">
                
                
                          <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="A" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                    <p class="text-blue-500">TEXTO</p>
                    <routerlink>   </routerlink>
                  </div>
                </div>
              </ion-col>

              <!-- Card 5 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="S" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                  </div>
                </div>
              </ion-col>

              <!-- Card 6 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="P" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                  </div>
                </div>
              </ion-col>

              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="A" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                    <p class="text-blue-500">TEXTO</p>
                    <routerlink>   </routerlink>
                  </div>
                </div>
              </ion-col>

              <!-- Card 5 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="S" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                  </div>
                </div>
              </ion-col>

              <!-- Card 6 -->
              <ion-col size="12" size-md="6" size-lg="4">
                <div class="bg-white shadow-md rounded-lg">
                  <img src="https://via.placeholder.com/350x200" alt="P" class="w-full h-40 object-cover rounded-t-lg" />
                  <div class="p-4">
                    <h2 class="text-lg font-semibold">TEXTO</h2>
                  </div>
                </div>
              </ion-col>

            </ion-row>
        </div>
      


      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
