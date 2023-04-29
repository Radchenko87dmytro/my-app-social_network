import React from 'react';
import "./Profile.scss"
import Post from './Post';


const MyPosts = (props) => {

    let postsElement = props.posts.map((p, pos)=> 
        <Post message={p.message } likesCount={p.likesCount} key={pos}></Post>
        )
    
        let newFormElement=React.createRef();
         
        let onAddPost = ()=>{
           props.addPost()
        }

    let onPostChange = ()=>{
        let text = newFormElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className='postsBlock'>
            <h2>My posts</h2>    
            <div>
                <textarea onChange={onPostChange} ref={newFormElement} 
                            value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost} >Add Posts</button>
            </div>
            <div>
                <div className='posts'>

                    {postsElement}
                    {/* <Post message={postData[0].message } likesCount={postData[0].likesCount}></Post>
                    <Post message={postData[1].message } likesCount={postData[1].likesCount}></Post> */}
                    
                </div>
            </div>
        </div>
    )
}

export default MyPosts;