import React from 'react';
import {Field} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators";
import s from './loginForm.module.css'


export const LoginForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={'Email'} name={'email'} component={Input} type="text"
                       validate={[required]}/>
                <br/>
                <Field placeholder={'Password'} name={'password'} component={Input} type="text"
                       validate={[required]}/>
                <br/>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
                <span>remember me</span>
                {props.error && <span className={s.formError}>{props.error}</span>}
                <br/>
                <button>Login</button>
            </form>
        </div>
    );
};

