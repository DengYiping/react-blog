import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import NavHeader from './component/NavHeader';
import RecentPosts from './component/RecentPosts';
import Post from './component/Post';
import {withRouter, Route} from 'react-router-dom';
import {withJson} from './component/Request';

const {Content, Footer} = Layout;

const header_items = [
  {value: 'Recent Blog', link: '/'},
  {value: 'About Me', link: 'https://ydeng.me', external: true},
  {value: 'Github', link: 'https://github.com/DengYiping', external: true},
];

class App extends Component {


  componentDidMount(){
  }
  render() {
    const WrappedNavHeader = withRouter(NavHeader);
    const WrappedRecentPosts = withJson(RecentPosts, '/json/blogs.json', 'posts');

    const DataPost = (props) => {
      return (<Post {...props.data} />);
    }
    
    return (
      <Layout>
        <WrappedNavHeader items={header_items} handleSwitch={this.handleMenuClick}/>
        <Content style={{ padding: '0 50px', marginTop: 64, minHeight:'100vh'}}>
          <Route exact path='/' render={() => 
          {
            document.title = 'Yiping\'s Dev Blog';
            return <WrappedRecentPosts />
          }} />
          <Route path='/post/:id' render={props => {
            document.title = 'Yiping\'s Dev Blog: ' + props.match.params.id.replace('_', ' ');
            let WrappedPost = withJson(DataPost, `/json/${props.match.params.id}.json`, 'data');
            return (<WrappedPost />);
          }} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Yiping Deng ©2018 All rights reserved.
        </Footer>
      </Layout>
    );
  }
}

export default App;
