import {
    ResetFilters,
    SearchActionEnum,
    SetFiltersAction,
    SetResultsAction,
    SetStarshipList,
    SetSuggestAction
} from './types';
import {FiltersEnum} from '../../../entities/filters';
import {id} from '../../../entities/starship';
import {AppDispatch, RootState} from '../../index';
import searchByString from '../../../utils/searchByString';
import searchByFilter from '../../../utils/searchByFilters';

export const SearchActionCreators = {
    setFilters: (filter: FiltersEnum, lowValue?: number, topValue?: number): SetFiltersAction => ({
        type: SearchActionEnum.SET_FILTERS,
        payload: {
            filter: filter,
            lowValue: lowValue,
            topValue: topValue,
        }
    }),

    resetFilters: (): ResetFilters => ({
        type: SearchActionEnum.RESET_FILTERS,
    }),

    setStarshipList: (payload: id[]): SetStarshipList => ({
        type: SearchActionEnum.SET_STARSHIP_LIST,
        payload
    }),

    setResults: (payload: id[]): SetResultsAction => ({
        type: SearchActionEnum.SET_RESULTS,
        payload
    }),

    setSuggest: (payload: id[]): SetSuggestAction => ({
        type: SearchActionEnum.SET_SUGGEST,
        payload,
    }),

    searchStarships: (searchQuery: string, applySearch = false) => (dispatch: AppDispatch, getState: () => RootState) => {
        const {data} = getState();
        const {starships} = data;
        const results = searchByString(starships, searchQuery);

        if (applySearch) {
            dispatch(SearchActionCreators.setSuggest([]));
            dispatch(SearchActionCreators.setResults(results));
            dispatch(SearchActionCreators.setStarshipList(results));
            dispatch(SearchActionCreators.resetFilters());
            return;
        }

        dispatch(SearchActionCreators.setSuggest(results));
    },

    applyFilter: (filter: FiltersEnum, lowValue?: number, topValue?: number) => (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(SearchActionCreators.setFilters(filter, lowValue, topValue));
        const {data, search} = getState();
        const {starships} = data;
        const {searchFilters, searchResults} = search;
        const results = searchByFilter(starships, searchFilters, searchResults);
        dispatch(SearchActionCreators.setStarshipList(results));
    }
};
