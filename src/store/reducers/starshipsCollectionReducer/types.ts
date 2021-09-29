import {Starship, StarshipsCollection} from '../../../entities/starship';

export interface StarshipsCollectionState {
    starships: StarshipsCollection;
    isLoading: boolean;
    errors: string;
}

export enum StarshipsCollectionActionEnum {
    ADD_STARSHIP = 'ADD_STARSHIP',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERRORS = 'SET_ERRORS',
}

export interface AddStarshipAction {
    type: StarshipsCollectionActionEnum.ADD_STARSHIP;
    payload: {
        id: string,
        starship: Starship,
    };
}

export interface SetIsLoadingAction {
    type: StarshipsCollectionActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorsAction {
    type: StarshipsCollectionActionEnum.SET_ERRORS;
    payload: string;
}

export type StarshipsCollectionAction =
    AddStarshipAction |
    SetIsLoadingAction |
    SetErrorsAction;
