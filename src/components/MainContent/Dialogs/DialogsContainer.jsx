import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../../StoreContext';

const DialogsContainer = () => {

    // let state = props.store.getState().dialogsPage // we are taiking local state for this component
    //     console.log(state)

    

    return (
        <StoreContext.Consumer> 
            {
            (store)=>{
                let state = store.getState().dialogsPage

                let onSendMessageClick = ()=>{
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (body)=>{
                    store.dispatch(updateNewMessageBodyCreator(body))     
                }

                return(
                    <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick} 
                    dialogsPage={state}/>
                )
            }
        }            
        </StoreContext.Consumer>
    )
}

export default DialogsContainer