import {id} from '../../../entities/starship';
import {
    AddToBasketAction,
    BasketActionEnum, DecrementItemsInBasketAction,
    IncrementItemsInBasketAction,
    RemoveFromBasketAction
} from './types';

export const BasketActionCreators = {
    addToBasket: (payload: id): AddToBasketAction => ({
        type: BasketActionEnum.ADD_TO_BASKET,
        payload,
    }),

    removeFromBasket: (payload: id): RemoveFromBasketAction => ({
        type: BasketActionEnum.REMOVE_FROM_BASKET,
        payload,
    }),

    incrementItemsInBasket: (payload: id): IncrementItemsInBasketAction => ({
        type: BasketActionEnum.INCREMENT_ITEMS_IN_BASKET,
        payload,
    }),

    decrementItemsInBasket: (payload: id): DecrementItemsInBasketAction => ({
        type: BasketActionEnum.DECREMENT_ITEMS_IN_BASKET,
        payload,
    }),
};
