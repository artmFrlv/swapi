import React, {FC, useState} from 'react';
import styles from './Search.module.css'
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import Suggest from '../Suggest';

const Search: FC = () => {
    const suggest = useTypedSelector(state => state.search.suggest);
    const {searchStarships, setSuggest, setStarshipList} = useActions();
    const [searchString, setSearchString] = useState('');
    const [focusInput, setFocusInput] = useState(false);

    const search = (searchQuery: string, applySearch: boolean) => {
        searchStarships(searchQuery, applySearch);
    };

    const chooseStarship = (id: string) => {
        setFocusInput(false);
        setStarshipList([id]);
    };

    const showSuggests = suggest.length > 0;

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                value={searchString}
                onFocus={() => setFocusInput(true)}
                onChange={(e) => {
                    if (e.target.value) {
                        search(e.target.value, false);
                    } else {
                        setSuggest([]);
                    }
                    return setSearchString(e.target.value);
                }}
            />
            <div className={styles.searchIcon} onClick={() => search(searchString, true)}>
                <img src={'./search-icon.png'} width={25} height={24} alt={''}/>
            </div>
            {
                (showSuggests && focusInput) &&
                <div className={styles.suggests}>
                    {suggest.map((elem) =>
                        <Suggest key={elem} id={elem} choose={chooseStarship}/>
                    )}
                </div>
            }
        </div>
    );
};

export default Search;