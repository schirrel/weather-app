<template>
    <div class="flex flex-row gap-4">
        <span><small class="text-gray-400">Pressure</small>
            {{ weather.pressure }}hPa</span>
        <span><small class="text-gray-400">Humidity</small>
            {{ weather.humidity }}%</span>
    </div>
</template>

<script setup lang="ts">
import type { WeatherModel } from '~/server/models/weather';

const { weather } = defineProps<{
    weather: Partial<WeatherModel>;
}>();
</script>
