import React from 'react';
import Profile from './Profile';
import cl from './Profile.module.css';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile } from '../../redux/profile-reducer'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match);
    }

    render() {     
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = {
    getProfile
}

let AuthRedirectComponent = withAuthRedirect (ProfileContainer);

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <AuthRedirectComponent {...props} match={match} />
    )
}

const SuperProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileMatch)

export default SuperProfileContainer;


