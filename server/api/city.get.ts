import { citiesList } from '../data/cities';

export default defineEventHandler(async () => {
    return citiesList;
});
