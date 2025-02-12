import React from 'react';
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {loginThunkCreator} from "../../reducer/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {Redirect} from "react-router-dom";
import s from './loginForm.module.css'

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
type LoginFormPropsType = {
    captchaUrl: string,
}

const Login : React.FC = () => {

    const dispatch = useDispatch()

    const {isAuth, captchaUrl} = useSelector((state: RootStateType) => state.auth)

    const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormPropsType>({
        // a unique name for the form
        form: 'login'
    })(LoginForm)

    const onSubmit = (values: LoginFormValuesType) => {
        dispatch(loginThunkCreator(values.email, values.password, values.rememberMe, values.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/userProfile'}/>;
    }

    return (
        <div className={s.loginWrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl ?? ""}/>
        </div>
    );
};

export default Login;