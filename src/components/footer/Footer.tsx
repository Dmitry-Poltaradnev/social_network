import React from 'react';
import {Layout, theme} from 'antd';

export const FooterComponent = () => {
    const {Footer} = Layout;
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Footer style={{
            textAlign: 'center',
            padding: '10px 0',
            background: colorBgContainer
        }}>
            2025 Social Network
        </Footer>
    );
};
