import React from 'react';
import cl from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Navigate} from 'react-router-dom'


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name} />);

    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id} name={m.name} />);

    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    if (!props.isAuth) return <Navigate to={'/login'} />


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea
                        placeholder= 'Enter your message'
                        onChange={onMessageChange}
                        value={newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
                <div>
                    <button>Remove message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;