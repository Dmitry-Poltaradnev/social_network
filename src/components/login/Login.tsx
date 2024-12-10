import React from 'react';
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {loginThunkCreator} from "../../reducer/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {Redirect} from "react-router-dom";
import s from './loginForm.module.css'

const Login = () => {

    const dispatch = useDispatch()

    const {isAuth} = useSelector((state: RootStateType) => state.auth)

    const LoginReduxForm = reduxForm({
        // a unique name for the form
        form: 'login'
    })(LoginForm)

    const onSubmit = ({email, password, rememberMe}: any) => {
        dispatch(loginThunkCreator(email, password, rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/userProfile'}/>;
    }

    return (
        <div className={s.loginWrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;