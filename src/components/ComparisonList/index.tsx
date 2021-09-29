import React, {FC} from 'react';
import styles from './ComparisonList.module.css';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import StarshipComparison from '../StarshipComparison';
import StarshipCard from '../StarshipCard';

const ComparisonList: FC = () => {
    const filters = useTypedSelector(state => state.search.searchFilters);
    const filterArray = Object.keys(filters);

    const compare = useTypedSelector(state => state.comparison.starships);
    const basket = useTypedSelector(state => state.basket);

    return (
        <div className={styles.comparison}>
            <div className={styles.fields}>
                {
                    filterArray.slice(1).map(filterName =>
                        // @ts-ignore
                        <div className={styles.field}>{filters[filterName].title}</div>
                    )
                }
            </div>
            <div className={styles.starships}>
                {
                    compare.map(id =>
                        <div className={styles.info} key={id}>
                            <StarshipCard
                                key={id}
                                id={id}
                                compareActive={true}
                                isInBasket={Boolean(basket[id])}
                            />
                            <StarshipComparison key={id} id={id}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ComparisonList;