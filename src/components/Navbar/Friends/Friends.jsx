import React from 'react';
import cl  from './Friends.module.css';


const Friend = (props) =>{

    return (
                <div className={cl.friend}>
                    <div>
                        <img src='https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1' />
                    </div>
                    <div>
                        {props.name}
                    </div>
                </div>
    )
}

export default Friend;