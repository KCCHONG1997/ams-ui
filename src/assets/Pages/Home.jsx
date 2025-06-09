// https://ant.design/components/layout (Check Header-Content-Footer)

import { Layout, theme } from 'antd';
import NavBar from '../Components/navBar';

const { Header, Content, Footer } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: 'block', flexDirection: 'column', alignItems: 'center', height:'auto', width:'100%', padding:'0', backgroundColor: '#000080' }}>
        <NavBar/>
      </Header>
      <Content style={{ padding: '0 48px', marginTop: '35px'  }}>
 
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        AMS ©{new Date().getFullYear()} Created by NYP Students
      </Footer>
    </Layout>
  );
};
export default Home;