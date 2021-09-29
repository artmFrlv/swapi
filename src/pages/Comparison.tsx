import React, {FC} from 'react';
import styles from './Comparison.module.css';
import ComparisonList from '../components/ComparisonList';
import {useTypedSelector} from '../hooks/useTypedSelector';

const Comparison: FC = () => {
    const compare = useTypedSelector(state => state.comparison.starships);
    if (compare.length === 0) {
        return (
            <h1 className={styles.title}>
                Выберите звездолеты для сравнения
            </h1>
        )
    }
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                Сравнение звездолетов
            </h1>
            <div className={styles.contentWrapper}>
                <ComparisonList />
            </div>
        </div>
    );
};

export default Comparison;