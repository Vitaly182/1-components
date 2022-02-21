import Preloader from '../../Common/Preloader/Preloader';
import cl from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={cl.descriptionBlock}>
                <img src={props.profile.photos.large} />
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