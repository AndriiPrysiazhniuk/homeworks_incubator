import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { AppStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import s2 from '../../s1-main/App.module.css';
import { Loader } from './Loader';

const HW10 = () => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(isLoading));
        setTimeout(() => {
            dispatch(loadingAC(!isLoading));
        }, 1500);
    };

    return (
        <div id="hw10">
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id="hw10-loading">
                        <Loader />
                    </div>
                ) : (
                    <SuperButton id="hw10-button-start-loading" onClick={setLoading}>
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    );
};

export default HW10;
