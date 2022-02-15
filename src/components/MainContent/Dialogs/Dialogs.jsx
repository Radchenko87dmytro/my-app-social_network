import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dialogs.scss"


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
    // let dialogsData = [
    //     { id: 1, name: "Dima" },
    //     { id: 2, name: "Andreas" },
    //     { id: 3, name: "Sonia" },
    //     { id: 4, name: "Alexandra" },
    //     { id: 5, name: "Viktoa" },
    //     { id: 6, name: "Valery" },
    // ]

    // let messagesData = [
    //     { id: 1, message: "Hi" },
    //     { id: 2, message: "How are you?" },
    //     { id: 3, message: "ok" },
    //     { id: 4, message: "ok" },
    //     { id: 5, message: "ok" },
    //     { id: 5, message: "ok" },
    // ]

    let dialogsElements = props.dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id} />
    )

    // nowy refaktoring
    //  [
    // // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    // // <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    // // <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    // ];

    let messagesElements = props.messagesData.map(message =>
        <Message message={message.message}></Message>
    )


    return (
        <div className='dialogs'>
            <div className='dialogs_items'>

                {
                    dialogsElements
                }



                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                 <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/> */}


                {/* Czesc kodu refaktoring ktorego zrobiono wyzej

                <div className='dialog'>
                    <NavLink to="/Dialogs/1">Dima</NavLink> 
                </div>
                <div className='dialog'>
                    <NavLink to="/Dialogs/2">Andreas</NavLink> 
                </div>
                <div className='dialog'>
                    <NavLink to="/Dialogs/3">Sonia</NavLink> 
                </div>
                <div className='dialog'>
                    <NavLink to="/Dialogs/4">Alexandra</NavLink> 
                </div>
                <div className='dialog'>
                    <NavLink to="/Dialogs/5">Viktor</NavLink> 
                </div>
                <div className='dialog'>
                    <NavLink to="/Dialogs/6">Valery</NavLink> 
                </div> */}
            </div>
            <div className='messages'>

                {messagesElements}


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