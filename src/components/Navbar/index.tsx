import React, {FC} from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import Search from '../Search';
import {RouteNames} from '../../router';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Navbar: FC = () => {
    const compare = useTypedSelector(state => state.comparison.starships);
    const basket = useTypedSelector(state => state.basket);
    let count = 0;
    for (const key of Object.keys(basket)) {
        count += basket[key];
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.logoBlock}>
                <Link to={RouteNames.MAIN}>
                    <img className={styles.logo} src={'./sw_logo.png'} alt={''}/>
                </Link>
            </div>
            <Search />
            <div className={styles.comparison}>
                <Link to={RouteNames.COMPARISON}>
                    <img src={'./compareActive.svg'} height={24} width={24} alt={''}/>
                    {
                        compare.length > 0 &&
                        <div className={styles.count}>
                            {compare.length}
                        </div>
                    }
                </Link>
            </div>
            <div className={styles.basket}>
                <Link to={RouteNames.BASKET}>
                    <img src={'./basket.svg'} height={24} width={24} alt={''}/>
                    {
                        count > 0 &&
                        <div className={styles.count}>
                            {count}
                        </div>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Navbar;