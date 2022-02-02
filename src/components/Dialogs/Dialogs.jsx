import React from 'react';
import cl  from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = props.state.messages.map( m => <Message id={m.id} message={m.message} name={m.name}/> );

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
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