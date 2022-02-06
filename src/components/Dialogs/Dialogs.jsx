import React from 'react';
import cl from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, addUpdateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    debugger
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);

    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} name={m.name} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(addUpdateNewMessageTextActionCreator(text));
    }


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {/* {messagesElements} */}
                <div>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
                <div>
                    <button>Remove message</button>
                </div>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;