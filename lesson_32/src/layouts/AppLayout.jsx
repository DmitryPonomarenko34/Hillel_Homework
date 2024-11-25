import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Flex, Layout, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  color: '#fff',
  height: 64,
  lineHeight: '64px',
  padding: '0px'
};

const headerInner = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,

  lineHeight: '120px',
  color: '#fff'
};

const contentInner = {
  flex: '1 1 auto',
  paddingTop: '40px'
};

const layoutStyle = {
  height: '100dvh'
};

const flexStyle = {
  height: '100%'
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff'
};

const items = [
  {
    key: 'home',
    label: <NavLink to={'/'}>Home</NavLink>
  },
  {
    key: 'todo',
    label: <NavLink to={'/todo'}>Todo</NavLink>
  },
  {
    key: 'swapi',
    label: <NavLink to={'/swapi'}>Swapi</NavLink>
  }
];

export default function AppLayout() {
  const [current, setCurrent] = useState('home');
  const setActiveItem = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout style={layoutStyle}>
      <Flex style={flexStyle} vertical>
        <Header style={headerStyle}>
          <div className="container">
            <div style={headerInner}>
              <div className="demo-logo" />
              <Menu
                theme="dark"
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                onClick={setActiveItem}
                defaultSelectedKeys={['home']}
                style={{
                  flex: 1,
                  minWidth: 0
                }}
              />
            </div>
          </div>
        </Header>
        <Content style={contentStyle}>
          <div className="container">
            <div style={contentInner}>
              <Outlet />
            </div>
          </div>
        </Content>
        <Footer style={footerStyle}>Copyright © 2024</Footer>
      </Flex>
    </Layout>
  );
}
