import React, {FC} from 'react';

import StarshipCard from '../StarshipCard';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import styles from './ProductList.module.css';

const ProductList: FC = () => {
    const starships = useTypedSelector(state => state.search.starshipList);
    const compare = useTypedSelector(state => state.comparison.starships);
    const basket = useTypedSelector(state => state.basket);
    return (
        <div className={styles.list}>
            {starships.map((id) =>
                <StarshipCard
                    key={id}
                    id={id}
                    compareActive={compare.includes(id)}
                    isInBasket={Boolean(basket[id])}
                />
            )}
        </div>
    );
};

export default ProductList;