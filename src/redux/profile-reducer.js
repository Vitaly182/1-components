import {profileAPI} from './../api/api'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, what\'s up?', likesCount: 15 },
        { id: 2, message: 'The best or nothing', likesCount: 25 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };   
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        
        default:
            return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST })
export const addUpdateNewPostTextCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })



export const getProfile = (match) => {
    return (
        (dispatch) => {
            let userId = match ? match.params.userId:22389;
            profileAPI.getProfile(userId).
                then(data => {
                    dispatch(setUserProfile(data));
            });       
        }
    )
} 

export default profileReducer;