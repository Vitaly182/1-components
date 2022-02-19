import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from './../../../utils/validators/validators'
import { Textarea } from '../../Common/FormsControls/FormsControl';

const MyPosts = (props) => {

    let postsElements = 
        [...props.posts]
        .reverse()
        .map(p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)
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

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='Enter your post' validate={[required, maxLength10]}/>
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