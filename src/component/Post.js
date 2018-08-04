import React from 'react';
import {Card} from 'antd';
import ReactMarkdown from 'react-markdown';
import './Post.css';
import CodeBlock from './CodeBlock';

class Post extends React.PureComponent {
    render() {
        return (
            <Card title={<h1>{this.props.title}</h1>} style={{ margin: '20px 40px' }} className='post-card'>
                <p className='date'>{this.props.date}</p>
                <ReactMarkdown source={this.props.md} className='post-body' renderers={{code: CodeBlock}}/>
            </Card>
        );
    }
}

export default Post;