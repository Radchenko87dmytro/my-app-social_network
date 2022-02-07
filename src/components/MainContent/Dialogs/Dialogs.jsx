import React from 'react';
import "./Dialogs.scss"

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className='dialogs_items'>
                <div className='dialog'>
                    Dima
                </div>
                <div className='dialog'>
                    Andreas
                </div>
                <div className='dialog'>
                    Sonia
                </div>
                <div className='dialog'>
                    Alexandra
                </div>
                <div className='dialog'>
                    Vktor
                </div>
                <div className='dialog'>
                    Valery
                </div>
            </div>
            <div className='messages'>
                <div className='message'>Hi</div>
                <div className='message'>How are you?</div>
                <div className='message'>ok</div>
            </div>
       </div>
    )
}

export default Dialogs