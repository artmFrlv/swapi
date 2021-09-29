import {id} from '../../../entities/starship';

export interface BasketState {
    [id: string]: number,
}

export enum BasketActionEnum {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
    INCREMENT_ITEMS_IN_BASKET = 'INCREMENT_ITEMS_IN_BASKET',
    DECREMENT_ITEMS_IN_BASKET = 'DECREMENT_ITEMS_IN_BASKET',
}

export interface AddToBasketAction {
    type: BasketActionEnum.ADD_TO_BASKET,
    payload: id,
}

export interface RemoveFromBasketAction {
    type: BasketActionEnum.REMOVE_FROM_BASKET,
    payload: id,
}

export interface IncrementItemsInBasketAction {
    type: BasketActionEnum.INCREMENT_ITEMS_IN_BASKET,
    payload: id,
}

export interface DecrementItemsInBasketAction {
    type: BasketActionEnum.DECREMENT_ITEMS_IN_BASKET,
    payload: id,
}

export type BasketAction =
    AddToBasketAction |
    RemoveFromBasketAction |
    IncrementItemsInBasketAction |
    DecrementItemsInBasketAction;
