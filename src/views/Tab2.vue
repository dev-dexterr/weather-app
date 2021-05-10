<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Forecast</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Forecast</ion-title>
        </ion-toolbar>
      </ion-header>

      <forecast></forecast>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import Forecast from '@/weather/forecast.vue';


export default  {
  name: 'Tab2',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Forecast }
}
</script>
    Forecast

<style scoped>
ion-title{
  font-family: montserratMedium;
  font-size: 1.5rem;
}
</style>