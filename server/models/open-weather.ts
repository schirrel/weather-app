export interface OpenWeatherModel {
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
        pressure: number;
        feels_like: number;
    };
}
