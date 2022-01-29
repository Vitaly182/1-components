import cl from './Profile.module.css';

const Profile = () => {
    return (
        <div className={cl.content}>
            <div>
                <img src='http://www.pitert.ru/sites/default/files/cuba-russians-quarantine-shattered-sales.jpg'></img>
            </div>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=5686e5c8e9d0554a456d8a30227da3a5-4543876-images-thumbs&n=13&exp=1'></img>
            </div>
            <div>
                Posts
                <div>
                    New post
                </div>
            </div>
            <div className={cl.posts}>
                <div className={cl.item}>
                    post 1
                </div>
                <div className={cl.item}>
                    post 2
                </div>
            </div>
        </div>
    )

}

export default Profile;