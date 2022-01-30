import cl from './Post.module.css';

const Post = () => {
    return (
        <div className={cl.item}>
            <img src='https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1' />
            post 1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post;