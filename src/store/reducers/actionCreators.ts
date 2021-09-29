import {StarshipsCollectionActionCreators} from './starshipsCollectionReducer/actionCreators';
import {SearchActionCreators} from './searchReducer/actionCreators';
import {ComparisonActionCreators} from './comparisonReducer/actionCreators';
import {BasketActionCreators} from './basketReducer/actionCreators';

export const allActionCreators = {
    ...StarshipsCollectionActionCreators,
    ...SearchActionCreators,
    ...ComparisonActionCreators,
    ...BasketActionCreators,
};
