import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.scss"



const Navbar = () => {
  return <nav className={styles.nav}>
    <ul>
      <li className="item">
        <NavLink to='/Profile'>Profil</NavLink>
      </li>
      <li className="item">
        <NavLink to='/Dialogs'>Messages(Dialogs)</NavLink>
      </li>
      <li className="item">
        <NavLink to='/Users'>Users</NavLink>
      </li>
      <li className="item">
        <NavLink to='/News/News.jsx'>News</NavLink>        
      </li>
      <li className="item">
        <NavLink to='/Music/Music.jsx'>Music</NavLink>        
      </li>
      <li className="item">
        <NavLink to='/Settings/Settings.jsx'>Settings</NavLink>        
      </li>
    </ul>
  </nav>
}


export default Navbar