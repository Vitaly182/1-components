import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, addUpdateNewPostTextCreator } from '../../../redux/state';



const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}  /> )

    // let newPostElement = React.createRef();
    
    let newPostText = props.newPostText;

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        // let text = newPostElement.current.value;
        props.dispatch(addUpdateNewPostTextCreator(text));
    }

    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                        onChange={onPostChange} 
                        // ref={newPostElement} 
                        value={newPostText} 
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={cl.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;