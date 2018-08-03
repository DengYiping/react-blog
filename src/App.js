import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavHeader from './component/NavHeader';

const {Content, Footer} = Layout;

const items = [
  {key: '1', value: 'nav1', link: '#'},
  {key: '2', value: 'nav2', link: '#'},
  {key: '3', value: 'nav3', link: '#'},
];


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      current_nav: '2'
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(prevKey, key){
    //get the right key and set it
    this.setState({current_nav: key})
  }

  render() {
    return (
      <Layout>
        <NavHeader items={items} selected={this.state.current_nav} handleSwitch={this.handleMenuClick}/>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Yiping Deng ©2018 All rights reserved.
        </Footer>
      </Layout>
    );
  }
}

export default App;
