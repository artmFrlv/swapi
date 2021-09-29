import {combineReducers} from 'redux';

import starshipsReducer from './starshipsCollectionReducer';
import searchReducer from './searchReducer';
import comparisonReducer from './comparisonReducer';
import basketReducer from './basketReducer';

export const rootReducer = combineReducers({
    data: starshipsReducer,
    search: searchReducer,
    comparison: comparisonReducer,
    basket: basketReducer,
});
