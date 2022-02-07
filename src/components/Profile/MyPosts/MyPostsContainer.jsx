import React from 'react';
import { addPostCreator, addUpdateNewPostTextCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer> 
            {
                store => {
                    let state = store.getState();

                    let addPost = () => {
                        let action = addPostCreator();
                        store.dispatch(action);
                    }
                
                    let onPostChange = (text) => {
                        let action = addUpdateNewPostTextCreator(text)
                        store.dispatch(action);
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
        }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;