import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {MemberProfile} from "./components/membersNetwork/memberProfile/MemberProfile";
import {Route, Switch, useHistory} from 'react-router-dom';
import {UsersComponents} from "./components/membersNetwork/Members";
import {UserProfileComponent} from "./components/mainUserProfile/UserProfile";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./reducer/appReducer";
import {RootStateType} from "./reducer/store";
import {Loader} from "./components/common/loader/Loader";

import {
    LaptopOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import {ChatPage} from "./components/chat/ChatPage";
import {FooterComponent} from "./components/footer/Footer";

// Используем lazy для ленивой загрузки компонентов
// const DialogsComponent = lazy(() => import('./components/dialogs/Dialogs'));
// const FriendsListComponent = lazy(() => import("./components/friendList/FriendsList"));

function App() {

    const {Sider, Content} = Layout;

    const [collapsed, setCollapsed] = useState(false);

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    const dispatch = useDispatch();
    const initialized = useSelector((state: RootStateType) => state.app.initialized);

    const navigate = useHistory();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) {
        return <Loader/>;
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['/userProfile']}
                    onClick={({key}) => navigate.push(key)}
                    items={[
                        {
                            key: '/userProfile',
                            icon: <UserOutlined/>,
                            label: 'User Profile',
                        },
                        {
                            key: '/users',
                            icon: <TeamOutlined/>,
                            label: 'Users',
                        },
                        {
                            key: '/chatPage',
                            icon: <LaptopOutlined/>,
                            label: 'Chat',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Switch>
                        <Route path="/" exact render={() => <UserProfileComponent/>}/>
                        <Route path="/userProfile" exact render={() => <UserProfileComponent/>}/>
                        <Route path="/profile/:userId" render={() => <MemberProfile/>}/>
                        <Route path="/users" render={() => <UsersComponents/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/chatPage" render={() => <ChatPage/>}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </Content>
                <FooterComponent/>
            </Layout>
        </Layout>
    )
}

export default App;
