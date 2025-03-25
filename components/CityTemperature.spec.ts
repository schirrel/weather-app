import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CityTemperature from './CityTemperature.vue';

describe('CityTemperature', () => {
    it('should render temperature data with regular styling', () => {
        const wrapper = mount(CityTemperature, {
            props: {
                weather: {
                    temp: 18,
                    tempMax: 20,
                    tempMin: 10,
                    humidity: 0,
                    pressure: 0,
                    feelsLike: 17,
                },
            },
        });
        expect(wrapper.text()).toContain('18°C');
        expect(wrapper.text()).toContain('20°C');
        expect(wrapper.text()).toContain('10°C');
        expect(wrapper.text()).toContain('Feels like 17°C');
        expect(wrapper.find('.city__temperature"').classes()).toHaveLength(1);
    });

    it('should render temperature data with hot styling', () => {
        const wrapper = mount(CityTemperature, {
            props: {
                weather: {
                    temp: 32,
                    tempMax: 20,
                    tempMin: 10,
                    humidity: 0,
                    pressure: 0,
                    feelsLike: 17,
                },
            },
        });
        expect(wrapper.find('.city__temperature"').classes()).toContain('city__temperature--hot');
    });

    it('should render temperature data with cold styling', () => {
        const wrapper = mount(CityTemperature, {
            props: {
                weather: {
                    temp: 2,
                    tempMax: 20,
                    tempMin: 10,
                    humidity: 0,
                    pressure: 0,
                    feelsLike: 17,
                },
            },
        });
        expect(wrapper.find('.city__temperature"').classes()).toContain('city__temperature--cold');
    });
});
