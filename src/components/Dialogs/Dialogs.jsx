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
                <Message message='Hi' />
                <Message message="Who's that ?" />
                <Message message='Nothing' />
            </div>
        </div>
    );
};

export default Dialogs;