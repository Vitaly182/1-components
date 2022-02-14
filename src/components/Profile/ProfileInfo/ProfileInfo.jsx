import Preloader from '../../Common/Preloader/Preloader';
import cl from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/* <div className={cl.image}>
                <img src='http://www.pitert.ru/sites/default/files/cuba-russians-quarantine-shattered-sales.jpg'/>
            </div> */}
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
                <ProfileStatus status={'Hoh'} />
            </div>
        </div>
    )

}

export default ProfileInfo;