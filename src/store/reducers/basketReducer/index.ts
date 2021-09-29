import {BasketAction, BasketActionEnum, BasketState} from './types';

const initialState: BasketState = {};

export default function basketReducer(
    state = initialState,
    action: BasketAction
) {
    switch (action.type) {
        case BasketActionEnum.ADD_TO_BASKET:
            return {
                ...state,
                [action.payload]: 1,
            };

        case BasketActionEnum.REMOVE_FROM_BASKET: {
            const basket = {};
            for (const key of Object.keys(state)) {
                if (key !== action.payload) {
                    (basket as BasketState)[key] = state[key];
                }
            }
            return {
                ...basket
            };
        }

        case BasketActionEnum.INCREMENT_ITEMS_IN_BASKET:
            return {
                ...state,
                [action.payload]: state[action.payload] + 1,
            };

        case BasketActionEnum.DECREMENT_ITEMS_IN_BASKET:
            return {
                ...state,
                [action.payload]: state[action.payload] - 1,
            };

        default:
            return state;
    }
}