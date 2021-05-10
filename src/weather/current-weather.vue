<template>
    <ion-card v-if="weather?.current">
        <div v-if="isDaytime(weather.current.weather[0].icon)">
            <img src="../assets/img/day_image.svg">
        </div>
        <div v-else>
            <img src="../assets/img/night_image.svg">
        </div>
        <ion-card-header class="ion-text-center">
            <ion-card-subtitle>
                <ion-text style="font-weight: 600; ">{{weather.current.weather[0].description}}</ion-text>
            </ion-card-subtitle>
            <ion-card-title >{{formatTemperature(weather.current.temp, 'C')}}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-grid class="ion-text-center">
                <ion-row>
                    <ion-col class="desctext">
                        Feel Like 
                    </ion-col>
                    <ion-col class="desctext">
                        Wind Speed 
                    </ion-col>
                </ion-row>
                
                <ion-row>
                    <ion-col class="datatext">{{formatTemperature(weather.current.feels_like, 'C')}}</ion-col>
                    <ion-col class="datatext">{{Math.round(weather.current.wind_speed)}} mph</ion-col>
                </ion-row>

                <ion-row class="ion-justify-content-center">
                    <ion-col size="4">
                        <div v-if="isDaytime(weather.current.weather[0].icon)" class="icon-container-true">
                            <img :src="getWeatherImageUrl(weather.current.weather[0].icon, '4x')" />
                        </div>
                        <div v-else class="icon-container-false">
                            <img :src="getWeatherImageUrl(weather.current.weather[0].icon, '4x')" />
                        </div>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col class="desctext">
                        Sunrise 
                    </ion-col>
                    <ion-col class="desctext">
                        Sunset 
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="datatext">{{new Date(weather.current.sunrise * 1000).toLocaleTimeString([], {timeStyle: 'short'})}}</ion-col>
                    <ion-col class="datatext">{{ new Date(weather.current.sunset * 1000).toLocaleTimeString([], { timeStyle: 'short' }) }}</ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import commonIonicComponents from '../shared/common-ionic-components';
import {defineComponent} from 'vue'
import {useWeather} from './weather.service'


export default defineComponent({
    components:{
        ...commonIonicComponents,
    },
    setup(){
        const {weather , formatTemperature, getWeatherImageUrl , isDaytime} = useWeather();
        return{
            weather,
            formatTemperature,
            getWeatherImageUrl,
            isDaytime,
        }
    },
})
</script>

<style scoped>
*{
    font-family: montserrat;
}
ion-card{
    max-width: 350px;
    border-radius: 1.8em;
}
.weather-bg{
    background-color: skyblue;
}
ion-card img{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
ion-card-subtitle{
    font-size: 1.5rem;
}
ion-card-title{
    font-size: 3rem;
}
.desctext{
    font-size: 15px;
}
.datatext{
    font-size: 1.7rem
}
.icon-container-true{
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-color: #94C9FF;
}
.icon-container-false{
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-color: #8D8EA7;
}

</style>