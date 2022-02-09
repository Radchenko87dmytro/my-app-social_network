import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Dialogs.scss"


const DialogItem = (props) =>{
    let path = "/Dialogs/" + props.id
    return(
        <div className='dialog'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) =>{
    return(
        <div className='message'>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className='dialogs_items'>
                
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Andreas" id="2"/>
                <DialogItem name="Sonia" id="3"/>
                <DialogItem name="Alexandra" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valery" id="6"/>


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
                <Message message="Hi"></Message> 
                <Message message="How are you?"></Message> 
                <Message message="ok"></Message> 
                <Message message="ok"></Message> 


                {/* kod refaktoring ktorego wyzej
                <div className='message'>Hi</div>
                <div className='message'>How are you?</div>
                <div className='message'>ok</div> */}
            </div>
       </div>
    )
}

export default Dialogs