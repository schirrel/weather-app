import { ref } from 'vue';
import { useIntervalFn, useTimeoutFn } from '@vueuse/core';
import type { CityModel } from '~/server/models/city';
import type { WeatherModel } from '~/server/models/weather';

const TEN_MINUTES = 600000;

export const useWeatherUpdate = (id: number) => {
    const data = ref<{
        lastUpdate: string;
        city: CityModel;
        weather: WeatherModel;
    } | null>(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchData = () => {
        data.value = null;
        error.value = null;
        loading.value = true;

        $fetch('/api/weather', {
            query: {
                city: id,
            },
        })
            .then((res) => {
                if (res[0]) {
                    const newData = {
                        city: res[0].city as CityModel,
                        weather: res[0].weather,
                        lastUpdate: res[0].lastUpdate,
                    };
                    data.value = newData;
                }
            })
            .catch(err => (error.value = err))
            .finally(() => {
                useTimeoutFn(() => {
                    loading.value = false;
                }, 1000);
            });
    };

    const { pause } = useIntervalFn(() => {
        fetchData();
    }, TEN_MINUTES);

    const stop = () => {
        pause();
    };
    return { data, loading, stop };
};
