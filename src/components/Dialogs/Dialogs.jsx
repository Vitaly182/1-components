import React from 'react';
import cl from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from './../../utils/validators/validators'
import { Textarea } from '../Common/FormsControls/FormsControl';



const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name} />);
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id} name={m.name} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
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
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageText' placeholder='Enter your message' validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
            <div>
                <button>Remove message</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({ 
    form: 'message'
})(MessageForm);


export default Dialogs;