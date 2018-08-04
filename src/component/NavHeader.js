import React from 'react'; 
 import {Layout, Menu} from 'antd';
import { Link } from 'react-router-dom';

const {Header} = Layout;

class NavHeader extends React.Component {
    render() {
        const { location } = this.props;

        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    onClick={this.clickNavBar}
                    style={{ display: 'flex', justifyContent: 'center', lineHeight: '64px'}}
                >
                    {
                            this.props.items.map(item => (
                                <Menu.Item key={item.link}>
                                {
                                    item.external ?
                                        <a href={item.link}>{item.value}</a> :
                                        <Link to={item.link}>{item.value}</Link>
                                }
                                </Menu.Item>
                            ))
                    }
                </Menu>
            </Header>
        );
    }
}

export default NavHeader;