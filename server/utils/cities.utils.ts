import { citiesList } from '../data/cities';

export const getCity = (id: string) => {
    return citiesList.find(city => city.id === Number(id));
};
