import {Filters, FiltersEnum} from '../../../entities/filters';
import {id} from '../../../entities/starship';

export interface SearchState {
    searchResults: id[] | [];
    suggest: id[] | [];
    searchFilters: Filters;
    starshipList: id[] | [];
}

export enum SearchActionEnum {
    SET_FILTERS = 'SET_FILTERS',
    SET_RESULTS = 'SET_RESULTS',
    SET_SUGGEST = 'SET_SUGGEST',
    SET_STARSHIP_LIST = 'SET_STARSHIP_LIST',
    RESET_FILTERS = 'RESET_FILTERS',
}

export interface SetFiltersAction {
    type: SearchActionEnum.SET_FILTERS,
    payload: {
        filter: FiltersEnum,
        topValue?: number,
        lowValue?: number,
    }
}

export interface SetResultsAction {
    type: SearchActionEnum.SET_RESULTS,
    payload: id[],
}

export interface SetSuggestAction {
    type: SearchActionEnum.SET_SUGGEST,
    payload: id[],
}

export interface SetStarshipList {
    type: SearchActionEnum.SET_STARSHIP_LIST,
    payload: id[],
}

export interface ResetFilters {
    type: SearchActionEnum.RESET_FILTERS,
}

export type SearchAction =
    SetFiltersAction |
    SetResultsAction |
    SetSuggestAction |
    SetStarshipList |
    ResetFilters;
