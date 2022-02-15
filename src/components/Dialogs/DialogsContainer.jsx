import React from 'react';
import { addMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageCreator(newMessageText));
        }
    }
}

const SuperDialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default SuperDialogsContainer;