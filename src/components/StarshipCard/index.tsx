import React, {FC} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import styles from './StarshipCard.module.css';
import {useActions} from '../../hooks/useActions';
import {Link} from 'react-router-dom';
import {RouteNames} from '../../router';

interface StarshipCardProps {
    id: string;
    compareActive: boolean,
    isInBasket: boolean,
}

const StarshipCard: FC<StarshipCardProps> = ({id, compareActive, isInBasket}) => {
    const starshipInfo = useTypedSelector(state => state.data.starships[id]);
    const {addToComparison, removeFromComparison, addToBasket} = useActions();

    const isInStock = starshipInfo.cost_in_credits !== 'unknown';
    const price = isInStock ? starshipInfo.cost_in_credits : 'Нет в наличии';
    const srcToSvg = `./compare${compareActive ? 'Active' : ''}.svg`;
    const classNameForBasket = [styles.basket];
    if (isInBasket) {
        classNameForBasket.push(styles.active);
    }

    const comparing = () => {
        if (compareActive) {
            return removeFromComparison(id);
        }
        return addToComparison(id);
    };

    const add = () => {
        if (isInStock) {
            return addToBasket(id);
        }
        return;
    };

    return (
        <div className={styles.card}>
            <div>
                <img src={`./img/${starshipInfo.name}.png`} width={150} height={150} alt={''}/>
            </div>
            <div className={styles.name}>
                {starshipInfo.name}
            </div>
            <div className={styles.price}>
                {price}
            </div>
            <div className={styles.btns}>
                <div
                    className={classNameForBasket.join(' ')}
                    onClick={add}
                >
                    {
                        isInBasket ?
                            <Link to={RouteNames.BASKET} className={styles.link}>
                                В корзину
                            </Link> :
                            <div>
                                В корзину
                            </div>
                    }
                </div>
                <div className={styles.comparison} onClick={comparing}>
                    <img src={srcToSvg} height={24} width={24} alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default StarshipCard;