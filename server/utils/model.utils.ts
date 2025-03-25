import type { CityModel } from '../models/city';
import type { OpenWeatherModel } from '../models/open-weather';
import type { WeatherModel } from '../models/weather';

export function mountWeatherModel(weather: OpenWeatherModel): WeatherModel {
    return {
        temp: weather.main.temp,
        tempMax: weather.main.temp_max,
        tempMin: weather.main.temp_min,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        feelsLike: weather.main.feels_like,
    };
}

export function mountResponseObject(city: CityModel, weather: OpenWeatherModel): {
    lastUpdate: string;
    city: CityModel;
    weather: WeatherModel;
} {
    return {
        lastUpdate: new Date().toISOString(),
        city,
        weather: mountWeatherModel(weather),
    };
}
