import {ComparisonAction, ComparisonActionEnum, ComparisonState} from './types';


const initialState: ComparisonState = {
    starships: [],
};

export default function comparisonReducer(
    state = initialState,
    action: ComparisonAction
): ComparisonState {
    switch (action.type) {
        case ComparisonActionEnum.REMOVE_FROM_COMPARISON: {
            return {
                ...state,
                starships: [
                    ...state.starships.filter(id => id !== action.payload)
                ]
            };
        }

        case ComparisonActionEnum.ADD_TO_COMPARISON:
            return {
                ...state,
                starships: [
                    ...state.starships,
                    action.payload
                ]
            };

        default:
            return state;
    }
}