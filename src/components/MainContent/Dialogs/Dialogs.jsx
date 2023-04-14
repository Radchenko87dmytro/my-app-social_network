import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Dialogs.module.scss"

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={classes.dialogs}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let state = props.dialogsPage // we are taiking local state for this component
        console.log(state)

    let dialogsElements = state.dialogs.map((dialog, pos) =>
        <DialogItem name={dialog.name} id={dialog.id} key={pos}/>)

    let messagesElements = state.messages.map((message, pos) =>
        <Message message={message.message} key={pos}></Message>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = ()=>{
        props.sendMessage()
    }

    let onNewMessageChange = (e)=>{
        let body = e.target.value
        props.updateNewMessageBody(body)     
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>

                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button   onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs