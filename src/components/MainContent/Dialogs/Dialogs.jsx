import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dialogs.scss"
import { sendMessageCreator } from '../../../redux/state';
import { updateNewMessageBodyCreator } from '../../../redux/state';

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className='dialog'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className='message'>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = state.messages.map(message =>
        <Message message={message.message}></Message>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e)=>{
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))     
    }


    return (
        <div className='dialogs'>
            <div className='dialogs_items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>


                {/* <Message message={messagesData[0].message}></Message> 
                <Message message={messagesData[1].message}></Message> 
                 <Message message={messagesData[2].message}></Message> 
                <Message message={messagesData[3].message}></Message>
                <Message message={messagesData[4].message}></Message>
               <Message message={messagesData[5].message}></Message>   */}


                {/* kod refaktoring ktorego wyzej
                <div className='message'>Hi</div>
                <div className='message'>How are you?</div>
                <div className='message'>ok</div> */}
            </div>
        </div>
    )
}

export default Dialogs