import {id} from '../../../entities/starship';
import {AddToComparisonAction, ComparisonActionEnum, RemoveFromComparisonAction} from './types';

export const ComparisonActionCreators = {
    addToComparison: (payload: id): AddToComparisonAction => ({
        type: ComparisonActionEnum.ADD_TO_COMPARISON,
        payload,
    }),

    removeFromComparison: (payload: id): RemoveFromComparisonAction => ({
        type: ComparisonActionEnum.REMOVE_FROM_COMPARISON,
        payload,
    })
};
