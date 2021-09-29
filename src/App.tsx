import React, {useEffect} from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import {useActions} from './hooks/useActions';
import styles from './App.module.css';

// #ebed11
// #1a1a1a
const App = () => {
    const {loadStarships} = useActions();

    useEffect(() => {
        loadStarships();
    }, [loadStarships]);

    return (
        <div className={styles.layout}>
            <Navbar />
            <hr className={styles.hr}/>
            <div className={styles.content}>
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
