const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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

    }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 7, message: body }]
            }
        default: 
            return state
    }
}

export const sendMessageCreator = ()=> ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body)=> 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer