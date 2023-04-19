import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from "./redux/redux-store"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import StoreContext, { Provider } from './StoreContext';
//import { Provider } from './StoreContext';

let rerenderEntireTree=(state)=> {
  
    ReactDOM.render(
  
    <BrowserRouter>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </Provider>  
      
    </BrowserRouter>, document.getElementById('root'));
}

  rerenderEntireTree(store.getState());

  store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
  })

  //store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
