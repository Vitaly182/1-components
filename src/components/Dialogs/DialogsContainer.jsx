import React from 'react';
import { addMessageCreator, addUpdateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        let action = addMessageCreator()
        props.store.dispatch(action);
    }

    let onMessageChange = (text) => {
        let action = addUpdateNewMessageTextCreator(text)
        props.store.dispatch(action);
    }


    return (
        <Dialogs 
            dialogsPage={state}
            addMessage={addMessage} 
            onMessageChange={onMessageChange}   
        />
    );
};

export default DialogsContainer;