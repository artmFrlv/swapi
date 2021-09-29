import {
    StarshipsCollectionAction,
    StarshipsCollectionActionEnum,
    StarshipsCollectionState
} from './types';
import {StarshipsCollection} from '../../../entities/starship';


const initialState: StarshipsCollectionState = {
    starships: {} as StarshipsCollection,
    isLoading: false,
    errors: '',
};

export default function starshipsCollectionReducer(
    state = initialState,
    action: StarshipsCollectionAction
): StarshipsCollectionState {
    switch (action.type) {
        case StarshipsCollectionActionEnum.ADD_STARSHIP:
            return {
                ...state,
                starships: {
                    ...state.starships,
                    [action.payload.id]: action.payload.starship,
                }
            };
        case StarshipsCollectionActionEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case StarshipsCollectionActionEnum.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
}
