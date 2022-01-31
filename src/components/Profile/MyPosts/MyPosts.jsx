import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={cl.posts}>
                <Post message="Hi, what's up?" likesCount='15' />
                <Post message='The best or nothing' likesCount='25' />
            </div>
        </div>
    )
}

export default MyPosts;