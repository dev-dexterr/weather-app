<template>
    <ion-list v-if="weather?.daily">
        <ion-item v-for="daily in weather.daily" :key="daily.dt">
            <ion-avatar>
                <!-- <div class="weather-bg">
                    <img :src="getWeatherImageUrl(daily.weather[0].icon, '2x')" />
                </div> -->
                <ion-thumbnail>
                    <img :src="getWeatherImageUrl(daily.weather[0].icon, '2x')" />
                </ion-thumbnail>
            </ion-avatar>
            <ion-label>
                <h1>{{formatTemperature(daily.temp.day, 'C')}}</h1>
                <h2>{{daily.weather[0].description}}</h2>
                <ion-chip>
                    <p>{{ new Date(daily.dt * 1000).toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long' , day: 'numeric'}) }}</p>
                </ion-chip>
            </ion-label>
        </ion-item>
    </ion-list>
</template>

<script lang="ts">
import {IonList, IonItem, IonAvatar, IonLabel} from '@ionic/vue'
import {defineComponent} from 'vue'
import commonIonicComponents from '../shared/common-ionic-components';
import {useWeather} from './weather.service'

export default defineComponent({
    components:{
        IonList,
        IonItem,
        IonAvatar,
        IonLabel,
        ...commonIonicComponents
    },
    setup(){
        const {weather , formatTemperature, getWeatherImageUrl} = useWeather();
        return{
            weather,
            formatTemperature,
            getWeatherImageUrl
        }
    }
})

</script>

<style scoped>
/* .weather-bg{
    background-color: skyblue;
    border-radius: 100%;
    border: 2px solid white;
} */

ion-avatar{
    margin-right: 10px;
}
*{
    font-family: 'montserrat';
}

</style>