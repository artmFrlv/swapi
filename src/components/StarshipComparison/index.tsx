import React, {FC} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import styles from './StarshipComparison.module.css';

interface StarshipComparisonProps {
    id: string;
}

const StarshipComparison: FC<StarshipComparisonProps> = ({id}) => {
    const starshipInfo = useTypedSelector(state => state.data.starships[id]);

    return (
        <div className={styles.info}>
            <div>{starshipInfo.length}</div>
            <div>{starshipInfo.max_atmosphering_speed}</div>
            <div>{starshipInfo.crew}</div>
            <div>{starshipInfo.passengers}</div>
            <div>{starshipInfo.cargo_capacity}</div>
            <div className={styles.double}>{starshipInfo.consumables}</div>
            <div className={styles.double}>{starshipInfo.hyperdrive_rating}</div>
        </div>
    );
};

export default StarshipComparison;