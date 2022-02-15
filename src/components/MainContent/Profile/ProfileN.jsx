import React from 'react';
import "./Profile.scss"
import MyPosts from "./MyPosts"

const ProfileN = (props) => {

  // let posts = [
  //        {id: 1, message: "How, are you?", likesCount: 12},
  //        {id: 2, message: "It's my first post", likesCount: 11},  
  //    ]




  return (
    <div className='content'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921297__340.jpg"></img>
      </div>
      <div className='discription'>
        ava+discription
      </div>
      <MyPosts posts={props.posts} addPost={props.addPost}></MyPosts>
    </div>
  )
}




export default ProfileN