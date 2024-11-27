import React from 'react';
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";

const Login = () => {

    const LoginReduxForm = reduxForm({
        // a unique name for the form
        form: 'login'
    })(LoginForm)

    const onSubmit = (formData: any) =>{
        console.log(formData)
    }

    return (
        <div style={{background: 'bisque', color: 'black'}}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;