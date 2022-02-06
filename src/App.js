import React from 'react';
import './App.scss';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div>
          <Routes>
            <Route path="/Profile/Profile.jsx" element ={<Profile/>} />
            <Route path="/Dialogs/Dialogs.jsx" element ={<Dialogs/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    )
};

export default App