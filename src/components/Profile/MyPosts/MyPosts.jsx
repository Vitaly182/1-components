import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postssData = [
        {id: 1, message: 'Hi, what\'s up?', likesCount: 15}, 
        {id: 2, message: 'The best or nothing', likesCount: 25}
    ]



    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={cl.posts}>
                <Post message="Hi, what's up?" likesCount='15' />
                <Post message='The best or nothing' likesCount='25' />
            </div>
        </div>
    )
}

export default MyPosts;