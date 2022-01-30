import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';

const Profile = () => {
    return (
        <div className={cl.content}>
            <div>
                <img src='http://www.pitert.ru/sites/default/files/cuba-russians-quarantine-shattered-sales.jpg'/>
            </div>
            {/* <div>
                <img src='https://avatars.mds.yandex.net/i?id=5686e5c8e9d0554a456d8a30227da3a5-4543876-images-thumbs&n=13&exp=1'/>
            </div> */}
            <MyPosts/>
        </div>
    )

}

export default Profile;