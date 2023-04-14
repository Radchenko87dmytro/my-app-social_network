//import {rerenderEntireTree} from "../render"
//import {rerenderEntireTree} from "../index"

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {

    profilePage: {
  
      posts: [
        { id: 1, message: "How, are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "IT cours"
    },
  
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Andreas" },
            { id: 3, name: "Sonia" },
            { id: 4, name: "Alexandra" },
            { id: 5, name: "Viktoa" },
            { id: 6, name: "Valery" },
          ],

        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "ok" },
            { id: 4, message: "ok" },
            { id: 5, message: "ok" },
            { id: 6, message: "ok" },
          ],
          
        newMessageBody: ""

        },
        
        sidebar: {}



    // dialogsData: [
  
    //   { id: 1, name: "Dima" },
    //   { id: 2, name: "Andreas" },
    //   { id: 3, name: "Sonia" },
    //   { id: 4, name: "Alexandra" },
    //   { id: 5, name: "Viktoa" },
    //   { id: 6, name: "Valery" },
    // ],

  },

  _callSubscriber () {
    console.log("state changed")
  },  

  getState(){
      return this._state;
  },
  subscribe  (observer) {
      this._callSubscriber=observer
  },

  // addPost () {
  //     let newPost = {
  //       id: 50,
  //       message: this._state.profilePage.newPostText,
  //       likesCount: 0
  //     }
  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = "";
  //     this._callSubscriber(this._state);
  // },
  // updateNewPostText (newText) {
  //     this._state.profilePage.newPostText = newText
  //   this._callSubscriber(this._state)},

  dispatch(action){//{type: "ADD-POST"}

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

    this._callSubscriber(this._state)

  }


}

// let rerenderEntireTree = () => {
//   console.log("state changed")
// }
// let state = {

//   profilePage: {

//     posts: [
//       { id: 1, message: "How, are you?", likesCount: 12 },
//       { id: 2, message: "It's my first post", likesCount: 11 },
//     ],
//     newPostText: "IT"
//   },


//   dialogsData: [

//     { id: 1, name: "Dima" },
//     { id: 2, name: "Andreas" },
//     { id: 3, name: "Sonia" },
//     { id: 4, name: "Alexandra" },
//     { id: 5, name: "Viktoa" },
//     { id: 6, name: "Valery" },
//   ],
//   messagesData: [

//     { id: 1, message: "Hi" },
//     { id: 2, message: "How are you?" },
//     { id: 3, message: "ok" },
//     { id: 4, message: "ok" },
//     { id: 5, message: "ok" },
//     { id: 6, message: "ok" },
//   ]

// }



// export const addPost = () => {
//   let newPost = {
//     id: 50,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   }
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = "";
//   rerenderEntireTree(state)
// };


// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText
//   rerenderEntireTree(state)
// };

// export const subscribe = (observer)=> {
//   rerenderEntireTree=observer
// }








export default store;
window.state = store;

//store - OOP
