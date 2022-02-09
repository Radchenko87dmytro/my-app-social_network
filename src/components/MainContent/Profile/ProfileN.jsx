import React from 'react';
import "./Profile.scss"
import MyPosts from "./MyPosts"

const ProfileN = () => {
  return (
    <div className='content'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921297__340.jpg"></img>
      </div>
      <div className='discription'>
        ava+discription
      </div>
      <MyPosts></MyPosts>
    </div>
  )
}

export default ProfileN