import React from 'react';
import cl  from './DialogItem.module.css';
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <div className={cl.item}>
                <img src='https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1' />
                <NavLink to={path}> {props.name} </NavLink>
            </div>

        </div>
    )
}



export default DialogItem;