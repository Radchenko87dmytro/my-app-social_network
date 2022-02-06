import React from 'react';
import classes from "./Navbar.scss"



const Navbar = () => {
    return <nav className='nav'>
    <ul>
      <li className="item">
        <a href='/Profile/Profile.jsx'>Profile</a>
      </li>
      <li className="item">
        <a href='/Dialogs/Dialogs.jsx'>Messages</a>
      </li>

      
      <li className="item">
        <a>News</a>
      </li>
      <li className="item">
        <a>Music</a>
      </li>
      <li className="item">
        <a>Settings</a>
      </li>
    </ul>
  </nav>
}


export default Navbar