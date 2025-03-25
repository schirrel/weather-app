<template>
    <header>
        <div class="flex flex-row justify-between align-center gap-2">
            <h2>{{ city.city }}, {{ city.state }}, {{ city.country }}</h2>
            <transition
                name="slide-fade"
                mode="out-in"
            >
                <small
                    :key="lastUpdate"
                    class="text-xs text-right break-words"
                >
                    Last Update: {{ updateDate }}</small>
            </transition>
        </div>
        <UProgress
            v-model="isLoading"
            class="progress-override sm:-mx-6 -mx-4 -mb-4 pt-4"
            animation="carousel"
            color="warning"
            size="xs"
        />
    </header>
</template>

<script setup lang="ts">
import type { CityModel } from '~/server/models/city';

const { lastUpdate, city, loading } = defineProps<{
    lastUpdate: string;
    city: CityModel;
    loading: boolean;
}>();
const isLoading = ref<null | number>(0);

watchEffect(() => {
    isLoading.value = loading ? null : 0;
});

const updateDate = computed(() => {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(new Date(lastUpdate));
});
</script>

<style scoped>
.slide-fade-enter-active {
    transition: opacity 0.3s ease;
}

.slide-fade-leave-active {
    transition: opacity 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}

.progress-override {
    width: auto !important;
}
</style>
