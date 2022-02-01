import React from 'react';
import cl  from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + ' ' + cl.active}>
                    Vitaly
                </div>
                <div className={cl.dialog}>
                    Max
                </div>
                <div className={cl.dialog}>
                    Bork
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>Who's that ?</div>
                <div className={cl.message}>Nothing</div>
            </div>
        </div>
    );
};

export default Dialogs;