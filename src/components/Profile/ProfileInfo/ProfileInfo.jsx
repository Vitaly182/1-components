import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='http://www.pitert.ru/sites/default/files/cuba-russians-quarantine-shattered-sales.jpg'/>
            </div>
            <div className={cl.descriptionBlock}>
                some text
            </div>
        </div>
    )

}

export default ProfileInfo;