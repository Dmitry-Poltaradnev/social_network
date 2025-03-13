import React, {useState} from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {deleteLoginThunkCreator} from "../../reducer/authReducer";
// import {Button} from "../common/Button";
import {Avatar, Layout, Space, theme, Button} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";


export const Header = ({collapsed, setCollapsed}: any) => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    // const [collapsed, setCollapsed] = useState(false);

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const { Header: AntdHeader } = Layout;

    return (
        // <header className={s.header}>
        //     <p>poltaradnev@gmail.com</p>
        //     <p>31665</p>
        //     <div>{auth.isAuth && <div className={s.loginWrapper}>
        //         <p>
        //             <Button btnName={'Logout'} btnEffect={() => dispatch(deleteLoginThunkCreator())}/>
        //             -{auth.login}</p>
        //     </div>
        //     }</div>
        // </header>
        <AntdHeader  style={{padding: 0, background: colorBgContainer}}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <Space wrap size={16}>
                <Avatar size={32} icon={<UserOutlined/>}/>
                <p>poltaradnev@gmail.com</p>
                <p>31665</p>
                <div>{auth.isAuth && <div className={s.loginWrapper}>
                    <p>
                        <Button onClick={() => dispatch(deleteLoginThunkCreator())}/>
                        -{auth.login}</p>
                </div>
                }</div>
            </Space>
        </AntdHeader >
    );
};

