import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    
    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Enter your post' />
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm);


export default MyPosts;