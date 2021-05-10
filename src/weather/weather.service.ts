import { Plugins } from '@capacitor/core';
import {ref} from 'vue';
import { OneWeather } from './one-weather.model';

const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?';
const key = 'aca0025d25178ce6456c50c28b5186b2'
const exclude = 'minutely,hourly'
const weather = ref<OneWeather>();


fetchWeather();
setInterval(fetchWeather, 120000);

export function useWeather(){
    return{
        weather,
        formatTemperature,
        getWeatherImageUrl,
        isDaytime
    }
}

async function fetchWeather() {
    const { coords } = await Plugins.Geolocation.getCurrentPosition();
    const res = await fetch(`${weatherURL}lat=${coords.latitude}&lon=${coords.longitude}&exclude=${exclude}&appid=${key}&units=metric`);
    weather.value = await res.json();
}

function formatTemperature(value: number, format: 'F' | 'C') {
    return `${Math.round(value)}° ${format}`;
}

function getWeatherImageUrl(iconName: string , size: '2x' | '4x'){
    return `http://openweathermap.org/img/wn/${iconName}@${size}.png`;
}

function isDaytime(day: 'd'){
    if(day.includes('d')){
        return true;
    }else{
        return false;
    }
}