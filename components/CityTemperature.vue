<template>
    <section>
        <div class="grid grid-cols-2 gap-2 justify-between">
            <div
                class="city__temperature"
                :class="{
                    'city__temperature--cold': isCold,
                    'city__temperature--hot': isHot,
                }"
            >
                <Icon
                    v-if="isCold"
                    name="bi:snow"
                />
                <Icon
                    v-if="!isCold && !isHot"
                    name="bi:sun"
                />
                <Icon
                    v-if="isHot"
                    name="bi:sun-fill"
                />
                <h3 class="text-2xl pl-2">
                    {{ weather.temp }}°C
                </h3>
            </div>
            <div class="flex flex-col text-right">
                <span class="text-xs">
                    <Icon
                        class="city__temperature--hot"
                        name="bi:arrow-up"
                    />
                    {{ weather.tempMax }}°C
                </span>

                <span class="text-xs">
                    <Icon
                        class="city__temperature--cold"
                        name="bi:arrow-down"
                    />
                    {{ weather.tempMin }}°C
                </span>
            </div>
        </div>
        <small class="text-gray-500 text-xs">
            Feels like {{ weather.feelsLike }}°C
        </small>
    </section>
</template>

<script setup lang="ts">
import type { WeatherModel } from '~/server/models/weather';

const { weather } = defineProps<{
    weather: WeatherModel;
}>();

const isHot = computed(() => {
    return weather.temp > 25;
});
const isCold = computed(() => {
    return weather.temp < 5;
});
</script>

<style scoped lang="scss">
.city__temperature {
    color: coral;
    display: flex;

    &--cold {
        color: cornflowerblue;
    }
    &--hot {
        color: tomato;
    }
}
</style>
