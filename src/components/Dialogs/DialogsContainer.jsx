import React from 'react';
import { addMessageCreator, addUpdateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'


let AuthRedirectComponent = withAuthRedirect (Dialogs);


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator());
        },
        onMessageChange: (text) => {
            dispatch(addUpdateNewMessageTextCreator(text));
        }
    }
}



const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default SuperDialogsContainer;