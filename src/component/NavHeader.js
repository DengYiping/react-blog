import React from 'react';
import {Layout, Menu} from 'antd';
const {Header} = Layout;

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
        this.clickNavBar = this.clickNavBar.bind(this);
    }

    clickNavBar(item, key, keyPath) {
        if(this.props.handleSwitch !== undefined){
            //handle the event
            this.props.handleSwitch(this.props.selected, item.key);
        }
    }

    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[this.props.selected]}
                    onClick={this.clickNavBar}
                    style={{ display: 'flex', lineHeight: '64px', justifyContent: 'center'}}
                >
                    {
                        this.props.handleSwitch === undefined ? (
                            this.props.items.map(item => (
                                <Menu.Item key={item.key}><a href={item.link}>{item.value}</a></Menu.Item>
                        ))) : (
                            this.props.items.map(item => (
                                <Menu.Item key={item.key}>{item.value}</Menu.Item>
                        )))
                    }
                </Menu>
            </Header>
        );
    }
}

export default NavHeader;