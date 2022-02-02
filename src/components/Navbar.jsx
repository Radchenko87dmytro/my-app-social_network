import React from 'react';
import classes from "./Navbar.module.css"

// let classes ={
//   "item": ""
// }

const Navbar = () => {
    return <nav className='{classes.nav}'>
    <ul>
      <li className="{classes.item}">
        <a href='#'>Profile</a>
      </li>
      <li className="item">
        <a>Messages</a>
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