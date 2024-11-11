import React from 'react';
import loader from "../../img/loader.svg";
import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loaderWrapperStyle}>
            <img className={s.imgLoader} src={loader} alt="loadingImage"/>
        </div>
    );
};

