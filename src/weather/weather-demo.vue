<template>
    <div>
        <current-weather></current-weather>
        <forecast></forecast>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CurrentWeather from './current-weather.vue'
import Forecast from './forecast.vue'

export default defineComponent({
    components:{
        CurrentWeather,
        Forecast,
    },
    setup(){


        return{

        }
    }
})
</script>

<style scoped>

</style>