import React from 'react';
import './RecentPost.css';
import Post from './Post';
import {Link} from 'react-router-dom';


class RecentPosts extends React.PureComponent {
    render() {
        return (
            <div className='recentpost'>
                {Object.keys(this.props.posts).map((key) =>
                    <Link to={'/post/' + key} key={key}>
                        <Post {...this.props.posts[key]} />
                    </Link>
                )}
            </div>
        );
    }
}

export default RecentPosts;