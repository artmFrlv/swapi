import {Filters} from '../entities/filters';
import {id, StarshipsCollection} from '../entities/starship';

export default function searchByFilter(starships: StarshipsCollection, filters: Filters, searchResults: id[]): id[] {
    const activeFilters = [];
    const resultIds = [];
    for (const filter of Object.keys(filters)) {
        // @ts-ignore
        if (filters[filter].lowValue || filters[filter].topValue) {
            activeFilters.push(filter);
        }
    }

    for (const id of searchResults) {
        let shouldBeInResult = true;
        for (const filter of activeFilters) {
            // @ts-ignore
            const value = starships[id][filter];
            // @ts-ignore
            const lowValue = filters[filter].lowValue;
            // @ts-ignore
            const topValue = filters[filter].topValue;
            const isPassedFilter = ((value >= lowValue || lowValue === undefined) && (value <= topValue || topValue === undefined));

            if (!isPassedFilter) {
                shouldBeInResult = false;
                break;
            }
        }
        if (shouldBeInResult) {
            resultIds.push(id);
        }
    }
    return resultIds;
}
