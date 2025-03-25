<template>
    <main>
        <header class="bg-orange-800">
            <div class="mx-auto px-8">
                <div class="relative flex h-16">
                    <div class="flex shrink-0 items-center text-gray-200">
                        <span class="font-bold text-white">PM</span> Weather
                    </div>
                </div>
            </div>
        </header>

        <UContainer class="py-4">
            <UInputMenu
                v-if="cities"
                v-model="citiesId"
                class="w-full"
                value-key="id"
                label="Select cities"
                multiple
                :items="cities"
                :loading="loading"
                color="warning"
            />

            <section
                v-if="data"
                class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4"
            >
                <ClientOnly>
                    <CityCard
                        v-for="item in data"
                        :key="item.city.id"
                        :weather="item.weather"
                        :city="item.city"
                        :last-update="item.lastUpdate"
                    />
                </ClientOnly>
            </section>
        </UContainer>
    </main>
</template>

<script setup lang="ts">
const citiesId = ref([1, 2, 3]);

const { data: cities } = useFetch('/api/city');

const { data, status } = await useFetch('/api/weather', {
    query: {
        cities: citiesId,
    },
});

const loading = computed(() => status.value === 'pending');
</script>
