import React from 'react';
import s from './formsControls.module.css';
import {WrappedFieldProps} from 'redux-form';

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>;
type CustomTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input: React.FC<WrappedFieldProps & CustomInputProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && Boolean(meta.error);
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <input {...input} {...props} />
            {hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    );
};

export const TextArea: React.FC<WrappedFieldProps & CustomTextareaProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && Boolean(meta.error);
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <textarea {...input} {...props} />
            {hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    );
};
