import React from 'react';
import {LoginForm, LoginFormOwnProps, LoginFormPropsType} from './LoginForm';
import {reduxForm} from 'redux-form';
import {loginThunkCreator} from '../../reducer/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../reducer/store';
import {Redirect} from 'react-router-dom';
import s from './loginForm.module.css';

const Login = () => {

    const dispatch = useDispatch();

    const {isAuth, captchaUrl} = useSelector((state: RootStateType) => state.auth);

    const LoginReduxForm = reduxForm<LoginFormPropsType, LoginFormOwnProps>({
        form: 'login',
    })(LoginForm);

    const onSubmit = ({email, password, rememberMe, captcha}: LoginFormPropsType) => {
        dispatch(loginThunkCreator(email, password, rememberMe, captcha));
    };

    if (isAuth) {
        return <Redirect to={'/userProfile'}/>;
    }

    return (
        <div className={s.loginWrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};

export default Login;
