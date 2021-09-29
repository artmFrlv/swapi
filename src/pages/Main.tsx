import React, {FC} from 'react';

import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import styles from './Main.module.css'
import {useTypedSelector} from '../hooks/useTypedSelector';

const Main: FC = () => {
    const isLoading = useTypedSelector(state => state.data.isLoading);
    if (isLoading) {
        return (
            <div>Загрузка</div>
        );
    }
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                Звездолёты
            </h1>
            <div className={styles.contentWrapper}>
                <Filters />
                <ProductList />
            </div>
        </div>
    );
};

export default Main;