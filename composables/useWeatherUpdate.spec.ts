import { describe, it, expect, vi } from 'vitest';
import * as vueUse from '@vueuse/core';
import { flushPromises } from '@vue/test-utils';

describe('useWeatherUpdate', () => {
    vi.useFakeTimers();
    const mockFetch = vi.spyOn(globalThis, '$fetch').mockImplementation(() => {
        return Promise.resolve([{
            city: {},
            weather: {},
            lastUpdate: '2021-10-10',
        }]);
    });

    const useIntervalFnResult = { pause: vi.fn(), resume: vi.fn(), isActive: ref(false) };
    vi.spyOn(vueUse, 'useIntervalFn').mockImplementation((callback, _interval) => {
        callback();
        return useIntervalFnResult;
    });

    it('should use interval and update data', async () => {
        const { data } = useWeatherUpdate(1);

        expect(data.value).toBeNull();

        vi.advanceTimersToNextTimer();
        await flushPromises();

        expect(vueUse.useIntervalFn).toHaveBeenCalled();
        expect(data.value).toBeDefined();
        expect(data.value).not.toBeNull();
        expect(data.value?.lastUpdate).toBe('2021-10-10');
        expect(mockFetch).toHaveBeenCalledWith('/api/weather',
            {
                query: {
                    city: 1,
                },
            });
    });

    it('should clear the interval', async () => {
        const { stop } = useWeatherUpdate(1);

        vi.advanceTimersToNextTimer();
        await flushPromises();
        stop();
        expect(useIntervalFnResult.pause).toHaveBeenCalled();
    });
});
