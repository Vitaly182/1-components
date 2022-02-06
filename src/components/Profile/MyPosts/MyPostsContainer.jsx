import React from 'react';
import { addPostCreator, addUpdateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostCreator();
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = addUpdateNewPostTextCreator(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts 
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost} 
            updateNewPostText={onPostChange}        
        />
    )
}

export default MyPostsContainer;