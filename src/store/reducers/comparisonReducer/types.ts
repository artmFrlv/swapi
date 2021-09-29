import {id} from '../../../entities/starship';


export interface ComparisonState {
    starships: id[];
}

export enum ComparisonActionEnum {
    ADD_TO_COMPARISON = 'ADD_TO_COMPARISON',
    REMOVE_FROM_COMPARISON = 'REMOVE_FROM_COMPARISON',
}

export interface AddToComparisonAction {
    type: ComparisonActionEnum.ADD_TO_COMPARISON,
    payload: id,
}

export interface RemoveFromComparisonAction {
    type: ComparisonActionEnum.REMOVE_FROM_COMPARISON,
    payload: id,
}

export type ComparisonAction =
    AddToComparisonAction |
    RemoveFromComparisonAction;