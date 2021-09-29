import React, {FC} from 'react';
import styles from './Basket.module.css';
import {useTypedSelector} from '../hooks/useTypedSelector';
import BasketItem from '../components/BasketItem';

const Basket: FC = () => {
    const basket = useTypedSelector(state => state.basket);
    const starshipIds = Object.keys(basket);
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Корзина</h1>
            <div className={styles.contentWrapper}>
                {
                    starshipIds.map((id) =>
                        <BasketItem key={id} count={basket[id]} id={id}/>
                    )
                }
            </div>
        </div>
    );
};

export default Basket;