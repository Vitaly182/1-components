import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setToggleIsFollowingProgress } from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {usersAPI} from './../../api/api'

class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.setToggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items);
            });
    }

    render() {

        return  <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    setToggleIsFollowingProgress={this.props.setToggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
            /> 
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setToggleIsFollowingProgress
}



export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);