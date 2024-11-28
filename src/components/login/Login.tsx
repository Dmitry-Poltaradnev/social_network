import React from 'react';
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
// import {deleteLoginThunkCreator} from "../../reducer/authReducer";

const Login = () => {

    const LoginReduxForm = reduxForm({
        // a unique name for the form
        form: 'login'
    })(LoginForm)

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div style={{background: 'bisque', color: 'black'}}>
            {/*<button onClick={deleteLoginThunkCreator()}>отлогиниться</button>*/}
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;