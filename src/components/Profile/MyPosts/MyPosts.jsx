import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount}  /> )

    let newPostText = props.newPostText;

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                        onChange={onPostChange} 
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