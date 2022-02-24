import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo 
                savePhoto={props.savePhoto} 
                isOwner={props.isOwner} 
                profile={props.profile} 
                status={props.status} 
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )

}

export default Profile;