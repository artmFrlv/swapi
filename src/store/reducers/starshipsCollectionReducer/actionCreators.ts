import {
    AddStarshipAction,
    SetErrorsAction,
    SetIsLoadingAction,
    StarshipsCollectionActionEnum
} from './types';
import {selectRequiredFields, Starship} from '../../../entities/starship';
import {AppDispatch} from '../../index';
import getId from '../../../utils/getId';
import StarWarsService from '../../../api/StarWarsService';
import {SearchActionCreators} from '../searchReducer/actionCreators';

export const StarshipsCollectionActionCreators = {
    addStarship: (id: string, starship: Starship): AddStarshipAction => ({
        type: StarshipsCollectionActionEnum.ADD_STARSHIP,
        payload: {
            id: id,
            starship,
        }
    }),

    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: StarshipsCollectionActionEnum.SET_IS_LOADING,
        payload,
    }),

    setErrors: (payload: string): SetErrorsAction => ({
        type: StarshipsCollectionActionEnum.SET_ERRORS,
        payload,
    }),

    loadStarships: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(
                StarshipsCollectionActionCreators
                    .setIsLoading(true)
            );

            const starshipLinksArray = await StarWarsService.getFilm()
                .then(({data}) => data.starships);

            const ids = [];
            for (const starshipLink of starshipLinksArray) {
                const id = getId(starshipLink);
                ids.push(id);
                const starship = await StarWarsService.getStarship(starshipLink)
                    .then(({data}) => data);
                dispatch(
                    StarshipsCollectionActionCreators
                        .addStarship(id, selectRequiredFields(starship))
                );
            }

            dispatch(SearchActionCreators.setResults(ids));
            dispatch(SearchActionCreators.setStarshipList(ids));

            dispatch(
                StarshipsCollectionActionCreators
                    .setIsLoading(false)
            );
        } catch (e) {
            dispatch(
                StarshipsCollectionActionCreators
                    .setErrors('Произошла ошибка при загрузке данных')
            );
            dispatch(
                StarshipsCollectionActionCreators
                    .setIsLoading(false)
            );
        }
    }
};
