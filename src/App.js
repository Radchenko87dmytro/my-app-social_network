import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileN from './components/MainContent/Profile/ProfileN';


import News from './components/MainContent/News/News';
import Music from './components/MainContent/Music/Music';
import Settings from './components/MainContent/Settings/Settings';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { addPost } from './redux/store';
import DialogsContainer from './components/MainContent/Dialogs/DialogsContainer';
//import store from './redux/redux-store';

const App = (props) => {
  //debugger
  // let posts = [
  //           {id: 1, message: "How, are you?", likesCount: 12},
  //           {id: 2, message: "It's my first post", likesCount: 11},  
  //       ]

 
  return (
    //<BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div>
          <Routes>
             
            <Route path="/Profile/*" element ={<ProfileN store={props.store}/>} />
            <Route path="/Dialogs/*" element ={<DialogsContainer store={props.store} />} /> 

             
          {/*    <Route path="/Profile/ProfileN.jsx" render ={ props=> <ProfileN/>} />
         <Route  path="/Dialogs/*"           render ={ ()=><Dialogs/>} /> */}

            <Route path="/News/*" element ={<News/>} />
            <Route path="/Music/*" element ={<Music/>} />
            <Route path="/Settings/*" element ={<Settings/>} />
            
          </Routes>
        </div>
      </div>
    //</BrowserRouter>
    )
};

export default App