import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {loginThunkCreator} from "../../reducer/authReducer";
import {RootStateType} from "../../reducer/store";
import {Redirect} from "react-router-dom";

type LoginFormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: string;
};

const Login = () => {
    const dispatch = useDispatch();
    const {isAuth, captchaUrl} = useSelector((state: RootStateType) => state.auth);

    const onFinish = (values: LoginFormValues) => {
        dispatch(loginThunkCreator(values.email, values.password, values.rememberMe, values.captcha || ''));
    };

    if (isAuth) {
        return <Redirect to="/userProfile"/>;
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onFinish={onFinish} layout="vertical" style={{maxWidth: 400}}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: "Please enter your email!"}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: "Please enter your password!"}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="rememberMe" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {captchaUrl && (
                    <>
                        <img src={captchaUrl} alt="captcha"/>
                        <Form.Item
                            name="captcha"
                            rules={[{required: true, message: "Please enter the captcha!"}]}
                        >
                            <Input placeholder="Enter captcha"/>
                        </Form.Item>
                    </>
                )}

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
