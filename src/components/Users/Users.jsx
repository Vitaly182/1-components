import React from 'react';
import cl from './Users.module.css';

let Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, 
                photoUrl: 'https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1',
                followed: false, 
                fullname: 'Vitaly', 
                status: 'Very well', 
                location: { 
                    city: 'Moscow', 
                    country: 'Russia' 
                }
            },
            {
                id: 2, 
                photoUrl: 'https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1',
                followed: false, 
                fullname: 'Semen', 
                status: 'How', 
                location: { 
                    city: 'Minsk', 
                    country: 'Belarus' 
                }
            },
            {
                id: 3, 
                photoUrl: 'https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1',
                followed: true, 
                fullname: 'Rolik', 
                status: "Don't worry", 
                location: { 
                    city: 'New-York', 
                    country: 'USA' 
                }
            },
            {
                id: 4, 
                photoUrl: 'https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1',
                followed: true, 
                fullname: 'Rus', 
                status: 'Be happy', 
                location: { 
                    city: 'Tor', 
                    country: 'Tunis' 
                }
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={cl.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullname}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )

}

export default Users;