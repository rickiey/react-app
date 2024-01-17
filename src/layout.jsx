// import React from 'react';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {  Layout, Menu } from 'antd';
// import { useState } from 'react';
import ReactDOM from 'react-dom/client'

import MinerInfo from './MinerInfo'

const { Header, Content, Sider } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    // height: '8vh',
    width: 'calc(100%)',
    height: '5%',
    borderRadius: 8,
    overflow: 'hidden',
    // paddingInline: 48,
    // lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  const contentStyle = {
    // textAlign: 'center',
    // height: '90%',
    color: '#131',
    // backgroundColor: '#0958d9',
  };
  const siderStyle = {
    textAlign: 'center',
    // lineHeight: 'calc(60%)',
    // width:"39%",
    height: '100%',
    color: '#9ff',
    backgroundColor: '#05d',
  };

  const layoutStyle = {
    // display: 'flex',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    // height: '98vh',
    minHeight: '100%',

  };

const App = () => {
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    //   } = theme.useToken();
    
    const getWarrorList = ()=> {
        ReactDOM.createRoot(document.getElementById('main_content')).render(<MinerInfo/>)
    }

  return (
    <Layout style={layoutStyle}>
      <Sider width='10%' style={siderStyle}>
        <Menu
            // theme="dark"
            mode="inline"
            background = '0x996'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            style={{
            // height: '100%',
            // background: colorBgContainer,
                // borderRadius: borderRadiusLG,
            }}
            //   items={items2}
            >
                <Menu.Item key="1" onClick={getWarrorList}>
                    f01713789
                </Menu.Item>
  
            </Menu>
      </Sider>
    <Layout style={{display:'flex'}}>
    <Header style={headerStyle}>miner info from fixfox</Header>
      <Content style={contentStyle}>
        <div  id="main_content">
            </div>
      </Content>
    </Layout>
  </Layout>
  );
};
export default App;