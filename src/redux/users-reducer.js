import { updateObjectInArray } from '../utils/validators/object-helpers';
import {usersAPI} from './../api/api'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }

        case SET_USERS:
            return { ...state, users: action.users }

            case SET_CURRENT_PAGE:
                return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId) }

        default:
            return state;
    }
};

export const acceptFollow = (userId) => ({ type: FOLLOW, userId })
export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const setToggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setToggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const requestUsers = (requestPage, pageSize) => {
    return (
        async (dispatch) => {
            dispatch(setToggleIsFetching(true));   
            dispatch(setCurrentPage(requestPage))  
            let response = await usersAPI.getUsers(requestPage, pageSize)
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));        
        }
    )
} 

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setToggleIsFollowingProgress(true, id));
    let response = await apiMethod(id)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setToggleIsFollowingProgress(false, id)); 
}

export const follow = (id) => {
    return (
        async (dispatch) => {
            followUnfollowFlow(dispatch, id, usersAPI.acceptFollow.bind(usersAPI), acceptFollow);    
        }
    )
} 

export const unfollow = (id) => {
    return (
        async (dispatch) => {
            followUnfollowFlow(dispatch, id, usersAPI.acceptUnfollow.bind(usersAPI), acceptUnfollow);    
        }
    )
} 

export default usersReducer;