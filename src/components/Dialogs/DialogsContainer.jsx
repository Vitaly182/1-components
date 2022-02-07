import React from 'react';
import { addMessageCreator, addUpdateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsPage;

                    let addMessage = () => {
                        let action = addMessageCreator()
                        store.dispatch(action);
                    }

                    let onMessageChange = (text) => {
                        let action = addUpdateNewMessageTextCreator(text)
                        store.dispatch(action);
                    }

                    return (
                        <Dialogs
                            dialogsPage={state}
                            addMessage={addMessage}
                            onMessageChange={onMessageChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;