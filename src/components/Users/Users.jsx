import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';




let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
            {
                users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )
            }
        </div>
    )
}


export default Users;