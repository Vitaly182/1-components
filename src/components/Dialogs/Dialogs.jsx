import React from 'react';
import cl from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageCreator, addUpdateNewMessageTextCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);

    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} name={m.name} />);

    // let newMessageElement = React.createRef();

    let newMessageText = props.dialogsPage.newMessageText;


    let addMessage = () => {
        props.dispatch(addMessageCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        // let text = newMessageElement.current.value;
        props.dispatch(addUpdateNewMessageTextCreator(text));
    }


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
                        // ref={newMessageElement}
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