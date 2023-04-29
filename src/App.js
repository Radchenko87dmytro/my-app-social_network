import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/MainContent/Profile/Profile';
import News from './components/MainContent/News/News';
import Music from './components/MainContent/Music/Music';
import Settings from './components/MainContent/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/MainContent/Dialogs/DialogsContainer';
import UsersContainer from './components/MainContent/Users/UsersContainer';

const App = () => {
  
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div>
          <Routes>
             
            <Route path="/Profile/*" element ={<Profile/>} />
            <Route path="/Dialogs/*" element ={<DialogsContainer/>} />
            <Route path="/Users/*" element ={<UsersContainer/>} />  

            <Route path="/News/*" element ={<News/>} />
            <Route path="/Music/*" element ={<Music/>} />
            <Route path="/Settings/*" element ={<Settings/>} />
            
          </Routes>
        </div>
      </div>
    )
};

export default App