import { describe, it, expect, beforeEach } from 'vitest';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import WeatherInfo from './WeatherInfo.vue';

describe('WeatherInfo', () => {
    let wrapper: VueWrapper;

    beforeEach(() => {
        wrapper = mount(WeatherInfo, {
            props: {
                weather: { pressure: 123, humidity: 13 },
            },
        });
    });
    it('should render Pressure value', () => {
        expect(wrapper.text()).toContain('Pressure 123hPa');
    });

    it('should render Humidity value', () => {
        expect(wrapper.text()).toContain('Humidity 13%');
    });
});
