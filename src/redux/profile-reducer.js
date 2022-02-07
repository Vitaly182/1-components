const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, what\'s up?', likesCount: 15 },
        { id: 2, message: 'The best or nothing', likesCount: 25 }
    ],
    newPostText: ''
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
        
        default:
            return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST })
export const addUpdateNewPostTextCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;