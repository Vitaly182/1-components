import React from 'react';
import cl  from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = props.messages.map( m => <Message id={m.id} message={m.message} /> );

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;