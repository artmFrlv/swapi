import React, {FC} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Filter from '../Filter';
import styles from './Filters.module.css';

const Filters: FC = () => {
    const filters = useTypedSelector(state => state.search.searchFilters);
    const filterArray = Object.keys(filters);

    return (
        <div className={styles.filters}>
            {
                filterArray.map((filterName) =>
                    // @ts-ignore
                    <Filter key={filterName} {...filters[filterName]} filterName={filterName}/>
                )
            }
        </div>
    );
};

export default Filters;