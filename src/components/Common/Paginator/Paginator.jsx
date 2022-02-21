import React from 'react';
import cl from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && cl.selectedPage}
                    onClick={(e) => { onPageChanged(p); }}>{p}</span>
            })}
        </div>
    )
}


export default Paginator;