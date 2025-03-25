import { defineEventHandler } from 'h3';
import { getCity } from '../utils/cities.utils';
import type { CityModel } from '../models/city';
import { mountResponseObject } from '../utils/model.utils';

interface RequestQuery {
    city: string;
    cities: string[];
}

const getCityWeather = async (city: CityModel) => {
    const weather = await getWeather(city);
    if (!weather) {
        return null;
    }
    return mountResponseObject(city, weather);
};

export default defineEventHandler(async (event) => {
    const query = getQuery<RequestQuery>(event);
    const cityId = query.city;
    const citiesId = query.cities ?? [cityId];

    const cities = citiesId.map((c) => {
        return getCity(c);
    }).filter(c => c !== undefined);

    const citiesWeatherData = [];

    for (let index = 0; index < cities.length; index++) {
        const data = await getCityWeather(cities[index]);
        if (data) {
            citiesWeatherData.push(data);
        }
    }
    return citiesWeatherData;
});
