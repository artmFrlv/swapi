import {SearchAction, SearchActionEnum, SearchState} from './types';
import {initFilters} from '../../../entities/filters';

const initialState: SearchState = {
    searchResults: [],
    suggest: [],
    searchFilters: initFilters,
    starshipList: [],
};

export default function searchReducer(
    state = initialState,
    action: SearchAction
): SearchState {
    switch (action.type) {
        case SearchActionEnum.SET_SUGGEST:
            return {...state, suggest: action.payload};

        case SearchActionEnum.SET_RESULTS:
            return {...state, searchResults: action.payload};

        case SearchActionEnum.SET_FILTERS:
            return {
                ...state,
                searchFilters: {
                    ...state.searchFilters,
                    [action.payload.filter]: {
                        ...state.searchFilters[action.payload.filter],
                        topValue: action.payload.topValue,
                        lowValue: action.payload.lowValue,
                    }
                },
            };

        case SearchActionEnum.SET_STARSHIP_LIST:
            return {
                ...state,
                starshipList: action.payload
            };

        case SearchActionEnum.RESET_FILTERS:
            return {
                ...state,
                searchFilters: {
                    ...initFilters
                }
            };

        default:
            return state;
    }
}
