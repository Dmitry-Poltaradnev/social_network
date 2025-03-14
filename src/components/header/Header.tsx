import React from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {deleteLoginThunkCreator} from "../../reducer/authReducer";
import {Avatar, Layout, Space, theme, Button} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import defaultUserPhoto from "../../img/default-avatar-profile.avif";

type HeaderType = {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Header = ({collapsed, setCollapsed}: HeaderType) => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    const {
        user
    } = useSelector((state: RootStateType) => state.profile)

    const photoSrc = user?.photos?.large ?? user?.photos?.small ?? defaultUserPhoto;

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const {Header: AntdHeader} = Layout;

    return (
        <AntdHeader style={{
            background: colorBgContainer,
            height: 90
        }}>
            <Space wrap size={32} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
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
                <Avatar size={60} style={{background: 'gray'}} src={auth.isAuth ? photoSrc : <UserOutlined/>}/>
                <p>poltaradnev@gmail.com</p>
                <p>31665</p>
                <div>{auth.isAuth && <div className={s.loginWrapper}>
                    <Button type={"primary"} onClick={() => dispatch(deleteLoginThunkCreator())}>Logout</Button>
                    <p>{auth.login}</p>
                </div>
                }</div>
            </Space>
        </AntdHeader>
    );
};

