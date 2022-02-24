import Preloader from '../../Common/Preloader/Preloader';
import cl from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={cl.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto } className={cl.mainPhoto} />
                { props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.contacts.vk}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )

}

export default ProfileInfo;