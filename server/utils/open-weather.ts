import type { CityModel } from '../models/city';
import type { OpenWeatherModel } from '../models/open-weather';

const config = useRuntimeConfig();
const apiKey = config.owApiKey;

export const getWeather = async (city: CityModel): Promise<OpenWeatherModel | null> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?mode=json&units=metric&lat=${city.lat.trim()}&lon=${city.long}&appid=${apiKey}`;

    try {
        return await $fetch(url);
    }
    catch (err) {
        console.log(err);
        return null;
    }
};
