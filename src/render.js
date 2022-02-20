import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from "./redux/state"
import {addPost, updateNewPostText} from "./redux/state"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



 export let rerenderEntireTree=(state)=> {
   ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
 }

 //rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
