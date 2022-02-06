import React from 'react';
import "./Profile.scss"
import Post from './Post';


const MyPosts = () => {
    
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>New Posts</button>

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