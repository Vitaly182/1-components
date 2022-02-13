import React from 'react';
import Profile from './Profile';
import cl from './Profile.module.css';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile } from '../../redux/profile-reducer'
import {Navigate} from 'react-router-dom'


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match);
    }

    render() {

        if (!this.props.isAuth) return <Navigate to={'/login'} />

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    getProfile
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainer {...props} match={match} />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatch);