import React, {ChangeEvent, FC, useState} from 'react';
import {FilterOptions} from '../../entities/filters';
import styles from './Filter.module.css'
import {useActions} from '../../hooks/useActions';

const Filter: FC<FilterOptions> = ({name,lowValue, topValue, description, title}) => {
    const [showDescription, setShowDescription] = useState(false);

    const change = (e: ChangeEvent<HTMLInputElement>, isLow: boolean) => {
        const inputValue = e.target.value === '' ? undefined : Number(e.target.value);
        if (isLow) {
            applyFilter(name, inputValue, topValue);
        } else {
            applyFilter(name, lowValue, inputValue);
        }
    };

    const {applyFilter} = useActions();
    return (
        <div className={styles.filter}>
            <div className={styles.title}>
                <div>{title}</div>
                <div className={styles.help} onClick={() => setShowDescription(true)}>
                    <img src={'./help.svg'} width={16} height={16} alt={''}/>
                </div>
            </div>
            <div className={styles.inputs}>
                <input
                    className={styles.input}
                    onChange={(e) => change(e, true)}
                />
                <div>-</div>
                <input
                    className={styles.input}
                    onChange={(e) => change(e, false)}
                />
            </div>
            {
                showDescription &&
                <div className={styles.description} onClick={() => setShowDescription(false)}>
                    <div>
                        {description}
                    </div>
                </div>
            }
        </div>
    );
};

export default Filter;