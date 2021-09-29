import React, {FC} from 'react';
import styles from './BasketItem.module.css';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

interface BasketItemProps {
    count: number,
    id: string,
}

const BasketItem: FC<BasketItemProps> = ({id, count}) => {
    const starshipInfo = useTypedSelector(state => state.data.starships[id]);
    const {incrementItemsInBasket, decrementItemsInBasket, removeFromBasket} = useActions();
    const remove = (id: string) => {
        if (count === 1) {
            return;
        }
        return decrementItemsInBasket(id);
    };
    return (
        <div className={styles.item}>
            <div>
                <img src={`./img/${starshipInfo.name}.png`} width={150} height={150} alt={''}/>
            </div>
            <div className={styles.name}>{starshipInfo.name}</div>
            <div className={styles.info}>
                <div className={styles.all}>{Number(starshipInfo.cost_in_credits) * count}</div>
                <div className={styles.sub}>{`${Number(starshipInfo.cost_in_credits)} x ${count}`}</div>
                <div className={styles.btns}>
                    <span className={styles.btn} onClick={() => remove(id)}>-</span>
                    <span className={styles.count}>{count}</span>
                    <span className={styles.btn} onClick={() => incrementItemsInBasket(id)}>+</span>
                </div>
                <div className={styles.remove} onClick={() => removeFromBasket(id)}>
                    Убрать из корзины
                </div>
            </div>
        </div>
    );
};

export default BasketItem;