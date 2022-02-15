import React from 'react';
import "./Profile.scss"


const Post = (props) => {



    return (
        <div className='item'>
            <img src="https://cdn.pixabay.com/photo/2021/03/14/11/14/fish-6093991__340.jpg"></img>
            {props.message}
            
            
            
            <div>
                <span>Likes</span>{props.likesCount}
            </div>
        </div>
    )
}


export default Post;