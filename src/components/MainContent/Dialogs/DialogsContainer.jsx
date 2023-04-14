import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage // we are taiking local state for this component
        console.log(state)

    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body))     
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick} 
                 dialogsPage={state}
                 />
    )
}

export default DialogsContainer