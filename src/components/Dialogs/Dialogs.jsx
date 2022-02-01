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

    let dialogsData = [
        {id: 1, name: 'Vitaly'}, 
        {id: 2, name: 'Max'}, 
        {id: 3, name: 'Bork'}, 
        {id: 4, name: 'Ork'}, 
        {id: 5, name: 'Lind'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: "Who's that ?"}, 
        {id: 3, message: 'Nothing'}
    ]

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem name='Vitaly' id='1' />
                <DialogItem name='Max' id='2' />
                <DialogItem name='Bork' id='3' />
                <DialogItem name='Ork' id='4' />
                <DialogItem name='Lind' id='5' />
            </div>
            <div className={cl.messages}>
                <Message message='Hi' id='1'/>
                <Message message="Who's that ?" id='2' />
                <Message message='Nothing' id='3' />
            </div>
        </div>
    );
};

export default Dialogs;