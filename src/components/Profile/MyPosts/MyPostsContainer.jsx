import React from 'react';
import { addPostCreator, addUpdateNewPostTextCreator } from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            dispatch(addUpdateNewPostTextCreator(text));
        }
    }
}

const SuperMyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);


export default SuperMyPostsContainer;