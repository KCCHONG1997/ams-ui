import navBarItems from "../ui-config/navBarConfig";
import { Menu, Row, Col, Input } from 'antd'; // Please check antdesign for usage references, please check must check 100% + chop read and check the documentation :3 
import { LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons'; // https://ant.design/components/icon

const NavBar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Row style={{ backgroundColor: "white", width: '100%'}}>
                <Col span={8} style={{ display:'flex', justifyContent:'left', paddingLeft: "30px"}} ><span>AMS</span></Col>
                <Col span={8} ><Input placeholder="Search here" /></Col>
                <Col span={8} style={{ display:'flex', justifyContent:"right", paddingRight: "30px" }}>
                    <Row >
                        <Col><LoginOutlined style={{ fontSize: "22px", padding: "10px"}} /></Col>
                        <Col><ShoppingCartOutlined style={{ fontSize: "24px", padding: "10px"}} /></Col>
                    </Row>
                </Col>
            </Row>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={navBarItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                }}
            />
        </div>
    )
}

export default NavBar;
