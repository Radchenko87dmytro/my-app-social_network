import React from 'react';
import "./Profile.scss"
import Post from './Post';


const MyPosts = (props) => {
    
    return (
        <div className='postsBlock'>
            <h2>My posts</h2>    
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New Posts</button>
            </div>
            <div>
                <div className='posts'>
                    <Post message="How, are you?" fill=" cool" likes=" 10"></Post>
                    <Post message="It's my first post" likes=" 20"></Post>
                    <Post say="perfect"></Post>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;