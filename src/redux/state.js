import {rerenderEntireTree} from "../render"
let state = {

    profilePage: {
        
        posts: [
                {id: 1, postMessage: "How, are you?", likesCount: 12},
                {id: 2, postMessage: "It's my first post", likesCount: 11},  
            ],
        newPostText: "IT"
   },

    



     dialogsData : [

    { id: 1, name: "Dima" },
    { id: 2, name: "Andreas" },
    { id: 3, name: "Sonia" },
    { id: 4, name: "Alexandra" },
    { id: 5, name: "Viktoa" },
    { id: 6, name: "Valery" },
  ],
        messagesData: [

    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "ok" },
    { id: 4, message: "ok" },
    { id: 5, message: "ok" },
    { id: 6, message: "ok" },
  ]

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 50,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
};


export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
};

 
export default state;  
  
  
 