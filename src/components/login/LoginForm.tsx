import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {required} from '../../utils/validators';
import s from './loginForm.module.css';
import {Button} from "../common/Button";

export type LoginFormPropsType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
};

export type LoginFormOwnProps = {
    captchaUrl: string | null;
};

export const LoginForm: React.FC<
    InjectedFormProps<LoginFormPropsType, LoginFormOwnProps> & LoginFormOwnProps
> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div>
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && (
                <Field
                    placeholder={'add symbols from captcha'}
                    name={'captcha'}
                    component={Input}
                    type="text"
                    validate={[required]}
                />
            )}
            <form onSubmit={handleSubmit}>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    type="text"
                    validate={[required]}
                />
                <br/>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    type="text"
                    validate={[required]}
                />
                <br/>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
                <span>remember me</span>
                {error && <span className={s.formError}>{error}</span>}
                <br/>
                <Button btnName={'Login'} btnEffect={() => handleSubmit}/>
            </form>
        </div>
    );
};
