import React from 'react';
import './RecentPost.css';
import Post from './Post';
import {Link} from 'react-router-dom';
import moment from 'moment';


class RecentPosts extends React.PureComponent {
    render() {
        return (
            <div className='recentpost'>
                {Object.keys(this.props.posts).sort((key1, key2) => {
                    // sort the recent blogs by the date
                    let m1 = moment(this.props.posts[key1].date);
                    let m2 = moment(this.props.posts[key2].date);
                    if(m1.isAfter(m2)){
                        return -1;
                    } else {
                        return 1;
                    }
                }).map((key, data) =>
                    <Link to={'/post/' + key} key={key}>
                        <Post {...this.props.posts[key]} />
                    </Link>
                )}
            </div>
        );
    }
}

export default RecentPosts;