import React from 'react';
import {Field} from "redux-form";

export const LoginForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={'Login'} name={'login'} component={'input'} type="text"/>
                <br/>
                <Field placeholder={'Password'} name={'password'} component={'input'} type="text"/>
                <br/>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>
                <span>remember me</span>
                <br/>
                <button>Login</button>
            </form>
        </div>
    );
};

