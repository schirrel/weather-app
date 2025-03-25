<template>
    <UCard variant="soft">
        <template #header>
            <CityCardHeader
                :last-update="lastUpdate"
                :loading="loading"
                :city="city"
            />
        </template>

        <section class="flex flex-col gap-4">
            <CityTemperature :weather="weather" />
            <WeatherInfo
                v-if="weather"
                :weather="weather"
            />
        </section>
    </UCard>
</template>

<script setup lang="ts">
import { useWeatherUpdate } from '~/composables/useWeatherUpdate';
import type { WeatherModel } from '~/server/models/weather.js';
import type { CityModel } from '~/server/models/city.js';

const props = defineProps<{
    lastUpdate: string;
    weather: WeatherModel;
    city: CityModel;
}>();

const weather = ref(props.weather);
const city = ref(props.city);
const lastUpdate = ref(props.lastUpdate);
const { data, stop, loading } = useWeatherUpdate(city.value.id);

onBeforeUnmount(() => {
    stop();
});

watchEffect(() => {
    if (data && data.value) {
        lastUpdate.value = data.value.lastUpdate;
        weather.value = data.value.weather;
        city.value = data.value.city;
    }
});
</script>
