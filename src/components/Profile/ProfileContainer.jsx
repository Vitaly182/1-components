import React from 'react';
import Profile from './Profile';
import cl from './Profile.module.css';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId:22389;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {     
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let mapDispatchToProps = {
    getProfile,
    getStatus,
    updateStatus
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


