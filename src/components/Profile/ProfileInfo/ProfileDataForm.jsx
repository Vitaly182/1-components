import React, { useEffect, useState } from 'react'
import {reduxForm} from 'redux-form'
import Preloader from '../../Common/Preloader/Preloader';
import cl from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png';
import {createField, Input, Textarea} from './../../Common/FormsControls/FormsControl'
import classes from '../../Common/FormsControls/FormsControl.module.css';



const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {
            error && <div className={classes.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {createField(null, 'Full name', 'fullName', Input, []) }
            </div>
            <div>
                <b>Looking for a job</b>: {createField('checkbox', '', 'lookingForAJob', Input, []) }
            </div>
            <div>
                <b>My proffesional skills</b>: {createField(null, 'My proffesional skills', 'lookingForAJobDescription', Textarea, []) }
            </div>
            <div>
                <b>About me</b>: {createField(null, 'About me', 'aboutMe', Textarea, []) }
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={cl.contacts}>
                            <b>{key}: {createField(null, key, 'contacts.' + key, Input, []) } </b>
                        </div>
                    ) 
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ 
    form: 'edit-profile'
})(ProfileDataForm);




export default ProfileDataReduxForm;