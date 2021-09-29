import React from 'react';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import styles from './Suggest.module.css'

const Suggest = ({id, choose}: {id: string, choose: (id: string) => void}) => {
    const starshipName = useTypedSelector(state => state.data.starships[id].name);

    return (
        <div className={styles.suggest} onClick={() => choose(id)}>
            {starshipName}
        </div>
    );
};

export default Suggest;
