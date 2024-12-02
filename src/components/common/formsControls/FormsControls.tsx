import React from 'react';
import s from './formsControls.module.css'

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <input {...input} {...props} />
            {hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    );
};

export const TextArea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <textarea {...input} {...props} />
            {hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    );
};



