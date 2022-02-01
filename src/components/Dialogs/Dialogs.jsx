import React from 'react';
import cl  from './Dialogs.module.css';
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) =>{

    return (
        <div className={cl.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Vitaly'}, 
        {id: 2, name: 'Max'}, 
        {id: 3, name: 'Bork'}, 
        {id: 4, name: 'Ork'}, 
        {id: 5, name: 'Lind'}
    ]

    let messages = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: "Who's that ?"}, 
        {id: 3, message: 'Nothing'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = messages.map( m => <Message id={m.id} message={m.message} /> );

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