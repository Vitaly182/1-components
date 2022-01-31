import cl from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cl.item}>
            <img src='https://avatars.mds.yandex.net/i?id=06ad5aa77b521c6323be2ad602e04fb0-4965727-images-thumbs&n=13&exp=1' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;