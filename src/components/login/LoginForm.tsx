import React from 'react';
import {Field} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators";
import s from './loginForm.module.css'

export const LoginForm = ({handleSubmit, error, captchaUrl}: any) => {
    return (
        <div>
            {captchaUrl && <img src={captchaUrl.captchaUrl} alt="captcha"/>}
            {captchaUrl &&
                <Field placeholder={'add symbols from captcha'} name={'captcha'} component={Input} type="text"
                       validate={[required]}/>}
            <form onSubmit={handleSubmit}>
                <Field placeholder={'Email'} name={'email'} component={Input} type="text"
                       validate={[required]}/>
                <br/>
                <Field placeholder={'Password'} name={'password'} component={Input} type="text"
                       validate={[required]}/>
                <br/>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
                <span>remember me</span>
                {error && <span className={s.formError}>{error}</span>}
                <br/>
                <button>Login</button>
            </form>
        </div>
    );
};

